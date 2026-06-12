/**
 * source.ts — Resolve the canonical `governance/` root.
 *
 * Resolution order:
 *   1. `STRATA_LOCAL_ROOT` env var → use that path verbatim (override for
 *      local development).
 *   2. Cached GitHub tarball at `~/.cache/strata-ds-mcp/<sha>/` — fetched
 *      via `gh` CLI on first miss. Cached by the current main SHA so
 *      subsequent runs hit cache.
 *   3. Bundled `governance/` directory shipped next to the binary
 *      (fallback when offline or `gh` is missing).
 *
 * The function returns a directory path that contains LAWS.md, rules/,
 * anti-patterns/, tokens/ at its root (the same layout we have in the
 * repo's `governance/` folder).
 */

import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extract } from 'tar';
import { ghApiJson, ghDownload, GhError } from './gh.js';

const REPO_OWNER = process.env.STRATA_REPO_OWNER || 'diegoagentic';
const REPO_NAME = process.env.STRATA_REPO_NAME || 'strata-ds';
const REPO_REF = process.env.STRATA_REPO_REF || 'main';
const CACHE_ROOT = resolve(homedir(), '.cache', 'strata-ds-mcp');

let cachedPath: string | null = null;
let cachedAt: number | null = null;
const CACHE_TTL_MS = 1000 * 60 * 10; // 10 min — re-check main SHA periodically

interface GithubBranch {
  name: string;
  commit: { sha: string };
}

function bundledFallbackRoot(): string | null {
  // The binary is shipped as `dist/mcp-server/<entry>.js`, and the
  // governance/ directory is copied next to it by the build step.
  // Walk up to find the first `governance/LAWS.md` we can read.
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    const candidates = [
      resolve(here, '../../governance'),       // dev: src/mcp-server/lib → ../../governance
      resolve(here, '../governance'),          // dist: dist/mcp-server → ../governance
      resolve(here, 'governance'),             // dist flat
    ];
    for (const c of candidates) {
      if (existsSync(join(c, 'LAWS.md'))) return c;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function resolveCachedSha(): string | null {
  // Find the most recently modified <sha>/ subdir that contains LAWS.md.
  if (!existsSync(CACHE_ROOT)) return null;
  let bestSha: string | null = null;
  let bestMtime = 0;
  for (const entry of readdirSync(CACHE_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const root = join(CACHE_ROOT, entry.name);
    if (!existsSync(join(root, 'LAWS.md'))) continue;
    const m = statSync(root).mtimeMs;
    if (m > bestMtime) {
      bestMtime = m;
      bestSha = entry.name;
    }
  }
  return bestSha;
}

function fetchTarballToCache(sha: string): string {
  if (!existsSync(CACHE_ROOT)) mkdirSync(CACHE_ROOT, { recursive: true });
  const targetDir = join(CACHE_ROOT, sha);
  if (existsSync(join(targetDir, 'LAWS.md'))) return targetDir;
  mkdirSync(targetDir, { recursive: true });

  const tarballPath = join(tmpdir(), `strata-ds-${sha}.tar.gz`);
  ghDownload(`repos/${REPO_OWNER}/${REPO_NAME}/tarball/${sha}`, tarballPath);

  // The tarball expands to a directory like `repo-<short-sha>/`.
  // We want only the inner governance/ — but the simplest is to extract
  // everything into a staging dir and copy the governance subtree.
  const stagingDir = join(targetDir, '__staging');
  mkdirSync(stagingDir, { recursive: true });
  extract({
    file: tarballPath,
    cwd: stagingDir,
    sync: true,
  } as Parameters<typeof extract>[0]);
  // Find the top-level extracted folder
  const top = readdirSync(stagingDir, { withFileTypes: true }).find((e) => e.isDirectory());
  if (!top) {
    throw new GhError(`Tarball for ${sha} extracted empty.`);
  }
  const innerGovernance = join(stagingDir, top.name, 'governance');
  if (!existsSync(innerGovernance)) {
    throw new GhError(`Tarball for ${sha} contains no governance/ directory.`);
  }
  // Move the inner governance directory contents into <sha>/ root.
  // Cheap approach: walk + copy.
  copyDir(innerGovernance, targetDir);
  // Drop staging.
  try {
    rmrf(stagingDir);
  } catch {
    /* best-effort */
  }
  // Drop tarball.
  try {
    writeFileSync(tarballPath, '');
  } catch {
    /* best-effort */
  }
  return targetDir;
}

function copyDir(src: string, dest: string) {
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const s = join(src, entry.name);
    const d = join(dest, entry.name);
    if (entry.isDirectory()) {
      if (!existsSync(d)) mkdirSync(d, { recursive: true });
      copyDir(s, d);
    } else if (entry.isFile()) {
      writeFileSync(d, readFileSync(s));
    }
  }
}

function rmrf(p: string) {
  if (!existsSync(p)) return;
  if (statSync(p).isDirectory()) {
    for (const entry of readdirSync(p, { withFileTypes: true })) {
      rmrf(join(p, entry.name));
    }
    rmdirSync(p);
  } else {
    unlinkSync(p);
  }
}

// Minimal fs imports kept inline so the optional steps don't blow up the
// module's import list at the top.
import { readFileSync, rmdirSync, unlinkSync } from 'node:fs';

/**
 * getGovernancePath — main entry. Returns a directory that contains
 * LAWS.md, rules/, anti-patterns/, tokens/.
 */
export function getGovernancePath(): string {
  // Cache the resolution for 10 minutes so repeated MCP tool calls don't
  // re-shell out to `gh` for every request.
  if (cachedPath && cachedAt && Date.now() - cachedAt < CACHE_TTL_MS) {
    return cachedPath;
  }

  // 1. Explicit override
  const override = process.env.STRATA_LOCAL_ROOT;
  if (override && existsSync(join(override, 'LAWS.md'))) {
    cachedPath = override;
    cachedAt = Date.now();
    return override;
  }

  // 2. gh-sourced tarball + cache
  try {
    const branch = ghApiJson<GithubBranch>(`repos/${REPO_OWNER}/${REPO_NAME}/branches/${REPO_REF}`);
    const sha = branch.commit.sha;
    const cached = fetchTarballToCache(sha);
    cachedPath = cached;
    cachedAt = Date.now();
    return cached;
  } catch (err) {
    // Fall through to bundled fallback
    if (!(err instanceof GhError)) {
      // Unexpected error — surface but try fallback first.
      // eslint-disable-next-line no-console
      console.error('[strata-ds-mcp] failed to fetch governance via gh:', (err as Error).message);
    }
  }

  // 3. Try the most recent cached SHA (offline / gh missing)
  const lastCached = resolveCachedSha();
  if (lastCached) {
    cachedPath = join(CACHE_ROOT, lastCached);
    cachedAt = Date.now();
    return cachedPath;
  }

  // 4. Bundled fallback
  const bundled = bundledFallbackRoot();
  if (bundled) {
    cachedPath = bundled;
    cachedAt = Date.now();
    return bundled;
  }

  throw new GhError(
    'Could not resolve governance source: no STRATA_LOCAL_ROOT, gh CLI failed, no cache, and no bundled fallback. Set STRATA_LOCAL_ROOT to a local governance/ directory.',
  );
}

/**
 * Reset the in-memory cache. Useful for tests; not exposed as a tool.
 */
export function resetGovernanceCache(): void {
  cachedPath = null;
  cachedAt = null;
}
