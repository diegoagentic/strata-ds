#!/usr/bin/env node
/**
 * mine-corrections.mjs — Scan past Claude Code conversations for recurring
 * correction patterns and generate a diagnostic to inform future rules.
 *
 * Reads:
 *   - `C:/Users/User/.claude/projects/{slug}/**\/*.jsonl`
 *     where `{slug}` matches any Strata-related project (see PROJECT_RX)
 *
 * Writes:
 *   - `governance/correction-patterns-diagnostic.md`
 *
 * What it looks for: user messages that signal a correction or pushback
 * (lexicon below, bilingual EN+ES). Each match is bucketed into a topic
 * (tokens · layout · component-choice · accessibility · microcopy · loading
 * / empty · modal · other). Output: counts + representative snippets +
 * derived rule recommendations.
 *
 * Usage:
 *   node governance/mine-corrections.mjs
 *
 * No external deps. Pure Node + filesystem.
 */

import {
  readFileSync, writeFileSync, statSync, readdirSync,
} from 'node:fs';
import { resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, 'correction-patterns-diagnostic.md');

const PROJECTS_ROOT = resolve(homedir(), '.claude', 'projects');

const PROJECT_RX = /design-system|strata|config-evolution|demo-leland|smart-comparator|ui-dealer|expert-hub|mbi-builder|inbound-outbound/i;

// ── Exclusion lexicon (skip these messages entirely — noise, not corrections) ──

const EXCLUSION_RX = [
  // IDE / system meta wrapper tags
  /<ide_opened_file>/i,
  /<ide_selection>/i,
  /<command-name>/i,
  /<system-reminder>/i,
  /<local-command-stdout>/i,
  /<local-command-stderr>/i,
  /<bash-input>/i,
  /<bash-stdout>/i,
  // Environment / deployment / git friction
  /\bvercel\b/i,
  /\bnetlify\b/i,
  /\blocalhost\b/i,
  /\bdev server\b/i,
  /\bnpm (?:install|run|start)\b/i,
  /\bbuild fail/i,
  /\bbranch\b.*(?:main|master|deploy)/i,
  /\bgit (?:status|push|pull|merge|checkout|stash|reset|branch)/i,
  /\bmerge conflict/i,
  /\brebase/i,
  /\bcache\b/i,
  /\bbrowser cache/i,
  /\bversion (?:que|del)/i,
  // Task continuation / session resume requests
  /\bdonde (?:est[áa]bamos|me quedé)/i,
  /\bla tarea (?:de claude|en claude|que )/i,
  /\bhistorial de (?:tareas|conversaciones)/i,
  /\bresume (?:the|this)\b/i,
  /\bcontinue from\b/i,
  /\bbuscar el proyecto/i,
  // Pure agent permissions / approvals
  /^(?:yes|si|sí|ok|okay|sure|go ahead|prosigue|continua|sigue|adelante)\.?$/i,
];

// ── Correction lexicon ──────────────────────────────────────────────────

const CORRECTION_HINTS = [
  // Direct negation
  /\bno\b/i, /\bdon'?t\b/i, /\bnope\b/i, /\bnot (?:like|right|correct|what)/i,
  /\bwrong\b/i, /\bincorrect\b/i, /\bthat'?s? not\b/i,
  /\bno me gusta\b/i, /\bno es\b/i, /\bno funciona\b/i, /\bno se ve\b/i,
  /\bestá mal\b/i, /\bestá feo\b/i, /\bmal hecho\b/i,
  // Imperative corrections
  /\bfix\b/i, /\bchange\b/i, /\binstead of\b/i, /\bshould be\b/i,
  /\bremove\b/i, /\bdelete\b/i, /\brevert\b/i, /\bundo\b/i,
  /\bcambia\b/i, /\bcorrige\b/i, /\bajusta\b/i, /\bmodifica\b/i,
  /\belimina\b/i, /\bquita\b/i, /\bdevuelve\b/i, /\bregresa\b/i,
  // Frustration / repetition
  /\bagain\b/i, /\bstill\b/i, /\botra vez\b/i, /\bsigue\b/i,
  /\bya te (?:dije|pedí)\b/i, /\bya te lo (?:dije|pedí)\b/i,
  /\btodavía\b/i,
];

// Topic buckets — each entry has a list of keywords + a label + a hint for rule mapping
const TOPICS = [
  {
    key: 'tokens',
    label: 'Token violations (hex, primitives, dark: cascades)',
    rule_ref: 'LAW 1, rules/01-color-tokens, anti-patterns ERROR 01-05',
    rx: [/\bhex\b/i, /#[0-9a-f]{3,8}\b/i, /\btoken/i, /\bcolor token/i,
         /\btext-(?:zinc|gray|red|green|blue|yellow|lime|purple|pink)/i,
         /\bbg-(?:white|black|zinc|gray)/i, /\bdark:/i, /\bsemantic/i,
         /\bsemántica/i, /\bbrand/i],
  },
  {
    key: 'layout',
    label: 'Layout / density / spacing complaints',
    rule_ref: 'rules/09-layout-density, rules/10-spacing-rhythm',
    rx: [/\bscroll/i, /\bspacing\b/i, /\bpadding\b/i, /\bmargin\b/i,
         /\bgap\b/i, /\bvertical\b/i, /\bhorizontal\b/i, /\borphan/i,
         /\bhuérfano/i, /\bdense?\b/i, /\bcompact\b/i, /\bcomfortable\b/i,
         /\bgrid\b/i, /\bstack\b/i, /\bcrowded\b/i, /\bspread/i,
         /\bdesperdicia\b/i, /\bapretado/i],
  },
  {
    key: 'component-choice',
    label: 'Component selection (raw HTML vs DS component, wrong variant)',
    rule_ref: 'rules/04-buttons-and-actions, code-usage',
    rx: [/\b<button\b/i, /\b<a\s+href\b/i, /\b<table\b/i, /\b<select\b/i,
         /\b<h[1-6]\b/i, /\bdiv onClick\b/i, /\bcustom (?:modal|dialog)/i,
         /\busa(?:r)? (?:Button|Dialog|Link|Field|Table)\b/i,
         /\bvariant\b/i, /\bwrong (?:variant|component)/i],
  },
  {
    key: 'accessibility',
    label: 'Accessibility (focus, aria, keyboard, contrast)',
    rule_ref: 'rules/15-accessibility-focus',
    rx: [/\baria/i, /\bfocus\b/i, /\boutline\b/i, /\bkeyboard\b/i,
         /\bscreen reader\b/i, /\bcontrast\b/i, /\baccessib/i,
         /\baria-label\b/i, /\btab(?:bing|ulación)\b/i, /\bteclado\b/i],
  },
  {
    key: 'microcopy',
    label: 'Microcopy / button labels / error messages',
    rule_ref: 'rules/14-microcopy-tone',
    rx: [/\blabel\b/i, /\bcopy\b/i, /\bmessage\b/i, /\bwording\b/i,
         /\bbutton (?:text|label|says)/i, /\berror message/i,
         /\btexto\b/i, /\bmensaje\b/i, /\betiqueta\b/i, /\btoo (?:long|chatty|short)/i,
         /\bambiguous\b/i],
  },
  {
    key: 'loading-empty',
    label: 'Loading / empty / error states',
    rule_ref: 'rules/12-empty-states, rules/13-loading-states',
    rx: [/\bloading\b/i, /\bspinner\b/i, /\bskeleton\b/i, /\bempty\b/i,
         /\bno data\b/i, /\bno results\b/i, /\bno hay\b/i,
         /\bvacío\b/i, /\bcargando\b/i, /\bplaceholder\b/i],
  },
  {
    key: 'modal',
    label: 'Modal / overlay / dialog structure',
    rule_ref: 'rules/08-modal-patterns',
    rx: [/\bmodal\b/i, /\bdialog\b/i, /\bsheet\b/i, /\bdrawer\b/i,
         /\bpopover\b/i, /\boverlay\b/i, /\btoo (?:tall|big|wide)/i,
         /\bheader (?:too|is)\b.*(?:big|large|tall)/i],
  },
  {
    key: 'icons',
    label: 'Icon usage / sizing / color',
    rule_ref: 'rules/05-icons',
    rx: [/\bicon\b/i, /\blucide\b/i, /\bheroicon/i, /\bsvg\b/i,
         /\bicono/i, /\bstroke-width\b/i, /\bemoji\b/i, /\b<span>.+?<\/span>.*?icon/i],
  },
];

const OTHER = { key: 'other', label: 'Other corrections (uncategorized)', rule_ref: '—', rx: [] };

// ── Walk ────────────────────────────────────────────────────────────────

function* walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (_) {
    return;
  }
  for (const e of entries) {
    const full = resolve(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else if (e.isFile() && full.endsWith('.jsonl')) {
      yield full;
    }
  }
}

function isStrataRelated(p) {
  return PROJECT_RX.test(p);
}

// ── Parse + score ───────────────────────────────────────────────────────

function looksLikeNoise(text) {
  return EXCLUSION_RX.some((rx) => rx.test(text));
}

function looksLikeCorrection(text) {
  if (!text || typeof text !== 'string') return false;
  if (text.length > 4000) return false; // skip long tool outputs etc
  if (text.length < 6) return false;     // skip "no", "ok", etc.
  if (looksLikeNoise(text)) return false;
  return CORRECTION_HINTS.some((rx) => rx.test(text));
}

function classify(text) {
  const matches = [];
  for (const topic of TOPICS) {
    if (topic.rx.some((rx) => rx.test(text))) matches.push(topic.key);
  }
  return matches.length === 0 ? ['other'] : matches;
}

function getTopic(key) {
  return TOPICS.find((t) => t.key === key) ?? OTHER;
}

function snippet(text) {
  const trimmed = String(text).trim();
  if (trimmed.length <= 180) return trimmed;
  return trimmed.slice(0, 175) + '…';
}

// Anonymize: strip project-specific identifiers
function anonymize(text) {
  return text
    .replace(/Leland Furniture|NorthPoint|Steelcase|Continua IL|MANATT|Officeworks|Smart Comparator|Strata Estimator|MBI Builder|Quote Converter|Expert Hub|UI[\s-]?Dealer/gi, '[client]')
    .replace(/SO\d{6,}|QT-\d+|PO-\d+|ACK-\d+|RFQ-?\d+/g, '[doc-id]')
    .replace(/\b[\w.-]+@[\w.-]+\.\w+\b/g, '[email]');
}

// ── Run ─────────────────────────────────────────────────────────────────

function run() {
  if (!statSync(PROJECTS_ROOT, { throwIfNoEntry: false })?.isDirectory()) {
    console.error(`Projects root not found: ${PROJECTS_ROOT}`);
    process.exit(1);
  }

  const stats = {
    sessions: 0,
    messages: 0,
    user_messages: 0,
    corrections: 0,
    excluded_noise: 0,
    skipped: 0,
  };
  const byTopic = new Map();
  for (const t of [...TOPICS, OTHER]) byTopic.set(t.key, {
    topic: t,
    count: 0,
    samples: [],
    sessions_touched: new Set(),
    per_session: new Map(), // sessionPath -> count
  });

  for (const jsonl of walk(PROJECTS_ROOT)) {
    if (!isStrataRelated(jsonl)) continue;
    stats.sessions++;
    let raw;
    try {
      raw = readFileSync(jsonl, 'utf8');
    } catch (_) { stats.skipped++; continue; }
    const lines = raw.split('\n');
    for (const line of lines) {
      if (!line.trim()) continue;
      let obj;
      try { obj = JSON.parse(line); } catch (_) { continue; }
      stats.messages++;
      // Claude Code session shape varies; we look for role=user with text content
      const role = obj.role ?? obj.message?.role ?? obj.type;
      if (role !== 'user') continue;
      stats.user_messages++;
      // Content can be a string or an array of parts
      const content = obj.content ?? obj.message?.content ?? obj.text;
      let text = '';
      if (typeof content === 'string') text = content;
      else if (Array.isArray(content)) {
        text = content
          .filter((p) => typeof p === 'string' || (p && (p.type === 'text' || typeof p.text === 'string')))
          .map((p) => (typeof p === 'string' ? p : p.text ?? ''))
          .join('\n');
      }
      if (!text) continue;
      // Count excluded noise separately (for visibility)
      if (text.length > 6 && text.length < 4000 && looksLikeNoise(text)
          && CORRECTION_HINTS.some((rx) => rx.test(text))) {
        stats.excluded_noise++;
        continue;
      }
      if (!looksLikeCorrection(text)) continue;
      stats.corrections++;
      const topics = classify(text);
      const anonText = anonymize(text);
      for (const tKey of topics) {
        const bucket = byTopic.get(tKey);
        bucket.count++;
        bucket.sessions_touched.add(jsonl);
        bucket.per_session.set(jsonl, (bucket.per_session.get(jsonl) ?? 0) + 1);
        if (bucket.samples.length < 6) bucket.samples.push(snippet(anonText));
      }
    }
  }

  // Compute intensity per bucket: max per-session count + distinct-session count
  for (const b of byTopic.values()) {
    b.distinct_sessions = b.sessions_touched.size;
    b.max_per_session = b.per_session.size === 0 ? 0 :
      Math.max(...b.per_session.values());
    b.avg_per_session = b.per_session.size === 0 ? 0 :
      (b.count / b.per_session.size);
    // Strength score: total × distinct sessions × max intensity (log-scaled)
    b.strength = Math.round(
      b.count * Math.log10(1 + b.distinct_sessions) * Math.log10(1 + b.max_per_session) * 10
    );
  }

  // ── Output ────────────────────────────────────────────────────────────

  const lines = [];
  lines.push('# Strata DS — Correction Patterns Diagnostic');
  lines.push('');
  lines.push(`> Auto-generated by \`governance/mine-corrections.mjs\` on ${new Date().toISOString().slice(0, 10)}.`);
  lines.push('> Scans \`.claude/projects/\` for past Claude Code sessions in Strata-related projects, detects messages that look like corrections, applies an exclusion filter (env / IDE / git / cache friction), buckets the rest by topic, and ranks by strength score.');
  lines.push('');
  lines.push('## Coverage');
  lines.push('');
  lines.push(`- Sessions scanned: **${stats.sessions}**`);
  lines.push(`- Total messages: ${stats.messages.toLocaleString()}`);
  lines.push(`- User messages: ${stats.user_messages.toLocaleString()}`);
  lines.push(`- **Correction signals (after exclusion filter)**: ${stats.corrections.toLocaleString()}`);
  lines.push(`- Excluded as noise (env / IDE / git / cache talk that triggered a correction word): ${stats.excluded_noise.toLocaleString()}`);
  lines.push(`- Skipped files (read error): ${stats.skipped}`);
  lines.push('');
  lines.push('## Strength-ranked buckets');
  lines.push('');
  lines.push('Strength score balances raw count with distinct-session breadth and max in-session intensity. Higher = more universal pain point worth a rule.');
  lines.push('');
  lines.push('| Rank | Bucket | Signals | Distinct sessions | Max in 1 session | Strength | Linked rule(s) |');
  lines.push('|---:|---|---:|---:|---:|---:|---|');
  const sorted = [...byTopic.values()].sort((a, b) => b.strength - a.strength);
  sorted.forEach((b, i) => {
    lines.push(`| ${i + 1} | ${b.topic.label} | ${b.count} | ${b.distinct_sessions} | ${b.max_per_session} | ${b.strength} | ${b.topic.rule_ref} |`);
  });
  lines.push('');
  lines.push('## Sample corrections per bucket');
  lines.push('');
  lines.push('> Project / client names are anonymized (`[client]`, `[doc-id]`, `[email]`). Up to 6 samples per bucket.');
  lines.push('');

  for (const b of sorted) {
    if (b.count === 0) continue;
    lines.push(`### ${b.topic.label} — ${b.count} signals · ${b.distinct_sessions} sessions · max ${b.max_per_session}/session`);
    lines.push(`_Linked rule(s): ${b.topic.rule_ref} · Strength: ${b.strength}_`);
    lines.push('');
    for (const s of b.samples) {
      lines.push('- > ' + s.replace(/\n+/g, ' '));
    }
    lines.push('');
  }

  // Rule-recommendation section
  lines.push('## Rule recommendations');
  lines.push('');
  lines.push('Ranked by strength score. Buckets with strength > 100 indicate the rule applies across many sessions AND is repeatedly violated within them — strong candidates for emphasis, sub-rules, or new content.');
  lines.push('');
  for (const b of sorted) {
    if (b.count < 5) continue;
    const marker = b.strength > 200 ? '🔥' : b.strength > 100 ? '⚡' : '·';
    if (b.topic.key === 'other') {
      lines.push(`${marker} **${b.topic.label}** (${b.count} signals · strength ${b.strength}) — uncategorized. Inspect samples to propose a new rule family.`);
    } else {
      lines.push(`${marker} **${b.topic.label}** (${b.count} signals · strength ${b.strength}) — extend or add sub-rules in \`${b.topic.rule_ref}\`.`);
    }
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- Heuristic-based. Captures explicit corrections; misses tone-only frustration, positive feedback, contextually-implied corrections.');
  lines.push('- Multi-topic messages count once per topic.');
  lines.push('- Exclusion filter skips messages dominated by env / IDE / git / cache talk to avoid drowning the UX signal in deployment noise.');
  lines.push('- Strength = count × log₁₀(1 + distinct sessions) × log₁₀(1 + max per session) × 10. Universal + intense = high.');
  lines.push('- Re-run after every major demo cycle to track regressions.');

  writeFileSync(OUT, lines.join('\n') + '\n', 'utf8');
  console.log(`Wrote ${OUT}`);
  console.log(`Stats: ${stats.sessions} sessions, ${stats.corrections} correction signals across ${stats.user_messages} user messages.`);
}

run();
