#!/usr/bin/env node
/**
 * Strata DS — P1↔P2 Sync Check
 *
 * Compares P1's current component files against the P2 manifest hashes.
 * Reports which components: are in sync, have drifted, or are missing.
 *
 * Usage:
 *   node sync/sync-check.mjs              # Full report
 *   node sync/sync-check.mjs --json       # JSON output
 *   node sync/sync-check.mjs --drift-only # Show only drifted/missing
 */

import { createHash } from "crypto";
import { readFileSync, existsSync, readdirSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DS_ROOT = join(__dirname, "..");
const MANIFEST_PATH = join(__dirname, "p2-manifest.json");
const P1_COMPONENTS_ROOT = join(DS_ROOT, "src/components");

const args = process.argv.slice(2);
const JSON_OUTPUT = args.includes("--json");
const DRIFT_ONLY = args.includes("--drift-only");

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function md5(content) {
  return createHash("md5").update(content).digest("hex");
}

/** Recursively collect all .tsx/.ts files under a directory */
function collectFiles(dir, base = dir) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath, base));
    } else if ([".tsx", ".ts"].includes(extname(entry.name)) && !entry.name.endsWith(".stories.tsx") && !entry.name.endsWith(".test.ts")) {
      results.push(fullPath);
    }
  }
  return results;
}

/** Find a P2 component file in P1's component tree by name */
function findP1File(componentName) {
  const allFiles = collectFiles(P1_COMPONENTS_ROOT);
  // First: try exact filename match (kebab-case of component name)
  const kebab = componentName
    .replace(/([A-Z])/g, (m, c, i) => (i === 0 ? c.toLowerCase() : `-${c.toLowerCase()}`));
  for (const f of allFiles) {
    const base = f.split(/[/\\]/).pop().replace(/\.(tsx|ts)$/, "");
    if (base === kebab || base === componentName.toLowerCase()) {
      return f;
    }
  }
  // Second: fuzzy — component name appears in path
  for (const f of allFiles) {
    if (f.toLowerCase().includes(kebab.toLowerCase())) {
      return f;
    }
  }
  return null;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

if (!existsSync(MANIFEST_PATH)) {
  console.error("❌ p2-manifest.json not found. Run: node sync/generate-manifest.mjs");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
const { components, generated, p2_version } = manifest;

const results = {
  generated_at: new Date().toISOString(),
  manifest_date: generated,
  p2_version,
  total: components.length,
  synced: [],
  drifted: [],
  missing: [],
};

for (const comp of components) {
  const p1File = findP1File(comp.name);

  if (!p1File) {
    results.missing.push({
      name: comp.name,
      category: comp.category,
      p2_path: comp.path,
      p2_size: comp.size,
      hasCVA: comp.hasCVA,
    });
    continue;
  }

  let p1Content;
  try {
    p1Content = readFileSync(p1File, "utf-8");
  } catch {
    results.missing.push({ name: comp.name, category: comp.category, error: "unreadable" });
    continue;
  }

  const p1Hash = md5(p1Content);

  if (p1Hash === comp.hash) {
    results.synced.push({ name: comp.name, file: p1File.replace(DS_ROOT, ".") });
  } else {
    results.drifted.push({
      name: comp.name,
      category: comp.category,
      p1_file: p1File.replace(DS_ROOT, "."),
      p2_path: comp.path,
      p1_size: p1Content.length,
      p2_size: comp.size,
      p1_hash: p1Hash,
      p2_hash: comp.hash,
      hasCVA: comp.hasCVA,
      size_delta: p1Content.length - comp.size,
    });
  }
}

if (JSON_OUTPUT) {
  console.log(JSON.stringify(results, null, 2));
  process.exit(0);
}

// ─── HUMAN REPORT ─────────────────────────────────────────────────────────────

const syncPct = Math.round((results.synced.length / results.total) * 100);
const driftPct = Math.round((results.drifted.length / results.total) * 100);
const missingPct = Math.round((results.missing.length / results.total) * 100);

console.log(`\n╔══════════════════════════════════════════════════════╗`);
console.log(`║         Strata DS — P1↔P2 Sync Check                ║`);
console.log(`╚══════════════════════════════════════════════════════╝`);
console.log(`\n  P2 manifest: ${manifest.generated} (v${p2_version})`);
console.log(`  Checked at:  ${results.generated_at}`);
console.log(`\n  Total P2 components: ${results.total}`);
console.log(`  ✅ In sync:  ${results.synced.length.toString().padStart(3)} (${syncPct}%)`);
console.log(`  ⚠️  Drifted: ${results.drifted.length.toString().padStart(3)} (${driftPct}%)`);
console.log(`  ❌ Missing:  ${results.missing.length.toString().padStart(3)} (${missingPct}%)`);

if (!DRIFT_ONLY) {
  if (results.synced.length > 0) {
    console.log(`\n──────────────── ✅ Synced (${results.synced.length}) ────────────────`);
    for (const c of results.synced) {
      console.log(`  ${c.name}`);
    }
  }
}

if (results.drifted.length > 0) {
  console.log(`\n──────────────── ⚠️  Drifted (${results.drifted.length}) ────────────────`);
  console.log(`  These components exist in P1 but hash differs from P2 manifest.`);
  console.log(`  This means P1 has been modified since the last P2 sync.\n`);
  for (const c of results.drifted) {
    const delta = c.size_delta > 0 ? `+${c.size_delta}b` : `${c.size_delta}b`;
    console.log(`  ${c.name.padEnd(35)} ${delta.padStart(8)}  ${c.hasCVA ? "CVA" : "   "}`);
    console.log(`    P1: ${c.p1_file}`);
    console.log(`    P2: ${c.p2_path}`);
  }
}

if (results.missing.length > 0) {
  console.log(`\n──────────────── ❌ Missing in P1 (${results.missing.length}) ────────────────`);
  console.log(`  These P2 components were not found in P1's src/components/.\n`);
  for (const c of results.missing) {
    const cva = c.hasCVA ? " [CVA]" : "";
    console.log(`  ${c.name.padEnd(35)} ${c.category || ""}${cva}`);
  }
}

if (results.drifted.length === 0 && results.missing.length === 0) {
  console.log(`\n  🎉 P1 and P2 are perfectly in sync!`);
} else {
  console.log(`\n──────────────────────────────────────────────────────`);
  console.log(`  Next steps:`);
  if (results.drifted.length > 0) {
    console.log(`  • Review drifted components — P1 intentional changes are OK,`);
    console.log(`    but run npm run sync:manifest in P2 if you back-ported fixes.`);
  }
  if (results.missing.length > 0) {
    console.log(`  • Missing components may not have been migrated yet.`);
    console.log(`    Copy from P2: src/components/ and add to src/components/index.ts`);
  }
}

console.log("");

process.exit(results.missing.length + results.drifted.length > 0 ? 1 : 0);
