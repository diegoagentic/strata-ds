/**
 * examples-data.mjs — per-sub-rule example data for build-guide.mjs.
 *
 * Shape:
 *   EXAMPLES_BY_HEADING[sectionId][headingSlug] = {
 *     eyebrow: string,        // small label, e.g. "LAW 1"
 *     explanation: string,    // 1-2 sentences: why this rule exists
 *     visual: string,         // inline HTML demo (uses .demo-* / .ve-* classes)
 *     code: string,           // code snippet (TSX className strings)
 *     howto: string,          // 1 sentence: practical application
 *   }
 *
 * Section IDs match those in build-guide.mjs SECTIONS. Heading slugs use the
 * SAME slugify function the renderer uses, so the data keys and the matched
 * heading slugs always align.
 *
 * Build helper: slugify("LAW 1 — Never hardcode hex values or raw colors")
 *   → "law-1-never-hardcode-hex-values-or-raw-colors"
 */

import { ICON } from './build-guide-shared.mjs';

// ── Stage 1: LAWS (LAW 1-7) + anti-patterns (ERROR 01-10) ───────────────

const LAWS = {
  'law-1-never-hardcode-hex-values-or-raw-colors': {
    eyebrow: 'LAW 1',
    explanation:
      'Hardcoded hex breaks dark mode adaptation and ignores the semantic token system. When the design system updates a token (for example, primary changes from lime to teal), every hex inlined in the codebase must be hunted down. Semantic tokens propagate the change automatically.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Hardcoded hex</span>
          <div class="ec-body"><button class="demo-btn" style="background:#E6F993;color:#02060C;">Save</button></div>
          <div class="ec-code">bg-[#E6F993] text-[#02060C]</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Semantic token</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">Save</button></div>
          <div class="ec-code">bg-primary text-primary-foreground</div>
        </div>
      </div>`,
    code: `<Button className="bg-primary text-primary-foreground">Save</Button>`,
    howto:
      'Replace every <code>bg-[#...]</code> or <code>text-zinc-...</code> with the equivalent semantic token. When unsure of the right token, scroll to the <strong>CSS tokens (live)</strong> section below or call <code>get_tokens</code> via the strata-ds MCP server.',
  },

  'law-2-brand-300-and-brand-400-are-never-text-color-on-light-backgrounds': {
    eyebrow: 'LAW 2',
    explanation:
      'The Strata lime brand (brand-300/400) has a contrast ratio under 2:1 against white — it fails WCAG AA for text. Brand colors carry signal, not content.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Brand as text on light bg</span>
          <div class="ec-body"><span style="background:#fff;color:#dff463;padding:6px 12px;border-radius:4px;font-weight:700;">Welcome to Strata</span></div>
          <div class="ec-code">text-brand-300 on bg-white</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Brand as CTA + neutral text</span>
          <div class="ec-body">
            <span style="color:var(--fg);font-weight:700;">Welcome to Strata</span>
            <button class="demo-btn demo-btn-primary">Sign in</button>
          </div>
          <div class="ec-code">text-foreground + bg-primary CTA</div>
        </div>
      </div>`,
    code: `// Brand as background or accent only:
className="bg-primary text-primary-foreground"  // CTA
className="ring-2 ring-primary/40"             // focus ring`,
    howto:
      'If brand-300/400 ever appears as <code>text-...</code>, replace with <code>text-foreground</code> and convey the brand via a nearby pill, badge, or border.',
  },

  'law-3-primary-foreground-is-always-dark-text-02060c': {
    eyebrow: 'LAW 3',
    explanation:
      'Because the brand <code>primary</code> is a light lime tone in BOTH light and dark mode, <code>primary-foreground</code> must remain dark in both. Inverting it for dark mode (white-on-lime) destroys contrast.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Light mode</span>
          <div class="ec-body" style="background:#EBECEE;padding:14px;border-radius:6px;">
            <button class="demo-btn" style="background:#E6F993;color:#02060C;">Save changes</button>
          </div>
          <div class="ec-code">text stays #02060C</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Dark mode</span>
          <div class="ec-body" style="background:#02060C;padding:14px;border-radius:6px;">
            <button class="demo-btn" style="background:#E6F993;color:#02060C;">Save changes</button>
          </div>
          <div class="ec-code">text stays #02060C</div>
        </div>
      </div>`,
    code: `// Both variables.css AND variables-dark.css set:
// --color-primary-foreground: #02060C;
<Button className="bg-primary text-primary-foreground">Save</Button>`,
    howto:
      'Never override <code>--color-primary-foreground</code> for dark mode. If a primary CTA looks washed out in dark, the brand background tone is wrong, not the text.',
  },

  'law-4-semantic-tokens-before-primitive-tokens': {
    eyebrow: 'LAW 4',
    explanation:
      'Semantic tokens (<code>bg-card</code>, <code>text-foreground</code>, <code>bg-success</code>) carry intent; primitive tokens (<code>bg-brand-500</code>, <code>bg-zinc-900</code>) carry only a value. Components consume semantic tokens so the DS can re-skin without code changes.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Raw primitive</span>
          <div class="ec-body"><button class="demo-btn" style="background:#E6F993;color:#02060C;">Approve</button></div>
          <div class="ec-code">bg-brand-500 text-zinc-900</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Semantic equivalent</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">Approve</button></div>
          <div class="ec-code">bg-primary text-primary-foreground</div>
        </div>
      </div>`,
    code: `// ❌ raw primitive
className="bg-brand-500 text-zinc-900"

// ✓ semantic
className="bg-primary text-primary-foreground"`,
    howto:
      'Reserve primitive tokens for the foundation files (<code>variables.css</code>, <code>theme.css</code>) and the brand-scale displays. Everywhere else, use semantic.',
  },

  'law-5-dark-mode-via-semantic-tokens-not-via-dark-classes': {
    eyebrow: 'LAW 5',
    explanation:
      'Adding <code>dark:bg-zinc-900 dark:text-white</code> to every component creates a maintenance burden and skips the token system. Semantic tokens already provide their own light + dark values, so a single class works for both.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Manual dark: cascade</span>
          <div class="ec-body" style="display:block;">
            <div style="background:var(--card);padding:10px 14px;border-radius:6px;font-size:13px;color:var(--fg);">Same rendering, twice the classes</div>
          </div>
          <div class="ec-code">bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Tokens adapt automatically</span>
          <div class="ec-body" style="display:block;">
            <div style="background:var(--card);padding:10px 14px;border-radius:6px;font-size:13px;color:var(--fg);">Toggle theme — same code path</div>
          </div>
          <div class="ec-code">bg-card text-foreground</div>
        </div>
      </div>`,
    code: `// ❌ manual dark: cascades
className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"

// ✓ tokens adapt automatically
className="bg-card text-foreground"`,
    howto:
      'Search the codebase for <code>dark:</code> modifiers — each occurrence is a candidate to replace with the equivalent semantic token.',
  },

  'law-6-do-not-mix-legacy-and-new-color-systems': {
    eyebrow: 'LAW 6',
    explanation:
      'The legacy <code>--primary: #27272a</code> (shadcn gray) and the new <code>--color-primary: #E6F993</code> (lime) coexist at the CSS-variable level. Using both in the same component creates inconsistent rendering depending on import order.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Legacy shadcn primary leaks in</span>
          <div class="ec-body"><button class="demo-btn" style="background:#27272a;color:#fff;">Save (legacy)</button></div>
          <div class="ec-code">--primary: #27272a (shadcn)</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Strata system only</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">Save (Strata)</button></div>
          <div class="ec-code">--color-primary: #E6F993</div>
        </div>
      </div>`,
    code: `// In your app entry — import ONLY the Strata canonical:
import './styles/tokens/variables.css'
// Never re-import a shadcn or radix legacy vars file after this.`,
    howto:
      'Audit every entry point for legacy CSS imports. If <code>bg-primary</code> renders gray instead of lime, something legacy is loaded after the Strata CSS.',
  },

  'law-7-every-interactive-element-must-have-a-hover-state': {
    eyebrow: 'LAW 7',
    explanation:
      'Hoverable elements without a visible hover state read as static text. Even subtle transitions (background tint, opacity drop) provide essential feedback.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ No hover, no transition</span>
          <div class="ec-body"><button class="demo-btn" style="background:transparent;color:var(--fg);">Open details</button></div>
          <div class="ec-code">text-foreground (no hover utility)</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Hover + transition</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-ghost" style="transition:background 0.15s;" onmouseover="this.style.background='var(--muted)'" onmouseout="this.style.background='transparent'">Open details</button>
          </div>
          <div class="ec-code">hover:bg-muted transition-colors</div>
        </div>
      </div>`,
    code: `<button className="text-foreground hover:bg-muted px-3 py-1.5 rounded-md transition-colors">
  Open details
</button>`,
    howto:
      'Apply <code>transition-colors</code> + at least one <code>hover:</code> modifier to every button, link, card-as-button, and table row that responds to clicks.',
  },
};

// ── anti-patterns / common-errors (ERROR 01-10) ─────────────────────────

const ANTI = {
  'error-01-hardcoded-state-colors': {
    eyebrow: 'ERROR 01',
    explanation:
      "Tailwind's named color palette (<code>green</code>, <code>red</code>, <code>blue</code>) ignores both the brand and dark mode adaptations. Use semantic state tokens so the same component renders correctly in any theme.",
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Raw Tailwind state color</span>
          <div class="ec-body"><span style="color:#22c55e;font-weight:700;">${ICON.check} Saved!</span></div>
          <div class="ec-code">text-green-500</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Semantic state token</span>
          <div class="ec-body"><span class="icon-pair icon-tone-success" style="background:transparent;padding:0;">${ICON.check} <span style="color:var(--success);font-weight:700;">Saved!</span></span></div>
          <div class="ec-code">text-success</div>
        </div>
      </div>`,
    code: `// ❌
<span className="text-green-500">Saved!</span>

// ✓
<span className="text-success">Saved!</span>`,
    howto:
      'Mapping: <code>green/yellow/red</code> → <code>success/warning/destructive</code>. <code>blue</code> → <code>info</code>. Done.',
  },

  'error-02-hardcoded-container-backgrounds': {
    eyebrow: 'ERROR 02',
    explanation:
      '<code>bg-white</code> and <code>bg-zinc-900</code> only render correctly in one theme. The semantic equivalents (<code>bg-background</code>, <code>bg-card</code>, <code>bg-muted</code>) adapt automatically.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Hardcoded surface</span>
          <div class="ec-body" style="display:block;"><div style="background:#fff;color:#000;border:1px solid #e5e7eb;padding:10px 12px;border-radius:6px;font-size:13px;">Stays white in dark mode</div></div>
          <div class="ec-code">bg-white</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Adaptive surface</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--card);color:var(--fg);border:1px solid var(--border);padding:10px 12px;border-radius:6px;font-size:13px;">Adapts via theme toggle</div></div>
          <div class="ec-code">bg-card</div>
        </div>
      </div>`,
    code: `// ❌
<div className="bg-white"> ... </div>

// ✓
<div className="bg-card"> ... </div>`,
    howto:
      'Map every <code>bg-white</code> to <code>bg-background</code> (root) or <code>bg-card</code> (panel). Map every <code>bg-zinc-900/950</code> to <code>bg-background</code> or <code>bg-card</code> per its role.',
  },

  'error-03-mixing-legacy-and-new-color-systems': {
    eyebrow: 'ERROR 03',
    explanation:
      'Strata defines two <code>--primary</code> variables: legacy shadcn gray (<code>#27272a</code>) and the new lime brand (<code>#E6F993</code>). Both resolve as <code>bg-primary</code> depending on which CSS loads last.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Legacy resolves to gray</span>
          <div class="ec-body"><button class="demo-btn" style="background:#27272a;color:#fff;">CTA</button></div>
          <div class="ec-code">legacy shadcn after Strata vars</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Strata canonical wins</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">CTA</button></div>
          <div class="ec-code">only variables.css imported</div>
        </div>
      </div>`,
    code: `// Entry point — Strata variables.css must be the LAST color import.
import './styles/tokens/variables.css'`,
    howto:
      'Audit every entry point. If <code>bg-primary</code> renders gray instead of lime, a legacy shadcn or radix vars file is loaded after the Strata CSS.',
  },

  'error-04-brand-300-as-text': {
    eyebrow: 'ERROR 04',
    explanation:
      'Brand-300/400 has a contrast ratio below WCAG AA when used as text on light surfaces. It is allowed as background, border, or accent — never as the foreground of body copy or links.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Brand as text</span>
          <div class="ec-body" style="display:block;"><p style="color:#dff463;background:#fff;padding:8px 12px;border-radius:4px;margin:0;font-size:14px;">Body text in brand-300</p></div>
          <div class="ec-code">text-brand-300</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Brand as adjacent badge</span>
          <div class="ec-body" style="display:flex;gap:8px;align-items:center;"><span style="color:var(--fg);font-weight:600;font-size:14px;">Featured product</span><span class="status-pill" style="background:var(--primary);color:var(--primary-fg);">Brand</span></div>
          <div class="ec-code">text-foreground + Badge variant="brand"</div>
        </div>
      </div>`,
    code: `// ❌ <h2 className="text-brand-300">Welcome</h2>
// ✓
<h2 className="text-foreground">
  Welcome
  <Badge variant="brand">Featured</Badge>
</h2>`,
    howto:
      'When brand needs to appear in text, use it as a background pill, a border, or a sibling Badge — never as the text color itself.',
  },

  'error-05-dark-mode-with-dark-classes-instead-of-semantic-tokens': {
    eyebrow: 'ERROR 05',
    explanation:
      'Same as LAW 5: chained <code>dark:bg-zinc-900 dark:text-white</code> defeats the purpose of the token system. Semantic tokens already adapt.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Verbose dark: cascade</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--card);padding:10px;border-radius:4px;font-size:13px;color:var(--fg);">Same render, 4 classes</div></div>
          <div class="ec-code">bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Semantic tokens, 2 classes</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--card);padding:10px;border-radius:4px;font-size:13px;color:var(--fg);">Same render, 2 classes</div></div>
          <div class="ec-code">bg-card text-foreground</div>
        </div>
      </div>`,
    code: `// ❌
className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white"

// ✓
className="bg-card text-foreground"`,
    howto:
      'Grep your codebase for <code>dark:bg-</code> and <code>dark:text-</code>. Each match is a refactor candidate.',
  },

  'error-06-missing-hover-state-on-interactive-elements': {
    eyebrow: 'ERROR 06',
    explanation:
      'An interactive element with no hover state reads as decorative text. Buttons, links, table rows, and clickable cards all need a hover.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Flat button, no feedback</span>
          <div class="ec-body"><button class="demo-btn" style="background:var(--card);color:var(--fg);border:1px solid var(--border);">Open</button></div>
          <div class="ec-code">No hover, no transition</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Hover + transition</span>
          <div class="ec-body"><button class="demo-btn demo-btn-secondary" style="transition:background 0.15s;" onmouseover="this.style.background='var(--muted)'" onmouseout="this.style.background='var(--card)'">Open</button></div>
          <div class="ec-code">hover:bg-muted transition-colors</div>
        </div>
      </div>`,
    code: `<button className="text-foreground hover:bg-muted transition-colors px-3 py-1.5 rounded-md">
  Open
</button>`,
    howto:
      'Add <code>transition-colors</code> + a hover utility to every clickable. Table rows: <code>hover:bg-muted/40</code>. Cards: <code>hover:shadow-md</code>. Buttons: <code>hover:bg-...</code>.',
  },

  'error-07-using-container-opacity-instead-of-color-opacity-utility': {
    eyebrow: 'ERROR 07',
    explanation:
      '<code>opacity-50</code> fades the entire container including text and borders. The color opacity syntax <code>bg-primary/10</code> only fades the background, keeping text readable.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Container opacity</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--primary);opacity:0.10;padding:12px 14px;border-radius:6px;color:var(--fg);font-weight:600;">Text is also faded</div></div>
          <div class="ec-code">bg-primary opacity-10</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Color opacity</span>
          <div class="ec-body" style="display:block;"><div style="background:color-mix(in srgb, var(--primary) 12%, transparent);padding:12px 14px;border-radius:6px;color:var(--fg);font-weight:600;">Text stays crisp</div></div>
          <div class="ec-code">bg-primary/10</div>
        </div>
      </div>`,
    code: `// ❌
<div className="bg-primary opacity-10"> Faded text </div>

// ✓
<div className="bg-primary/10"> Crisp text </div>`,
    howto:
      'For subtle tinted backgrounds always use the <code>bg-token/N</code> syntax (N is typically 5–20). Never reach for <code>opacity-*</code> on the container.',
  },

  'error-08-not-using-sidebar-tokens-for-the-sidebar': {
    eyebrow: 'ERROR 08',
    explanation:
      'Sidebar surfaces invert relative to the app body. Strata exposes <code>bg-sidebar</code>, <code>text-sidebar-foreground</code>, etc. Hardcoding <code>bg-zinc-950 text-white</code> skips the abstraction.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Hardcoded zinc sidebar</span>
          <div class="ec-body" style="display:block;"><div style="background:#0a0a0a;color:#fff;padding:10px 14px;border-radius:6px;font-size:13px;font-weight:600;">bg-zinc-950 text-white</div></div>
          <div class="ec-code">bg-zinc-950 text-white</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Semantic sidebar tokens</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--fg);color:var(--bg);padding:10px 14px;border-radius:6px;font-size:13px;font-weight:600;">bg-sidebar text-sidebar-foreground</div></div>
          <div class="ec-code">bg-sidebar text-sidebar-foreground</div>
        </div>
      </div>`,
    code: `// ❌
<aside className="bg-zinc-950 text-white"> ... </aside>

// ✓
<aside className="bg-sidebar text-sidebar-foreground"> ... </aside>`,
    howto:
      "Replace every sidebar's hardcoded dark palette with <code>bg-sidebar</code>, <code>text-sidebar-foreground</code>, <code>bg-sidebar-accent</code>. The tokens already handle light/dark inversion.",
  },

  'error-09-multiple-primary-ctas-in-the-same-view': {
    eyebrow: 'ERROR 09',
    explanation:
      'When two or more buttons in the same view use <code>bg-primary</code>, the user cannot tell which is the recommended path. Action hierarchy collapses.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Three primary CTAs compete</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-primary">Skip</button>
            <button class="demo-btn demo-btn-primary">Reject</button>
            <button class="demo-btn demo-btn-primary">Approve</button>
          </div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ One primary, rest demoted</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-ghost">Skip</button>
            <button class="demo-btn demo-btn-destructive">Reject</button>
            <button class="demo-btn demo-btn-primary">Approve</button>
          </div>
        </div>
      </div>`,
    code: `// ❌ All three compete
<Button>Skip</Button>
<Button>Reject</Button>
<Button>Approve</Button>

// ✓ Demote non-primary actions
<Button variant="ghost">Skip</Button>
<Button variant="destructive">Reject</Button>
<Button>Approve</Button>`,
    howto:
      'One primary CTA per view (or per dialog). Demote everything else to <code>outline</code>, <code>ghost</code>, or <code>destructive</code>.',
  },

  'error-10-creating-local-css-variables-that-duplicate-ds-tokens': {
    eyebrow: 'ERROR 10',
    explanation:
      "Defining <code>--my-card-bg</code> or <code>--feature-text-color</code> inside a component re-implements what Strata tokens already cover. These local vars drift when the DS changes.",
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Local CSS var duplication</span>
          <div class="ec-body" style="display:block;"><pre style="background:var(--muted);padding:8px;border-radius:4px;font-size:11px;margin:0;">:root { --feature-bg: #fafafa; }<br>.feature { background: var(--feature-bg); }</pre></div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Direct semantic token use</span>
          <div class="ec-body" style="display:block;"><pre style="background:var(--muted);padding:8px;border-radius:4px;font-size:11px;margin:0;">&lt;div className="bg-card"&gt;...&lt;/div&gt;</pre></div>
        </div>
      </div>`,
    code: `// ❌ component.css
:root { --feature-bg: #fafafa; --feature-text: #02060C; }
.feature { background: var(--feature-bg); color: var(--feature-text); }

// ✓ component.tsx
<div className="bg-card text-foreground">...</div>`,
    howto:
      'Audit your CSS files for <code>--local-*</code> declarations. Replace with semantic equivalents. If nothing matches, propose a new token to the DS rather than fork.',
  },
};

// ── Export ──────────────────────────────────────────────────────────────

export const EXAMPLES_BY_HEADING = {
  laws: LAWS,
  'anti-patterns': ANTI,
  // Stages 2-5 will populate the remaining 8 section ids:
  //   'rules-color-tokens', 'rules-brand-colors',
  //   'rules-containers', 'rules-buttons',
  //   'rules-icons', 'rules-typography',
  //   'rules-elevation', 'token-reference'
};
