/**
 * gh.ts — Thin wrapper around the GitHub CLI (`gh`).
 *
 * Why `gh` and not octokit / fetch:
 *   - No env vars / no PATs / no token files.
 *   - The user is already authenticated. Everything the server fetches is
 *     attributed to that same user (so `report_error` opens issues as them).
 *   - Works the same in CI, on a developer laptop, and in a sandbox.
 *
 * Surface:
 *   - ghApi(path, args?)      → string  : `gh api <path>`
 *   - ghApiJson<T>(path, args?) → T    : same, parsed
 *   - ghDownload(path, dest)   → void  : `gh api ... > <dest>` (binary safe)
 *   - GhError                 : thrown when gh is missing / unauthenticated /
 *                                returns non-zero exit
 */

import { execFileSync, spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

export class GhError extends Error {
  constructor(message: string, public readonly exitCode: number = 1) {
    super(message);
    this.name = 'GhError';
  }
}

function runGh(args: string[]): { stdout: Buffer; stderr: string } {
  try {
    const res = spawnSync('gh', args, {
      encoding: 'buffer',
      maxBuffer: 64 * 1024 * 1024,
      windowsHide: true,
    });
    if (res.error) {
      const code = (res.error as NodeJS.ErrnoException).code;
      if (code === 'ENOENT') {
        throw new GhError(
          'gh CLI not found in PATH. Install it from https://cli.github.com and authenticate with `gh auth login`.',
          127,
        );
      }
      throw new GhError(`gh CLI failed to spawn: ${(res.error as Error).message}`, 1);
    }
    if (res.status !== 0) {
      const stderr = res.stderr ? res.stderr.toString('utf8') : '';
      throw new GhError(`gh ${args.join(' ')} exited ${res.status}: ${stderr.trim()}`, res.status ?? 1);
    }
    return { stdout: res.stdout, stderr: res.stderr ? res.stderr.toString('utf8') : '' };
  } catch (e) {
    if (e instanceof GhError) throw e;
    throw new GhError(`gh CLI invocation failed: ${(e as Error).message}`, 1);
  }
}

export function ghApi(apiPath: string, extra: string[] = []): string {
  const { stdout } = runGh(['api', apiPath, ...extra]);
  return stdout.toString('utf8');
}

export function ghApiJson<T = unknown>(apiPath: string, extra: string[] = []): T {
  const raw = ghApi(apiPath, extra);
  return JSON.parse(raw) as T;
}

/**
 * ghDownload — fetch raw bytes from a GitHub API endpoint and write them to
 * the given destination path. Use for tarballs and binary blobs.
 */
export function ghDownload(apiPath: string, dest: string): void {
  const { stdout } = runGh(['api', apiPath]);
  writeFileSync(dest, stdout);
}

/**
 * ghAuthStatus — light check used for diagnostic messages. Returns `null`
 * when gh is missing or unauthenticated; otherwise the gh username.
 */
export function ghAuthStatus(): string | null {
  try {
    const res = execFileSync('gh', ['api', 'user', '--jq', '.login'], {
      encoding: 'utf8',
      windowsHide: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return res.trim() || null;
  } catch {
    return null;
  }
}
