/**
 * version.ts — installed-vs-latest version check for the consumer's DS.
 *
 * Used by the `check_version` MCP tool. Compares the consumer's installed
 * version (read from their `package.json`) against the latest release tag
 * from GitHub.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { ghApiJson, GhError } from './gh.js';

const REPO_OWNER = process.env.STRATA_REPO_OWNER || 'diegoagentic';
const REPO_NAME = process.env.STRATA_REPO_NAME || 'strata-ds';
const PACKAGE_NAME = process.env.STRATA_PACKAGE_NAME || 'strata-design-system';

interface PackageJson {
  name?: string;
  version?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

interface GithubRelease {
  tag_name: string;
  html_url: string;
  name: string;
  published_at: string;
}

export interface VersionReport {
  installed: string | null;
  latest: string | null;
  upToDate: boolean;
  searchedAt: string;
  changelogUrl: string | null;
  notes: string;
}

/**
 * Resolve the installed DS version by walking up from `cwd` looking for a
 * `node_modules/<pkg>/package.json` or a top-level `package.json` that has
 * the pkg listed as a dependency.
 */
function resolveInstalledVersion(searchRoot: string): string | null {
  let dir = resolve(searchRoot);
  while (true) {
    // 1. node_modules/<pkg>/package.json
    const installed = join(dir, 'node_modules', PACKAGE_NAME, 'package.json');
    if (existsSync(installed)) {
      try {
        const pkg = JSON.parse(readFileSync(installed, 'utf8')) as PackageJson;
        if (pkg.version) return pkg.version;
      } catch {
        /* keep walking */
      }
    }
    // 2. Top-level package.json with pkg as a dependency
    const top = join(dir, 'package.json');
    if (existsSync(top)) {
      try {
        const pkg = JSON.parse(readFileSync(top, 'utf8')) as PackageJson;
        const v = pkg.dependencies?.[PACKAGE_NAME] ?? pkg.devDependencies?.[PACKAGE_NAME];
        if (v) return v.replace(/^[\^~]/, '');
      } catch {
        /* keep walking */
      }
    }
    const parent = dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

export function checkVersion(searchRoot?: string): VersionReport {
  const root = searchRoot ?? process.cwd();
  const installed = resolveInstalledVersion(root);
  let latest: string | null = null;
  let changelogUrl: string | null = null;
  try {
    const rel = ghApiJson<GithubRelease>(`repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`);
    latest = rel.tag_name?.replace(/^v/, '') ?? null;
    changelogUrl = rel.html_url ?? null;
  } catch (e) {
    const msg = e instanceof GhError ? e.message : (e as Error).message;
    return {
      installed,
      latest: null,
      upToDate: false,
      searchedAt: root,
      changelogUrl: null,
      notes: `Could not reach GitHub: ${msg}`,
    };
  }
  const upToDate = installed != null && latest != null && installed === latest;
  const notes = installed == null
    ? `No installed version of ${PACKAGE_NAME} found in or above ${root}.`
    : upToDate
      ? 'Installed version matches latest release.'
      : `Installed ${installed}, latest ${latest}. Run \`npm install ${PACKAGE_NAME}@latest\` to update.`;
  return { installed, latest, upToDate, searchedAt: root, changelogUrl, notes };
}

export function formatVersionReport(r: VersionReport): string {
  const status = r.upToDate ? '✅ Up-to-date' : r.latest == null ? '⚠ Unknown' : '❌ Outdated';
  const lines = [
    `# Strata DS — Version check`,
    '',
    `Status:    **${status}**`,
    `Installed: ${r.installed ?? 'not found'}`,
    `Latest:    ${r.latest ?? 'not reached'}`,
    `Searched:  ${r.searchedAt}`,
    r.changelogUrl ? `Changelog: ${r.changelogUrl}` : null,
    '',
    r.notes,
  ].filter(Boolean);
  return lines.join('\n');
}
