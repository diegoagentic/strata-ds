#!/usr/bin/env node
/**
 * build-guide.mjs — Generate a single self-contained HTML guide that
 * consolidates every Strata DS rule into one shareable, offline-readable
 * artifact.
 *
 * Reads:
 *   - governance/LAWS.md
 *   - governance/rules/01..07-*.md
 *   - governance/anti-patterns/common-errors.md
 *   - governance/tokens/token-reference.md
 *   - src/styles/tokens/variables.css       (light tokens)
 *   - src/styles/tokens/variables-dark.css  (dark tokens)
 *
 * Writes:
 *   - governance/rules-guide.html  (single self-contained file)
 *
 * Usage:
 *   node governance/build-guide.mjs
 */

import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

// ── Paths ──────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(__dirname, 'rules-guide.html');

// ── Sources ────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'laws',                  title: 'Absolute Laws',           file: 'governance/LAWS.md' },
  { id: 'rules-color-tokens',    title: 'Color tokens',            file: 'governance/rules/01-color-tokens.md' },
  { id: 'rules-brand-colors',    title: 'Brand colors',            file: 'governance/rules/02-brand-colors.md' },
  { id: 'rules-containers',      title: 'Containers and cards',    file: 'governance/rules/03-containers-and-cards.md' },
  { id: 'rules-buttons',         title: 'Buttons and actions',     file: 'governance/rules/04-buttons-and-actions.md' },
  { id: 'rules-icons',           title: 'Icons',                   file: 'governance/rules/05-icons.md' },
  { id: 'rules-typography',      title: 'Typography',              file: 'governance/rules/06-typography.md' },
  { id: 'rules-elevation',       title: 'Elevation and shadows',   file: 'governance/rules/07-elevation.md' },
  { id: 'anti-patterns',         title: 'Anti-patterns (10)',      file: 'governance/anti-patterns/common-errors.md' },
  { id: 'token-reference',       title: 'Token reference',         file: 'governance/tokens/token-reference.md' },
];

const TOKENS_LIGHT = 'src/styles/tokens/variables.css';
const TOKENS_DARK  = 'src/styles/tokens/variables-dark.css';

// ── Helpers ────────────────────────────────────────────────────────────

function read(rel) {
  return readFileSync(resolve(ROOT, rel), 'utf8');
}

const MD_OPTIONS = { gfm: true, headerIds: false, mangle: false };

function renderMarkdown(md) {
  // Strip the top-level `# title` (we render our own <h2> per section)
  const withoutTitle = md.replace(/^#\s+[^\n]+\n+/, '');
  return marked.parse(withoutTitle, MD_OPTIONS);
}

/**
 * Parse a tokens CSS file into Map<tokenName, value>.
 * Accepts both `:root { ... }` and `.dark { ... }` blocks (handled transparently
 * because we match `--name: value;` lines anywhere).
 */
function parseTokens(css) {
  const tokens = new Map();
  const re = /^\s*(--[a-z0-9-]+)\s*:\s*([^;]+);/gim;
  let m;
  while ((m = re.exec(css)) !== null) {
    const name = m[1].trim();
    const value = m[2].trim();
    if (!tokens.has(name)) tokens.set(name, value);
  }
  return tokens;
}

function categoryOf(name) {
  if (name.startsWith('--color-chart')) return 'Chart';
  if (name.startsWith('--color-sidebar')) return 'Sidebar';
  if (name.startsWith('--color-brand')) return 'Brand scale';
  if (name.startsWith('--color-')) return 'Semantic colors';
  if (name.startsWith('--shadow-')) return 'Shadow / elevation';
  if (name.startsWith('--radius')) return 'Radius';
  if (name.startsWith('--font-')) return 'Typography';
  if (name.startsWith('--spacing')) return 'Spacing';
  return 'Other';
}

const CAT_ORDER = [
  'Semantic colors',
  'Brand scale',
  'Sidebar',
  'Chart',
  'Shadow / elevation',
  'Radius',
  'Typography',
  'Spacing',
  'Other',
];

function isColor(value) {
  return /^(#|rgb|hsl|oklch|var\()/i.test(value.trim());
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildTokenTable(light, dark) {
  const names = Array.from(new Set([...light.keys(), ...dark.keys()])).sort();
  const grouped = new Map();
  for (const name of names) {
    const cat = categoryOf(name);
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat).push(name);
  }

  let html = '';
  for (const cat of CAT_ORDER) {
    const rows = grouped.get(cat);
    if (!rows || rows.length === 0) continue;
    html += `<h3>${cat}</h3>\n`;
    html += '<table class="token-table"><thead><tr>';
    html += '<th>Token</th><th>Light</th><th>Dark</th>';
    html += '</tr></thead><tbody>';
    for (const name of rows) {
      const l = light.get(name) ?? '—';
      const d = dark.get(name) ?? '—';
      html += '<tr>';
      html += `<td class="token-name"><code>${escapeHtml(name)}</code></td>`;
      html += `<td class="token-value">${swatch(l)}<code>${escapeHtml(l)}</code></td>`;
      html += `<td class="token-value">${swatch(d)}<code>${escapeHtml(d)}</code></td>`;
      html += '</tr>';
    }
    html += '</tbody></table>\n';
  }
  return html;
}

function swatch(value) {
  if (!isColor(value)) return '';
  return `<span class="swatch" style="background:${escapeHtml(value)}" aria-hidden="true"></span>`;
}

// ── Style ──────────────────────────────────────────────────────────────
// Hard-coded from variables.css so the guide stays self-contained even when
// opened with file://. The HTML chrome respects light/dark via a manual
// toggle that toggles the `.dark` class on <html>.

function buildStyle(tokensLight, tokensDark) {
  const pick = (m, k) => m.get(k) ?? '#000';
  const tL = {
    bg: pick(tokensLight, '--color-background'),
    fg: pick(tokensLight, '--color-foreground'),
    card: pick(tokensLight, '--color-card'),
    muted: pick(tokensLight, '--color-muted'),
    mutedFg: pick(tokensLight, '--color-muted-foreground'),
    border: pick(tokensLight, '--color-border'),
    primary: pick(tokensLight, '--color-primary'),
    primaryFg: pick(tokensLight, '--color-primary-foreground'),
    accent: pick(tokensLight, '--color-accent') || '#fafafa',
    destructive: pick(tokensLight, '--color-destructive'),
    success: pick(tokensLight, '--color-success') || '#10B981',
    warning: pick(tokensLight, '--color-warning') || '#F59E0B',
  };
  const tD = {
    bg: pick(tokensDark, '--color-background'),
    fg: pick(tokensDark, '--color-foreground'),
    card: pick(tokensDark, '--color-card'),
    muted: pick(tokensDark, '--color-muted'),
    mutedFg: pick(tokensDark, '--color-muted-foreground'),
    border: pick(tokensDark, '--color-border'),
    primary: pick(tokensDark, '--color-primary'),
    primaryFg: pick(tokensDark, '--color-primary-foreground'),
    accent: pick(tokensDark, '--color-accent') || '#171717',
    destructive: pick(tokensDark, '--color-destructive'),
    success: pick(tokensDark, '--color-success') || '#10B981',
    warning: pick(tokensDark, '--color-warning') || '#F59E0B',
  };

  return `
:root {
  --bg: ${tL.bg};
  --fg: ${tL.fg};
  --card: ${tL.card};
  --muted: ${tL.muted};
  --muted-fg: ${tL.mutedFg};
  --border: ${tL.border};
  --primary: ${tL.primary};
  --primary-fg: ${tL.primaryFg};
  --accent: ${tL.accent};
  --destructive: ${tL.destructive};
  --success: ${tL.success};
  --warning: ${tL.warning};
}
html.dark {
  --bg: ${tD.bg};
  --fg: ${tD.fg};
  --card: ${tD.card};
  --muted: ${tD.muted};
  --muted-fg: ${tD.mutedFg};
  --border: ${tD.border};
  --primary: ${tD.primary};
  --primary-fg: ${tD.primaryFg};
  --accent: ${tD.accent};
  --destructive: ${tD.destructive};
  --success: ${tD.success};
  --warning: ${tD.warning};
}

* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  transition: background-color 0.2s ease, color 0.2s ease;
}

a { color: var(--fg); text-decoration: underline; text-decoration-color: var(--border); text-underline-offset: 3px; }
a:hover { text-decoration-color: var(--fg); }

code, pre, kbd, samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.85em;
}
code {
  background: var(--muted);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  border: 1px solid var(--border);
}
pre {
  background: var(--muted);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px 16px;
  overflow-x: auto;
  margin: 12px 0;
}
pre > code {
  background: transparent;
  border: none;
  padding: 0;
}

h1, h2, h3, h4 { color: var(--fg); margin-top: 1.4em; margin-bottom: 0.5em; line-height: 1.25; }
h1 { font-size: 32px; font-weight: 800; letter-spacing: -0.02em; margin-top: 0; }
h2 { font-size: 24px; font-weight: 700; padding-bottom: 0.3em; border-bottom: 1px solid var(--border); }
h3 { font-size: 18px; font-weight: 700; }
h4 { font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted-fg); }

p { margin: 0.8em 0; }
ul, ol { padding-left: 1.4em; }
li { margin: 0.3em 0; }

strong { color: var(--fg); font-weight: 700; }
blockquote {
  border-left: 3px solid var(--primary);
  background: color-mix(in srgb, var(--primary) 8%, transparent);
  padding: 0.6em 1em;
  margin: 0.8em 0;
  border-radius: 0 6px 6px 0;
}

hr { border: none; border-top: 1px solid var(--border); margin: 2em 0; }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  font-size: 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
th, td { padding: 8px 12px; text-align: left; vertical-align: top; }
thead { background: var(--muted); }
thead th { font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted-fg); }
tbody tr { border-top: 1px solid var(--border); }
tbody tr:nth-child(odd) { background: color-mix(in srgb, var(--muted) 30%, transparent); }

/* Layout */

.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

aside.sidebar {
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  overflow-y: auto;
  background: var(--card);
  border-right: 1px solid var(--border);
  padding: 24px 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.brand .logo {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: var(--fg);
  color: var(--bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: -0.02em;
}
.brand .title { font-weight: 800; font-size: 14px; }
.brand .meta { font-size: 11px; color: var(--muted-fg); }

nav.toc { display: flex; flex-direction: column; gap: 2px; margin-top: 12px; }
nav.toc a {
  text-decoration: none;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--muted-fg);
  transition: background 0.15s, color 0.15s;
}
nav.toc a:hover { background: var(--muted); color: var(--fg); }
nav.toc a.active {
  background: var(--primary);
  color: var(--primary-fg);
  font-weight: 700;
}

main.content {
  padding: 32px 48px 80px;
  max-width: 900px;
  margin: 0;
}

.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.page-header h1 { margin: 0; }
.page-header .subtitle { color: var(--muted-fg); font-size: 14px; margin-top: 4px; }

.theme-toggle {
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--fg);
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
.theme-toggle:hover { background: var(--muted); }

section.guide-section {
  padding-top: 24px;
  scroll-margin-top: 16px;
}
section.guide-section + section.guide-section { margin-top: 32px; }

/* Tokens table */
.token-table { font-size: 13px; }
.token-name { width: 36%; }
.token-value { width: 32%; white-space: nowrap; }
.token-value code { font-size: 11.5px; }
.swatch {
  display: inline-block;
  width: 14px; height: 14px;
  border-radius: 3px;
  border: 1px solid var(--border);
  vertical-align: middle;
  margin-right: 8px;
}

footer.guide-footer {
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--muted-fg);
  line-height: 1.5;
}

/* Print */
@media print {
  .layout { grid-template-columns: 1fr; }
  aside.sidebar { display: none; }
  main.content { max-width: 100%; padding: 0; }
  .theme-toggle { display: none; }
  section.guide-section { break-inside: avoid; }
  a { color: var(--fg); text-decoration: none; }
}

/* Narrow viewport */
@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  aside.sidebar { position: static; height: auto; }
  main.content { padding: 24px 20px 60px; }
}
`;
}

// ── Scroll-spy JS (vanilla, no deps) ───────────────────────────────────

const SCRIPT = `
(function () {
  // Theme toggle with localStorage persistence
  var html = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('strata-guide-theme'); } catch (_) {}
  if (saved === 'dark') html.classList.add('dark');
  else if (saved === 'light') html.classList.remove('dark');
  else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) html.classList.add('dark');

  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var nowDark = html.classList.toggle('dark');
      try { localStorage.setItem('strata-guide-theme', nowDark ? 'dark' : 'light'); } catch (_) {}
      btn.textContent = nowDark ? 'Light mode' : 'Dark mode';
    });
    btn.textContent = html.classList.contains('dark') ? 'Light mode' : 'Dark mode';
  }

  // Scroll-spy
  var sections = Array.prototype.slice.call(document.querySelectorAll('section.guide-section'));
  var links = {};
  document.querySelectorAll('nav.toc a[data-id]').forEach(function (a) {
    links[a.getAttribute('data-id')] = a;
  });
  function setActive(id) {
    Object.keys(links).forEach(function (k) {
      links[k].classList.toggle('active', k === id);
    });
  }
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
`;

// ── Build ──────────────────────────────────────────────────────────────

function build() {
  console.log('Strata DS — Rules Guide generator');
  console.log('─'.repeat(50));

  // 1. Load markdown sources
  const sectionsHtml = SECTIONS.map((s) => {
    const md = read(s.file);
    const body = renderMarkdown(md);
    console.log(`  · ${s.file.padEnd(48)} ${md.split('\n').length} lines`);
    return {
      id: s.id,
      title: s.title,
      file: s.file,
      html: body,
    };
  });

  // 2. Load + parse token CSS
  const lightCss = read(TOKENS_LIGHT);
  const darkCss = read(TOKENS_DARK);
  const lightTokens = parseTokens(lightCss);
  const darkTokens = parseTokens(darkCss);
  console.log(`  · ${TOKENS_LIGHT.padEnd(48)} ${lightTokens.size} tokens`);
  console.log(`  · ${TOKENS_DARK.padEnd(48)} ${darkTokens.size} tokens`);

  const tokenTableHtml = buildTokenTable(lightTokens, darkTokens);

  // 3. Compose final document
  const generatedAt = new Date().toISOString();
  const style = buildStyle(lightTokens, darkTokens);

  const navLinks = [
    ...sectionsHtml.map((s) => `      <a href="#${s.id}" data-id="${s.id}">${s.title}</a>`),
    `      <a href="#css-tokens" data-id="css-tokens">CSS tokens (live)</a>`,
  ].join('\n');

  const sectionsBlocks = sectionsHtml
    .map(
      (s) => `
    <section id="${s.id}" class="guide-section">
      <h2>${s.title}</h2>
      ${s.html}
    </section>`,
    )
    .join('\n');

  const cssTokensBlock = `
    <section id="css-tokens" class="guide-section">
      <h2>CSS tokens (live)</h2>
      <p>Auto-generated from <code>src/styles/tokens/variables.css</code> and <code>src/styles/tokens/variables-dark.css</code>. Light and dark values are shown side by side. Use these exact token names — never inline a hex.</p>
      ${tokenTableHtml}
    </section>`;

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Strata DS — Rules Guide</title>
  <style>${style}</style>
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <span class="logo">ST</span>
        <div>
          <div class="title">Strata DS</div>
          <div class="meta">Rules Guide</div>
        </div>
      </div>
      <nav class="toc" aria-label="Table of contents">
${navLinks}
      </nav>
    </aside>

    <main class="content">
      <div class="page-header">
        <div>
          <h1>Strata DS — Rules Guide</h1>
          <div class="subtitle">Generated ${generatedAt} · ${SECTIONS.length} rule files · ${lightTokens.size} CSS tokens</div>
        </div>
        <button id="theme-toggle" class="theme-toggle" type="button">Toggle theme</button>
      </div>

      ${sectionsBlocks}
      ${cssTokensBlock}

      <footer class="guide-footer">
        <p>This guide is auto-generated from the canonical <code>governance/</code> markdown files and the live token CSS in <code>src/styles/tokens/</code>. Re-run <code>node governance/build-guide.mjs</code> after editing any source. The MCP <code>strata-ds</code> server reads the same files.</p>
        <p>If the CSS tokens table reflects unexpected values, check your working tree — uncommitted edits in <code>variables.css</code> and <code>variables-dark.css</code> are picked up as-is.</p>
      </footer>
    </main>
  </div>

  <script>${SCRIPT}</script>
</body>
</html>
`;

  writeFileSync(OUT, html, 'utf8');
  const kb = (statSync(OUT).size / 1024).toFixed(1);
  console.log('─'.repeat(50));
  console.log(`Wrote ${OUT.replace(ROOT + '\\', '').replace(ROOT + '/', '')} (${kb} KB) at ${generatedAt}`);
}

build();
