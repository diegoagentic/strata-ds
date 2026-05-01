#!/usr/bin/env node
/**
 * Strata DS — Refinement Proposal Analyzer (Phase 8)
 *
 * Reads REFINEMENT_PROPOSALS.md (written by report_error MCP tool) and
 * generates a summary of patterns, top violations, and actionable suggestions
 * for DS improvement.
 *
 * Usage:
 *   node scripts/analyze-refinements.mjs           # Print analysis
 *   node scripts/analyze-refinements.mjs --json    # JSON output
 *   node scripts/analyze-refinements.mjs --update  # Write REFINEMENT_ANALYSIS.md
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DS_ROOT = join(__dirname, "..");
const PROPOSALS_PATH = join(DS_ROOT, "REFINEMENT_PROPOSALS.md");
const ANALYSIS_PATH = join(DS_ROOT, "REFINEMENT_ANALYSIS.md");

const args = process.argv.slice(2);
const JSON_OUTPUT = args.includes("--json");
const UPDATE_FILE = args.includes("--update");

// ─── PARSE PROPOSALS ──────────────────────────────────────────────────────────

function parseProposals(content) {
  const entries = [];
  const blocks = content.split(/^## /m).filter(b => b.trim() && !b.startsWith("#"));

  for (const block of blocks) {
    const lines = block.trim().split("\n");
    const timestamp = lines[0]?.trim();
    if (!timestamp || !timestamp.includes("T")) continue;

    const entry = { timestamp };
    for (const line of lines.slice(1)) {
      const compMatch = line.match(/\*\*Component:\*\*\s*(.+)/);
      const errMatch = line.match(/\*\*Error:\*\*\s*(.+)/);
      const projMatch = line.match(/\*\*Project:\*\*\s*(.+)/);
      const tierMatch = line.match(/\*\*Tier:\*\*\s*(.+)/);
      const fixMatch = line.match(/\*\*Suggested Fix:\*\*\s*(.+)/);
      const ctxMatch = line.match(/\*\*Context:\*\*\s*(.+)/);

      if (compMatch) entry.component = compMatch[1].trim();
      if (errMatch) entry.error = errMatch[1].trim();
      if (projMatch) entry.project = projMatch[1].trim();
      if (tierMatch) entry.tier = tierMatch[1].trim();
      if (fixMatch) entry.suggestedFix = fixMatch[1].trim();
      if (ctxMatch) entry.context = ctxMatch[1].trim();
    }

    if (entry.error) entries.push(entry);
  }

  return entries;
}

// ─── ANALYZE ──────────────────────────────────────────────────────────────────

function analyze(entries) {
  const componentFreq = {};
  const errorPatterns = {};
  const projectFreq = {};
  const tierFreq = {};
  const fixes = [];

  for (const e of entries) {
    // Component frequency
    const comp = e.component || "unknown";
    componentFreq[comp] = (componentFreq[comp] || 0) + 1;

    // Error pattern categorization
    const errorLower = (e.error || "").toLowerCase();
    let category = "other";
    if (errorLower.includes("hex") || errorLower.includes("#")) category = "hex-color";
    else if (errorLower.includes("status") || errorLower.includes("green") || errorLower.includes("red") || errorLower.includes("amber")) category = "status-token";
    else if (errorLower.includes("variant") || errorLower.includes("missing")) category = "missing-variant";
    else if (errorLower.includes("dark") || errorLower.includes("light mode")) category = "dark-mode";
    else if (errorLower.includes("button") || errorLower.includes("raw <")) category = "raw-element";
    else if (errorLower.includes("card") || errorLower.includes("container")) category = "container";
    errorPatterns[category] = (errorPatterns[category] || 0) + 1;

    // Project frequency
    if (e.project) projectFreq[e.project] = (projectFreq[e.project] || 0) + 1;

    // Tier frequency
    if (e.tier) tierFreq[e.tier] = (tierFreq[e.tier] || 0) + 1;

    // Collect fixes
    if (e.suggestedFix) fixes.push({ component: comp, fix: e.suggestedFix, count: 1 });
  }

  // Sort
  const topComponents = Object.entries(componentFreq).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const topPatterns = Object.entries(errorPatterns).sort((a, b) => b[1] - a[1]);
  const topProjects = Object.entries(projectFreq).sort((a, b) => b[1] - a[1]);

  // Dedupe fixes
  const fixMap = {};
  for (const f of fixes) {
    const key = `${f.component}::${f.fix}`;
    if (!fixMap[key]) fixMap[key] = { ...f };
    else fixMap[key].count++;
  }
  const topFixes = Object.values(fixMap).sort((a, b) => b.count - a.count).slice(0, 10);

  return {
    total: entries.length,
    topComponents,
    topPatterns,
    topProjects,
    topFixes,
    tierBreakdown: tierFreq,
    dateRange: entries.length > 0 ? {
      first: entries[0].timestamp,
      last: entries[entries.length - 1].timestamp,
    } : null,
  };
}

// ─── GENERATE REPORT ──────────────────────────────────────────────────────────

function generateReport(analysis) {
  const lines = [
    `# Refinement Analysis Report`,
    `\nGenerated: ${new Date().toISOString()}`,
    `Total proposals: ${analysis.total}`,
    "",
  ];

  if (analysis.dateRange) {
    lines.push(`Period: ${analysis.dateRange.first} → ${analysis.dateRange.last}`, "");
  }

  lines.push(`## Top Error Patterns`, "");
  for (const [pattern, count] of analysis.topPatterns) {
    const pct = Math.round((count / analysis.total) * 100);
    lines.push(`- **${pattern}**: ${count} occurrences (${pct}%)`);
  }

  lines.push("", `## Most Affected Components`, "");
  for (const [comp, count] of analysis.topComponents) {
    lines.push(`- **${comp}**: ${count} errors`);
  }

  if (analysis.topProjects.length > 0) {
    lines.push("", `## By Project`, "");
    for (const [proj, count] of analysis.topProjects) {
      lines.push(`- **${proj}**: ${count} errors`);
    }
  }

  if (Object.keys(analysis.tierBreakdown).length > 0) {
    lines.push("", `## By Tier`, "");
    for (const [tier, count] of Object.entries(analysis.tierBreakdown)) {
      lines.push(`- Tier ${tier}: ${count} errors`);
    }
  }

  if (analysis.topFixes.length > 0) {
    lines.push("", `## Top Suggested Fixes (Action Items)`, "");
    for (const fix of analysis.topFixes) {
      lines.push(`- **[${fix.component}]** ${fix.fix} _(${fix.count}x)_`);
    }
  }

  // Recommendations
  lines.push("", `## DS Improvement Recommendations`, "");
  for (const [pattern, count] of analysis.topPatterns.slice(0, 3)) {
    if (pattern === "status-token") {
      lines.push(`- **Status Tokens**: ${count} violations — Consider adding status badge variants to Badge CVA so bg-status-* is the default path`);
    } else if (pattern === "missing-variant") {
      lines.push(`- **Missing Variants**: ${count} requests — Review and add the most-requested variants to CVA definitions`);
    } else if (pattern === "hex-color") {
      lines.push(`- **Hex Colors**: ${count} violations — Run \`npm run audit:tokens --fix\` in affected projects`);
    } else if (pattern === "dark-mode") {
      lines.push(`- **Dark Mode**: ${count} violations — Add dark mode testing to component review checklist`);
    }
  }

  return lines.join("\n");
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

if (!existsSync(PROPOSALS_PATH)) {
  const msg = "No REFINEMENT_PROPOSALS.md found. No errors have been reported via report_error yet.";
  if (JSON_OUTPUT) {
    console.log(JSON.stringify({ error: msg }));
  } else {
    console.log(`\n${msg}`);
    console.log(`Use the MCP tool: report_error({ component: "...", error: "..." })\n`);
  }
  process.exit(0);
}

const content = readFileSync(PROPOSALS_PATH, "utf-8");
const entries = parseProposals(content);
const analysis = analyze(entries);

if (JSON_OUTPUT) {
  console.log(JSON.stringify(analysis, null, 2));
  process.exit(0);
}

const report = generateReport(analysis);

if (UPDATE_FILE) {
  writeFileSync(ANALYSIS_PATH, report, "utf-8");
  console.log(`\n✅ Analysis written to: REFINEMENT_ANALYSIS.md`);
  console.log(`   Total proposals analyzed: ${analysis.total}`);
} else {
  console.log("\n" + report + "\n");
}

process.exit(0);
