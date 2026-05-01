#!/usr/bin/env node
/**
 * Strata DS — Install Pre-commit Hook
 *
 * Usage (from any project that consumes strata-ds):
 *   node node_modules/strata-design-system/scripts/install-hooks.mjs
 *
 * Or from inside strata-ds itself:
 *   node scripts/install-hooks.mjs
 */

import { writeFileSync, mkdirSync, existsSync, chmodSync } from "fs";
import { join } from "path";

const HOOK_DIR = join(process.cwd(), ".git", "hooks");
const HOOK_PATH = join(HOOK_DIR, "pre-commit");

if (!existsSync(join(process.cwd(), ".git"))) {
  console.error("❌ Not a git repository. Run from the project root.");
  process.exit(1);
}

mkdirSync(HOOK_DIR, { recursive: true });

const hookContent = `#!/bin/sh
# Strata DS Token Governance Hook
# Installed by: node scripts/install-hooks.mjs

# Find the pre-commit script (local or from node_modules)
HOOK_SCRIPT=""
if [ -f "scripts/pre-commit.mjs" ]; then
  HOOK_SCRIPT="scripts/pre-commit.mjs"
elif [ -f "node_modules/strata-design-system/scripts/pre-commit.mjs" ]; then
  HOOK_SCRIPT="node_modules/strata-design-system/scripts/pre-commit.mjs"
fi

if [ -z "$HOOK_SCRIPT" ]; then
  echo "⚠️  Strata DS pre-commit script not found. Skipping token audit."
  exit 0
fi

node "$HOOK_SCRIPT"
`;

writeFileSync(HOOK_PATH, hookContent, "utf-8");

try {
  chmodSync(HOOK_PATH, 0o755);
} catch {
  // chmod may not work on Windows — that's OK, git will still run it
}

console.log(`\n✅ Strata DS pre-commit hook installed at: ${HOOK_PATH}`);
console.log(`\n   The hook will:`);
console.log(`   • Detect your governance tier from CLAUDE.md`);
console.log(`   • Block commits with hex colors (Tier 1+2)`);
console.log(`   • Allow violations with // @ds-ignore: reason`);
console.log(`\n   Tier 1 (production): errors AND warnings block`);
console.log(`   Tier 2 (demos):      only hex errors block`);
console.log(`   Tier 3 (simulation): audit runs, never blocks`);
console.log(`\n   Uninstall: rm .git/hooks/pre-commit\n`);
