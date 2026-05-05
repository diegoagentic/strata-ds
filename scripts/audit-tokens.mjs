#!/usr/bin/env node
/**
 * Strata DS — Token Audit Script
 *
 * Scans .tsx/.ts source files for governance violations:
 *   - Hex hardcoded colors (bg-[#...], text-[#...], border-[#...], fill-[#...])
 *   - Raw Tailwind semantic colors used for status states
 *     (bg-green-*, bg-red-*, bg-amber-*, bg-blue-*, bg-violet-*)
 *   - Inline styles with color values
 *
 * Usage:
 *   node scripts/audit-tokens.mjs                    # Scan src/
 *   node scripts/audit-tokens.mjs --path <dir>       # Scan specific dir
 *   node scripts/audit-tokens.mjs --json             # JSON output
 *   node scripts/audit-tokens.mjs --fix              # Show fix suggestions
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DS_ROOT = join(__dirname, "..");

const args = process.argv.slice(2);
const JSON_OUTPUT = args.includes("--json");
const SHOW_FIX = args.includes("--fix");
const pathIdx = args.indexOf("--path");
const SCAN_ROOT = pathIdx >= 0 ? args[pathIdx + 1] : join(DS_ROOT, "src");

// ─── VIOLATION RULES ──────────────────────────────────────────────────────────

const RULES = [
  {
    id: "hex-color-class",
    severity: "error",
    description: "Hardcoded hex color in Tailwind class",
    pattern: /\b(bg|text|border|ring|fill|stroke|from|to|via)-\[#[0-9a-fA-F]{3,8}\]/g,
    suggest: (match) => {
      if (match.includes("bg-")) return `bg-background | bg-card | bg-status-* | bg-brand-*`;
      if (match.includes("text-")) return `text-foreground | text-muted-foreground | text-status-*`;
      if (match.includes("border-")) return `border-border | border-input`;
      return "Use a DS semantic token";
    },
  },
  {
    id: "hex-inline-style",
    severity: "error",
    description: "Hardcoded hex in inline style",
    pattern: /(?:backgroundColor|color|borderColor)\s*:\s*['"]#[0-9a-fA-F]{3,8}['"]/g,
    suggest: () => "Use var(--color-*) CSS variable or Tailwind token class",
  },
  {
    id: "raw-green-status",
    severity: "warning",
    description: "Raw Tailwind green used for status — use bg-status-success",
    pattern: /\b(bg|text|border)-green-[0-9]{3}\b/g,
    suggest: () => "bg-status-success / text-status-success",
  },
  {
    id: "raw-red-status",
    severity: "warning",
    description: "Raw Tailwind red used for status — use bg-status-error",
    pattern: /\b(bg|text|border)-red-[0-9]{3}\b/g,
    suggest: () => "bg-status-error / text-status-error (or bg-destructive for buttons)",
  },
  {
    id: "raw-amber-status",
    severity: "warning",
    description: "Raw Tailwind amber used for status — use bg-status-warning",
    pattern: /\b(bg|text|border)-amber-[0-9]{3}\b/g,
    suggest: () => "bg-status-warning / text-status-warning",
  },
  {
    id: "raw-blue-status",
    severity: "warning",
    description: "Raw Tailwind blue used for status — use bg-status-info",
    pattern: /\b(bg|text|border)-blue-[0-9]{3}\b/g,
    suggest: () => "bg-status-info / text-status-info",
  },
  {
    id: "raw-violet-status",
    severity: "warning",
    description: "Raw Tailwind violet/purple used for AI state — use bg-status-ai",
    pattern: /\b(bg|text|border)-(violet|purple)-[0-9]{3}\b/g,
    suggest: () => "bg-status-ai / text-status-ai",
  },
  {
    id: "bg-white-hardcoded",
    severity: "warning",
    description: "bg-white hardcoded — breaks dark mode",
    pattern: /\bbg-white\b/g,
    suggest: () => "bg-background | bg-card",
  },
  {
    id: "text-gray-hardcoded",
    severity: "warning",
    description: "text-gray-* hardcoded — use semantic foreground tokens",
    pattern: /\btext-gray-[0-9]{3}\b/g,
    suggest: () => "text-foreground | text-muted-foreground",
  },
];

// ─── EXCLUSIONS ───────────────────────────────────────────────────────────────

const EXCLUDE_DIRS = ["node_modules", "dist", "storybook-static", ".git", "archive"];
const EXCLUDE_FILES = ["build-tokens.mjs", "generate-manifest.mjs", "sync-check.mjs", "audit-tokens.mjs"];
// Lines with @ds-ignore are intentionally exempt
const DS_IGNORE_PATTERN = /@ds-ignore/;

// ─── FILE COLLECTOR ───────────────────────────────────────────────────────────

function collectFiles(dir) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE_DIRS.includes(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath));
    } else if ([".tsx", ".ts"].includes(extname(entry.name)) && !EXCLUDE_FILES.includes(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

// ─── SCANNER ─────────────────────────────────────────────────────────────────

function scanFile(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const violations = [];

  for (const rule of RULES) {
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      const line = lines[lineIdx];
      if (DS_IGNORE_PATTERN.test(line)) continue;

      rule.pattern.lastIndex = 0;
      let match;
      while ((match = rule.pattern.exec(line)) !== null) {
        violations.push({
          rule: rule.id,
          severity: rule.severity,
          description: rule.description,
          file: filePath.replace(DS_ROOT, "."),
          line: lineIdx + 1,
          column: match.index + 1,
          match: match[0],
          suggestion: SHOW_FIX ? rule.suggest(match[0]) : undefined,
        });
      }
    }
  }

  return violations;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const files = collectFiles(SCAN_ROOT);
let allViolations = [];

for (const file of files) {
  const violations = scanFile(file);
  allViolations = allViolations.concat(violations);
}

const errors = allViolations.filter(v => v.severity === "error");
const warnings = allViolations.filter(v => v.severity === "warning");

if (JSON_OUTPUT) {
  console.log(JSON.stringify({ total: allViolations.length, errors: errors.length, warnings: warnings.length, violations: allViolations }, null, 2));
  process.exit(allViolations.length > 0 ? 1 : 0);
}

// ─── HUMAN REPORT ─────────────────────────────────────────────────────────────

console.log(`\n╔══════════════════════════════════════════════════════╗`);
console.log(`║         Strata DS — Token Audit                      ║`);
console.log(`╚══════════════════════════════════════════════════════╝`);
console.log(`\n  Scanned: ${SCAN_ROOT.replace(DS_ROOT, ".")}`);
console.log(`  Files:   ${files.length}`);
console.log(`\n  ❌ Errors:   ${errors.length} (Tier 1+2 commit blockers)`);
console.log(`  ⚠️  Warnings: ${warnings.length} (Tier 1 blockers, Tier 2 warnings)`);

if (allViolations.length === 0) {
  console.log(`\n  🎉 No violations found!`);
} else {
  // Group by file
  const byFile = {};
  for (const v of allViolations) {
    if (!byFile[v.file]) byFile[v.file] = [];
    byFile[v.file].push(v);
  }

  console.log(`\n──────────────────────────────────────────────────────`);

  for (const [file, vs] of Object.entries(byFile)) {
    console.log(`\n  ${file}`);
    for (const v of vs) {
      const icon = v.severity === "error" ? "❌" : "⚠️ ";
      console.log(`    ${icon} L${v.line}:${v.column}  ${v.match}`);
      console.log(`       ${v.description}`);
      if (v.suggestion) {
        console.log(`       → ${v.suggestion}`);
      }
    }
  }

  console.log(`\n──────────────────────────────────────────────────────`);
  console.log(`  To suppress a specific line: add // @ds-ignore: reason`);
  console.log(`  To see fix suggestions: node scripts/audit-tokens.mjs --fix`);
}

console.log("");
process.exit(errors.length > 0 ? 1 : 0);
