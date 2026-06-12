/**
 * skills.ts — install_skill tool implementation.
 *
 * Copies `governance/skills/planning-strata-ui/SKILL.md` (bundled with the
 * MCP server) to either the current project's `.claude/skills/` directory
 * or the user's `~/.claude/skills/` directory.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';
import { getGovernancePath } from './source.js';

const SKILL_NAME = 'planning-strata-ui';

export type InstallTarget = 'user' | 'project';

interface InstallResult {
  destination: string;
  bytesWritten: number;
  alreadyInstalled: boolean;
  target: InstallTarget;
}

function resolveSkillSource(): string {
  // Preferred path: alongside the governance/ tree
  const govRoot = getGovernancePath();
  const govSkill = resolve(govRoot, 'skills', SKILL_NAME, 'SKILL.md');
  if (existsSync(govSkill)) return govSkill;
  // Fallback: bundled next to the server binary
  const here = dirname(fileURLToPath(import.meta.url));
  const candidates = [
    resolve(here, '..', '..', 'governance', 'skills', SKILL_NAME, 'SKILL.md'),
    resolve(here, '..', 'governance', 'skills', SKILL_NAME, 'SKILL.md'),
    resolve(here, 'skills', SKILL_NAME, 'SKILL.md'),
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  throw new Error(`Could not locate bundled SKILL.md for "${SKILL_NAME}".`);
}

function destinationRoot(target: InstallTarget, projectRoot?: string): string {
  if (target === 'user') return resolve(homedir(), '.claude', 'skills');
  return resolve(projectRoot ?? process.cwd(), '.claude', 'skills');
}

export function installSkill(target: InstallTarget, projectRoot?: string): InstallResult {
  const source = resolveSkillSource();
  const content = readFileSync(source, 'utf8');
  const destDir = join(destinationRoot(target, projectRoot), SKILL_NAME);
  const destFile = join(destDir, 'SKILL.md');
  const alreadyInstalled = existsSync(destFile);
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
  writeFileSync(destFile, content, 'utf8');
  return {
    destination: destFile,
    bytesWritten: Buffer.byteLength(content, 'utf8'),
    alreadyInstalled,
    target,
  };
}

export function formatInstallResult(r: InstallResult): string {
  const lines = [
    `# planning-strata-ui — install ${r.alreadyInstalled ? 'updated' : 'completed'}`,
    '',
    `Target:       ${r.target === 'user' ? 'user (~/.claude/skills/)' : 'project (./.claude/skills/)'}`,
    `Destination:  ${r.destination}`,
    `Bytes:        ${r.bytesWritten.toLocaleString()}`,
    '',
    r.alreadyInstalled
      ? 'The skill was already installed — it has been refreshed in place.'
      : 'New install. Restart your agent client (Claude Code) so the skill loads.',
  ];
  return lines.join('\n');
}
