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

// ── Stage 2: rules/01-color-tokens + rules/02-brand-colors ──────────────

const COLOR_TOKENS = {
  'layer-system': {
    eyebrow: 'Layers',
    explanation:
      'Strata tokens flow in two layers: <strong>primitives</strong> (raw color values like <code>#E6F993</code>) and <strong>semantics</strong> (intent-based like <code>bg-primary</code>). Components consume only semantics so the primitive layer can change without touching component code.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Primitive layer</span>
          <div class="ec-body" style="display:block;">
            <div class="brand-row" style="grid-template-columns:repeat(3,1fr);">
              <div class="brand-cell" style="background:#E6F993;color:#02060C;">brand-400</div>
              <div class="brand-cell" style="background:#02060C;color:#fff;">zinc-950</div>
              <div class="brand-cell" style="background:#E52D49;color:#fff;">red-500</div>
            </div>
          </div>
          <div class="ec-code">variables.css raw values</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Semantic layer (consumer-facing)</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <button class="demo-btn demo-btn-primary">primary</button>
            <span class="status-pill status-destructive">destructive</span>
            <span class="status-pill status-info">info</span>
          </div>
          <div class="ec-code">bg-primary · bg-destructive · bg-info</div>
        </div>
      </div>`,
    code: `// ❌ Components reach into primitives
className="bg-brand-400 text-zinc-950"

// ✓ Components consume semantics
className="bg-primary text-primary-foreground"`,
    howto:
      'Treat the primitive layer as private to the DS. App code touches only semantic tokens. The <code>get_tokens</code> MCP tool surfaces the semantic catalog.',
  },

  'surface-backgrounds': {
    eyebrow: 'Surfaces',
    explanation:
      'Three surface tokens cover most layouts: <code>bg-background</code> (page root), <code>bg-card</code> (panels and cards), <code>bg-muted</code> (inner sections, hover states). Each adapts automatically to dark mode.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Hierarchy (toggle theme)</span>
          <div class="ec-body" style="display:block;">
            <div class="surface-demo">
              <span class="sd-label">bg-background</span>
              <div class="sd-card">
                <span class="sd-label">bg-card</span>
                <div class="sd-muted"><span class="sd-label">bg-muted</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<div className="bg-background">      {/* page root */}
  <div className="bg-card">           {/* panel / card */}
    <div className="bg-muted">        {/* inner section / hover */}
      ...
    </div>
  </div>
</div>`,
    howto:
      'Reach for <code>bg-background</code> on root layouts, <code>bg-card</code> on every elevated surface, and <code>bg-muted</code> for hover, sub-panels, or footnote regions.',
  },

  'text-colors': {
    eyebrow: 'Text',
    explanation:
      'Two text tokens cover most cases: <code>text-foreground</code> (primary copy) and <code>text-muted-foreground</code> (meta, captions, helper text). Use the muted variant for anything that is supportive rather than primary content.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Two tones</span>
          <div class="ec-body" style="display:block;">
            <div style="font-size:15px;color:var(--fg);font-weight:600;">SO2604102 · Leland Furniture</div>
            <div style="font-size:12px;color:var(--muted-fg);margin-top:2px;">Quote · Mar 28, 2025 · $4,159.12</div>
          </div>
          <div class="ec-code">text-foreground + text-muted-foreground</div>
        </div>
      </div>`,
    code: `<div>
  <div className="text-foreground font-semibold">SO2604102</div>
  <div className="text-muted-foreground text-xs">Mar 28, 2025</div>
</div>`,
    howto:
      'Treat <code>text-muted-foreground</code> as the default for any text below 14px or for secondary labels. Body copy and headings stay on <code>text-foreground</code>.',
  },

  'primary-action-colors': {
    eyebrow: 'Primary',
    explanation:
      '<code>bg-primary</code> + <code>text-primary-foreground</code> is the canonical CTA pair. Both light and dark variants use the same dark text (#02060C) over the lime background.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">CTA pair</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">Approve &amp; continue</button></div>
          <div class="ec-code">bg-primary text-primary-foreground</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Focus ring uses same primary</span>
          <div class="ec-body"><button class="demo-btn demo-btn-outline" style="box-shadow:0 0 0 3px color-mix(in srgb, var(--primary) 40%, transparent);">Focused input</button></div>
          <div class="ec-code">ring-2 ring-primary/40</div>
        </div>
      </div>`,
    code: `<Button className="bg-primary text-primary-foreground">Save</Button>
<Input className="focus:ring-2 focus:ring-primary/40" />`,
    howto:
      'One primary per view. Use the same primary token for focus rings, active tab underlines, and selected states.',
  },

  'borders-and-inputs': {
    eyebrow: 'Borders',
    explanation:
      '<code>border-border</code> is the default divider and outline. <code>border-input</code> is used specifically for form field borders so input theming can be tweaked independently. Use <code>bg-input-background</code> for input fills.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Divider</span>
          <div class="ec-body" style="display:block;">
            <div style="padding:8px 12px;font-size:13px;color:var(--fg);">Item A</div>
            <div style="border-top:1px solid var(--border);padding:8px 12px;font-size:13px;color:var(--fg);">Item B</div>
          </div>
          <div class="ec-code">border-border</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Input field</span>
          <div class="ec-body" style="display:block;">
            <div style="background:var(--card);border:1px solid var(--border);padding:8px 12px;border-radius:6px;font-size:13px;color:var(--muted-fg);">Search documents…</div>
          </div>
          <div class="ec-code">bg-input-background border-input</div>
        </div>
      </div>`,
    code: `<hr className="border-border" />
<input className="bg-input-background border border-input rounded-md px-3 py-2" />`,
    howto:
      'Default to <code>border-border</code>. Reach for <code>border-input</code> only when targeting form-control outlines so the rest of the UI does not move when input theming changes.',
  },

  'semantic-states': {
    eyebrow: 'States',
    explanation:
      'Four state tokens cover the canonical feedback palette: <code>success</code>, <code>warning</code>, <code>destructive</code>, <code>info</code>. Pair text + background variants for pills, or use just <code>text-*</code> for inline copy.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Pills</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <span class="status-pill status-success">${ICON.check} Active</span>
            <span class="status-pill status-warning">${ICON.alert} Pending</span>
            <span class="status-pill status-destructive">${ICON.alert} Error</span>
            <span class="status-pill status-info">${ICON.info} Info</span>
          </div>
        </div>
      </div>`,
    code: `<Badge variant="success">Active</Badge>
<span className="text-warning">Heads up — partial coverage</span>
<span className="text-destructive">Cannot delete the root record</span>`,
    howto:
      'Map every "is it ok / warning / problem / info" state to one of these four. Avoid introducing new ones unless the DS gets a 5th canonical state.',
  },

  'opacity-pattern-for-soft-states': {
    eyebrow: 'Soft tints',
    explanation:
      'For subtle backgrounds use the <code>bg-token/N</code> syntax (color opacity), never <code>opacity-*</code> on the container — opacity on the container fades the text too.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ opacity on container</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--success);opacity:0.10;padding:10px;border-radius:6px;color:var(--fg);">Text barely visible</div></div>
          <div class="ec-code">bg-success opacity-10</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ color opacity (token slash N)</span>
          <div class="ec-body" style="display:block;"><div style="background:color-mix(in srgb, var(--success) 12%, transparent);padding:10px;border-radius:6px;color:var(--fg);">Text stays crisp</div></div>
          <div class="ec-code">bg-success/10</div>
        </div>
      </div>`,
    code: `// Soft success banner
<div className="bg-success/10 text-success border border-success/20 rounded-md p-3">
  Operation complete
</div>`,
    howto:
      'Tints between 5 and 20 read as subtle ("/5", "/10", "/15", "/20"). For hover states a +5 from base is enough.',
  },

  'charts-rule': {
    eyebrow: 'Charts',
    explanation:
      'Chart series have their own dedicated palette (<code>chart-1</code> through <code>chart-5</code>) tuned for distinguishability under both themes. Never use brand or state tokens to color a chart series.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Series palette</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <span class="status-pill" style="background:#6366f1;color:#fff;">chart-1</span>
            <span class="status-pill" style="background:#22c55e;color:#fff;">chart-2</span>
            <span class="status-pill" style="background:#E52D49;color:#fff;">chart-3</span>
            <span class="status-pill" style="background:#f59e0b;color:#fff;">chart-4</span>
            <span class="status-pill" style="background:#a855f7;color:#fff;">chart-5</span>
          </div>
        </div>
      </div>`,
    code: `<Bar dataKey="revenue" fill="var(--color-chart-1)" />
<Bar dataKey="cost"    fill="var(--color-chart-2)" />`,
    howto:
      'Reach for <code>var(--color-chart-1)</code>..<code>chart-5</code> in any recharts/visx series. Out of values? Rotate, do not invent.',
  },

  'state-light-variants-subtle-background': {
    eyebrow: 'Light states',
    explanation:
      'Each state token has a sibling soft variant (<code>success-light</code>, <code>warning-light</code>, etc.) that is already at the right subtle opacity for backgrounds. Use them when you need a pre-defined tint instead of computing one with the slash syntax.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Light variants</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <span class="status-pill status-success">success-light</span>
            <span class="status-pill status-warning">warning-light</span>
            <span class="status-pill status-destructive">destructive-light</span>
            <span class="status-pill status-info">info-light</span>
          </div>
        </div>
      </div>`,
    code: `<div className="bg-success-light text-success px-3 py-2 rounded-md">
  All good
</div>`,
    howto:
      'Prefer light variants over <code>bg-success/10</code> when the DS exposes one — they are pre-tuned across light and dark themes.',
  },
};

const BRAND_COLORS = {
  'the-brand-color-is-a-signal-not-a-base-color': {
    eyebrow: 'Brand as signal',
    explanation:
      'The lime brand-300/400 attracts attention; it is the visual signature of Strata. Using it everywhere collapses its signaling power. Use it as the focal point, never as the surface.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Brand as surface</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--primary);padding:14px 16px;border-radius:8px;"><span style="color:var(--primary-fg);font-weight:600;">Entire panel screams brand</span></div></div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Brand as accent</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--card);border:1px solid var(--border);padding:14px 16px;border-radius:8px;"><span style="color:var(--fg);font-weight:600;">Project · </span><span class="status-pill" style="background:var(--primary);color:var(--primary-fg);">Active</span></div></div>
        </div>
      </div>`,
    code: `// Anchor the brand on ONE element per view:
<Badge variant="brand">Active</Badge>     // or
<Button>Approve</Button>                  // primary CTA`,
    howto:
      'One brand-tinted element per view (CTA, active state, focus ring, or selected indicator). Everything else lives on neutral tokens.',
  },

  '1-primary-action-button-cta': {
    eyebrow: 'Brand · 1 CTA',
    explanation:
      'The most common use of brand: the single primary CTA in any view. <code>bg-primary text-primary-foreground</code> is the canonical pair.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">CTA</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">Approve &amp; continue</button></div>
          <div class="ec-code">bg-primary text-primary-foreground</div>
        </div>
      </div>`,
    code: `<Button>Approve &amp; continue</Button>
// or
<button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
  Approve &amp; continue
</button>`,
    howto:
      'One per view. If you need two prominent actions, demote the secondary one to <code>variant="outline"</code>.',
  },

  '2-active-selected-element-indicator': {
    eyebrow: 'Brand · 2 active',
    explanation:
      'Brand marks the active item in a tab, a navigation list, or a filter row. Use it as a background OR a left border, never both at once.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Active tab — background</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-primary">Overview</button>
            <button class="demo-btn demo-btn-ghost">Members</button>
            <button class="demo-btn demo-btn-ghost">Settings</button>
          </div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Active nav — left border</span>
          <div class="ec-body" style="display:block;">
            <div style="border-left:3px solid var(--primary);padding:6px 12px;background:color-mix(in srgb, var(--primary) 8%, transparent);">
              <span style="color:var(--fg);font-weight:600;font-size:13px;">Overview</span>
            </div>
          </div>
        </div>
      </div>`,
    code: `// Pill-style active state
<button className={isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}>
  {label}
</button>`,
    howto:
      'Pick one indicator pattern per surface (background OR border) and stick to it. Mixing both in the same nav reads as noise.',
  },

  '3-decorative-accent-on-branded-cards': {
    eyebrow: 'Brand · 3 accent',
    explanation:
      'A thin brand border, an underline, or a corner ribbon can mark a "featured" card without taking it over visually.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Featured card</span>
          <div class="ec-body" style="display:block;">
            <div class="mock-card" style="border-color:var(--primary);max-width:none;">
              <div class="mc-header">
                <div><div class="mc-title">Strata Pro</div><div class="mc-sub">Featured plan</div></div>
                <span class="status-pill" style="background:var(--primary);color:var(--primary-fg);">Featured</span>
              </div>
              <div class="mc-row"><span class="mc-label">Seats</span><span class="mc-value">25</span></div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<div className="bg-card border-2 border-primary rounded-xl p-4">
  ...
  <Badge variant="brand">Featured</Badge>
</div>`,
    howto:
      'Reserve this for genuinely featured items (1-2 per page). Overusing the brand border defeats its purpose.',
  },

  '4-action-icon-container-background': {
    eyebrow: 'Brand · 4 icon bg',
    explanation:
      'A small square or circle behind an action icon is a great place for brand: tiny enough that contrast is not an issue, prominent enough to read as the focal action.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Icon container</span>
          <div class="ec-body">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:var(--primary);color:var(--primary-fg);">${ICON.download}</span>
            <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:color-mix(in srgb, var(--primary) 20%, transparent);color:var(--fg);">${ICON.download}</span>
          </div>
          <div class="ec-code">bg-primary text-primary-foreground · bg-primary/20</div>
        </div>
      </div>`,
    code: `<button className="bg-primary text-primary-foreground rounded-lg p-2">
  <Download className="size-4" />
</button>`,
    howto:
      'Pick this for the single highest-emphasis icon action (e.g. "Export", "Generate"). For secondary icon buttons stick with <code>bg-muted</code>.',
  },

  '5-focus-ring-focus-indicator': {
    eyebrow: 'Brand · 5 focus',
    explanation:
      'The focus ring is the most universal use of brand — every focusable element gets a brand-tinted outline. <code>ring-primary/40</code> at width 2 is the canonical setting.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Focused input</span>
          <div class="ec-body" style="display:block;">
            <input type="text" placeholder="Focus me" style="background:var(--card);border:1px solid var(--border);padding:8px 12px;border-radius:6px;font-size:13px;color:var(--fg);outline:none;box-shadow:0 0 0 3px color-mix(in srgb, var(--primary) 40%, transparent);width:100%;max-width:240px;font-family:inherit;" />
          </div>
          <div class="ec-code">focus:ring-2 focus:ring-primary/40</div>
        </div>
      </div>`,
    code: `<Input className="focus:outline-none focus:ring-2 focus:ring-primary/40" />`,
    howto:
      'Add the focus ring at the component level (Input, Button, Tab). Never rely on the browser default focus outline.',
  },

  'where-not-to-use-brand': {
    eyebrow: 'Brand · forbidden',
    explanation:
      'Brand is wrong as: body text color, large surface fill, error/destructive state, every state pill in a list, or background of the entire view.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Body text in brand</span>
          <div class="ec-body" style="display:block;"><p style="color:var(--primary);margin:0;font-size:14px;font-weight:600;">Welcome to your dashboard</p></div>
          <div class="ec-code">text-primary on body</div>
        </div>
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Brand-everywhere panel</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--primary);padding:14px 16px;border-radius:8px;"><div style="color:var(--primary-fg);">Entire panel screams brand · loses signal</div></div></div>
        </div>
      </div>`,
    code: `// ❌ Body text in brand
<p className="text-primary">Welcome</p>

// ❌ Brand as huge panel
<section className="bg-primary p-12">...</section>`,
    howto:
      'If you find brand used as a surface or text style, refactor toward <code>bg-card</code> + a brand accent (badge, border, focus ring).',
  },

  'full-brand-scale': {
    eyebrow: 'Brand scale',
    explanation:
      'The full brand ramp is exposed as primitive tokens (<code>brand-50</code>..<code>brand-950</code>) for foundation work — never used in app code, but useful for token references and design exploration.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Ramp · 50 → 950</span>
          <div class="ec-body" style="display:block;">
            <div class="brand-row">
              ${[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((n) => {
                const shades = {
                  50: '#fafee5', 100: '#f4fbc4', 200: '#ebf99a',
                  300: '#dff463', 400: '#E6F993', 500: '#c0e032',
                  600: '#9fbb1f', 700: '#7e911b', 800: '#65741c',
                  900: '#56631e', 950: '#2e370a',
                };
                return `<div class="brand-cell" style="background:${shades[n]};color:#02060C;">${n}</div>`;
              }).join('')}
            </div>
          </div>
        </div>
      </div>`,
    code: `/* App code should NOT use these directly.
   Use bg-primary / ring-primary / text-primary-foreground instead. */`,
    howto:
      'The brand scale is private to the foundation files. Documenting it here is for designers and DS maintainers only.',
  },

  'pattern-full-branded-card': {
    eyebrow: 'Brand · pattern',
    explanation:
      'A composed pattern that combines all the brand uses: brand border, brand badge, primary CTA, and brand-tinted icon container. Use sparingly (1-2 per page max).',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Composed featured card</span>
          <div class="ec-body" style="display:block;">
            <div class="mock-card" style="border-color:var(--primary);max-width:none;">
              <div class="mc-header">
                <div style="display:flex;gap:10px;align-items:center;">
                  <span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:var(--primary);color:var(--primary-fg);">${ICON.download}</span>
                  <div><div class="mc-title">Annual report 2026</div><div class="mc-sub">Featured download</div></div>
                </div>
                <span class="status-pill" style="background:var(--primary);color:var(--primary-fg);">New</span>
              </div>
              <div class="mc-row"><span class="mc-label">Pages</span><span class="mc-value">48</span></div>
              <div class="mc-row"><span class="mc-label">Updated</span><span class="mc-value">Jun 1, 2026</span></div>
              <div style="display:flex;justify-content:flex-end;margin-top:10px;"><button class="demo-btn demo-btn-primary">Download report</button></div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<Card className="border-2 border-primary">
  <CardHeader>
    <IconContainer className="bg-primary text-primary-foreground"><Download /></IconContainer>
    <Badge variant="brand">New</Badge>
  </CardHeader>
  ...
  <Button>Download report</Button>
</Card>`,
    howto:
      'Use this pattern for the genuinely hero card on a page. Two on the same page collapses the signal.',
  },
};

// ── Stage 3: rules/03-containers-and-cards + rules/07-elevation ─────────

const CONTAINERS = {
  'background-hierarchy': {
    eyebrow: 'Hierarchy',
    explanation:
      'Strata uses three nesting levels of surface tokens — <strong>0 background</strong> (root), <strong>1 card</strong> (panel), <strong>2 muted</strong> (inner section). Each level steps the eye one degree of depth in both light and dark mode.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Nested levels</span>
          <div class="ec-body" style="display:block;">
            <div class="surface-demo">
              <span class="sd-label">Level 0 · bg-background</span>
              <div class="sd-card">
                <span class="sd-label">Level 1 · bg-card</span>
                <div class="sd-muted"><span class="sd-label">Level 2 · bg-muted</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<main className="bg-background">          {/* Level 0 */}
  <Card className="bg-card">              {/* Level 1 */}
    <section className="bg-muted">        {/* Level 2 */}
      ...
    </section>
  </Card>
</main>`,
    howto:
      'Match the nesting depth of your DOM to the level of token: page > card > inner section. Never skip a level (do not put <code>bg-muted</code> directly on <code>bg-background</code>).',
  },

  'level-0-root-layout-and-pages': {
    eyebrow: 'Level 0',
    explanation:
      'The page root sits on <code>bg-background</code>. This is the only surface that should ever be the deepest tone — every other panel needs at least one step up.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Root page</span>
          <div class="ec-body" style="display:block;">
            <div style="background:var(--bg);padding:20px;border-radius:8px;border:1px dashed var(--border);">
              <p style="color:var(--fg);font-weight:600;margin:0;">Root layout — bg-background</p>
              <p style="color:var(--muted-fg);font-size:12px;margin:6px 0 0;">All other surfaces step up from here.</p>
            </div>
          </div>
        </div>
      </div>`,
    code: `<body className="bg-background text-foreground min-h-screen">
  <Layout>...</Layout>
</body>`,
    howto:
      'Apply <code>bg-background</code> at the body or <code>&lt;Layout&gt;</code> level once. Never re-apply it deeper in the tree.',
  },

  'level-1-cards-and-panels': {
    eyebrow: 'Level 1',
    explanation:
      'Panels, cards, modals, sidebars-as-secondary all sit on <code>bg-card</code>. They float one step above the background and carry the standard border + small shadow.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Card panel</span>
          <div class="ec-body" style="display:block;">
            <div class="mock-card">
              <div class="mc-header">
                <div><div class="mc-title">Quote summary</div><div class="mc-sub">SO2604102</div></div>
                <span class="status-pill status-success">${ICON.check} Ready</span>
              </div>
              <div class="mc-row"><span class="mc-label">Total</span><span class="mc-value">$4,159.12</span></div>
            </div>
          </div>
          <div class="ec-code">bg-card border border-border rounded-xl shadow-sm</div>
        </div>
      </div>`,
    code: `<Card className="bg-card border border-border rounded-xl shadow-sm p-6">
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>`,
    howto:
      'Anything that reads as "a thing on the page" — a record, a panel, a tooltip body — sits on <code>bg-card</code>. Pair with <code>border-border</code> + <code>shadow-sm</code>.',
  },

  'level-2-inner-sections': {
    eyebrow: 'Level 2',
    explanation:
      '<code>bg-muted</code> is the inner step — sub-panels inside a card, hover backgrounds for rows, footnote regions, code blocks. The contrast with <code>bg-card</code> is subtle but unmistakable.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Inner section</span>
          <div class="ec-body" style="display:block;">
            <div style="background:var(--card);border:1px solid var(--border);padding:14px;border-radius:8px;">
              <div style="color:var(--fg);font-weight:600;font-size:13px;margin-bottom:8px;">Quote</div>
              <div style="background:var(--muted);padding:10px 12px;border-radius:6px;font-size:12px;color:var(--muted-fg);">bg-muted — sub-panel inside the card</div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<Card>
  <CardContent>
    <h3>Quote</h3>
    <div className="bg-muted rounded-md p-3">
      Inner section
    </div>
  </CardContent>
</Card>`,
    howto:
      'Use <code>bg-muted</code> for: hover row backgrounds, code blocks, helper-text regions, sub-headers inside cards, footnote panels.',
  },

  'sidebar-theme-inversion': {
    eyebrow: 'Sidebar invert',
    explanation:
      'Sidebars use a separate token family that inverts the theme: in light app the sidebar is dark, in dark app the sidebar is light. Use <code>bg-sidebar</code>, <code>text-sidebar-foreground</code>, <code>bg-sidebar-accent</code>.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Inverted sidebar</span>
          <div class="ec-body" style="display:block;">
            <div class="sidebar-demo" style="min-height:120px;">
              <div class="sd-side">
                <span class="sd-item active">Overview</span>
                <span class="sd-item">Components</span>
                <span class="sd-item">Tokens</span>
              </div>
              <div class="sd-main">Main content stays on bg-background</div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<aside className="bg-sidebar text-sidebar-foreground">
  <nav>
    <a className="hover:bg-sidebar-accent">Overview</a>
  </nav>
</aside>
<main className="bg-background text-foreground">
  ...
</main>`,
    howto:
      'Always use the sidebar token family for the chrome that wraps your app. Never hardcode <code>bg-zinc-950</code> there.',
  },

  'status-sections': {
    eyebrow: 'Status sections',
    explanation:
      'A status section is a full-width banner or callout (info, warning, success, error). Use the state token + the corresponding light variant for the background.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Info banner</span>
          <div class="ec-body" style="display:block;">
            <div style="background:color-mix(in srgb, var(--fg) 6%, transparent);border:1px solid var(--border);border-left:3px solid var(--fg);padding:10px 14px;border-radius:6px;display:flex;gap:10px;align-items:flex-start;">
              <span style="color:var(--fg);">${ICON.info}</span>
              <span style="font-size:13px;color:var(--fg);">Heads-up — the receiving warehouse is closed Mar 18.</span>
            </div>
          </div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Destructive banner</span>
          <div class="ec-body" style="display:block;">
            <div style="background:color-mix(in srgb, var(--destructive) 12%, transparent);border:1px solid color-mix(in srgb, var(--destructive) 30%, transparent);border-left:3px solid var(--destructive);padding:10px 14px;border-radius:6px;display:flex;gap:10px;align-items:flex-start;color:var(--destructive);">
              <span>${ICON.alert}</span>
              <span style="font-size:13px;color:var(--fg);">3 line items are missing required attributes.</span>
            </div>
          </div>
        </div>
      </div>`,
    code: `<Alert variant="info">Heads-up — the receiving warehouse is closed Mar 18.</Alert>
<Alert variant="destructive">3 line items are missing required attributes.</Alert>`,
    howto:
      'Pick one variant per banner. The DS Alert component handles the icon + border + bg pairing for you.',
  },

  'elevation-shadows': {
    eyebrow: 'Containers · shadows',
    explanation:
      'Shadows reinforce the level hierarchy: Level 0 has no shadow, Level 1 (cards) has <code>shadow-sm</code>, modals/dialogs use <code>shadow-lg</code>. The shadow conveys depth without changing the color.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Shadow per level</span>
          <div class="ec-body" style="display:block;">
            <div class="elev-row" style="grid-template-columns:repeat(3,1fr);padding:0;">
              <div class="elev-card">no shadow<br><span style="font-size:9px;color:var(--muted-fg);">Level 0</span></div>
              <div class="elev-card elev-sm">shadow-sm<br><span style="font-size:9px;color:var(--muted-fg);">Level 1 cards</span></div>
              <div class="elev-card elev-lg">shadow-lg<br><span style="font-size:9px;color:var(--muted-fg);">Level 1+ modals</span></div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<Card className="shadow-sm">...</Card>
<Dialog className="shadow-lg">...</Dialog>`,
    howto:
      'Cards default to <code>shadow-sm</code>. Anything that floats over the page (popover, modal, command menu) uses <code>shadow-lg</code> or <code>shadow-xl</code>.',
  },
};

const ELEVATION = {
  'elevation-levels': {
    eyebrow: 'Elevation',
    explanation:
      'Strata defines 4 shadow tokens that map to physical "lifting" amounts: <code>shadow-sm</code> (inputs, list items), <code>shadow-md</code> (cards, dropdowns), <code>shadow-lg</code> (modals, dialogs), <code>shadow-xl</code> (overlays, command palettes).',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">4 levels</span>
          <div class="ec-body" style="display:block;">
            <div class="elev-row">
              <div class="elev-card elev-sm">shadow-sm</div>
              <div class="elev-card elev-md">shadow-md</div>
              <div class="elev-card elev-lg">shadow-lg</div>
              <div class="elev-card elev-xl">shadow-xl</div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<Input className="shadow-sm" />              // form field
<Card className="shadow-md hover:shadow-lg" />  // card with hover lift
<Dialog className="shadow-lg" />                // modal
<CommandMenu className="shadow-xl" />           // overlay`,
    howto:
      'Pick the elevation that matches the "floating distance" of the surface. Inputs barely lift; modals lift a lot; ambient overlays lift the most.',
  },

  'rules': {
    eyebrow: 'Elevation · rules',
    explanation:
      'Three rules govern elevation: (1) never stack the same elevation on itself, (2) hover increments by one level, (3) inactive states drop one level. This keeps the visual stack honest.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Hover increment</span>
          <div class="ec-body" style="display:block;">
            <div class="elev-card elev-sm" style="transition:box-shadow 0.15s;cursor:pointer;font-size:11px;" onmouseover="this.style.boxShadow='0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.06)'" onmouseout="this.style.boxShadow='0 1px 2px rgba(0,0,0,0.06)'">Hover me · sm → md</div>
          </div>
          <div class="ec-code">shadow-sm hover:shadow-md transition-shadow</div>
        </div>
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Same elevation stacked</span>
          <div class="ec-body" style="display:block;"><div style="background:var(--card);padding:12px;border-radius:6px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.10);"><div style="background:var(--card);padding:8px;border-radius:4px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.10);">Same shadow as parent</div></div></div>
        </div>
      </div>`,
    code: `// ✓ Hover lifts one level
<Card className="shadow-sm hover:shadow-md transition-shadow">

// ❌ Nested same shadow — visually flat
<Card className="shadow-md"><Card className="shadow-md">...</Card></Card>`,
    howto:
      'Always add <code>transition-shadow</code> to hover-elevated components so the lift reads as motion, not a jump.',
  },

  'anti-patterns': {
    eyebrow: 'Elevation · anti',
    explanation:
      'Two common mistakes: hardcoding <code>box-shadow: 0 4px 8px rgba(0,0,0,0.1)</code> instead of using a token, and stacking <code>shadow-lg</code> on every surface so nothing stands out.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Hardcoded shadow values</span>
          <div class="ec-body"><div style="background:var(--card);padding:14px;border-radius:8px;box-shadow:0 8px 16px rgba(0,0,0,0.18);font-size:12px;color:var(--fg);">custom shadow string</div></div>
          <div class="ec-code">style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.18)' }}</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ Token-defined shadow</span>
          <div class="ec-body"><div class="elev-card elev-md" style="font-size:12px;">shadow-md</div></div>
          <div class="ec-code">className="shadow-md"</div>
        </div>
      </div>`,
    code: `// ❌ <div style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.18)' }}>
// ✓ <div className="shadow-md">`,
    howto:
      'If you find yourself writing inline <code>boxShadow</code>, stop — there is a token for that.',
  },

  'pattern-complete-interactive-card': {
    eyebrow: 'Elevation · pattern',
    explanation:
      'A canonical interactive card uses three tokens working together: <code>bg-card</code> + <code>border-border</code> + <code>shadow-sm</code> at rest, lifting to <code>shadow-md</code> on hover with a transition.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Interactive card pattern</span>
          <div class="ec-body" style="display:block;">
            <div class="mock-card" style="transition:box-shadow 0.15s, transform 0.15s;cursor:pointer;" onmouseover="this.style.boxShadow='0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.06)';this.style.transform='translateY(-1px)';" onmouseout="this.style.boxShadow='0 1px 2px rgba(0,0,0,0.05)';this.style.transform='translateY(0)';">
              <div class="mc-header">
                <div><div class="mc-title">Quote QT-1042</div><div class="mc-sub">Hover to lift</div></div>
                <span class="status-pill status-warning">${ICON.alert} Review</span>
              </div>
              <div class="mc-row"><span class="mc-label">Net</span><span class="mc-value">$22,108</span></div>
            </div>
          </div>
        </div>
      </div>`,
    code: `<Card className="bg-card border border-border rounded-xl shadow-sm
                 hover:shadow-md hover:-translate-y-px
                 transition-all duration-150 cursor-pointer">
  ...
</Card>`,
    howto:
      'Pair the shadow lift with a 1px vertical translate for a tactile feel. Always add <code>transition-all</code> with a short duration (150ms) so the motion reads natural.',
  },
};

// ── Stage 4: rules/04-buttons-and-actions + rules/05-icons ──────────────

const BUTTONS = {
  'primary-main-cta': {
    eyebrow: 'Button · Primary',
    explanation:
      'The Primary variant carries the highest emphasis in any view. Brand background, dark text, no border. Use it for the single most important action — Save, Approve, Submit.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Primary CTA</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary">Save changes</button></div>
          <div class="ec-code">variant="default" / bg-primary text-primary-foreground</div>
        </div>
      </div>`,
    code: `<Button>Save changes</Button>
// or
<button className="bg-primary text-primary-foreground hover:bg-primary/90
                   rounded-md px-4 h-10 font-semibold transition-colors">
  Save changes
</button>`,
    howto:
      'One primary CTA per view. If you need two equally-important actions, rethink the design — usually one is actually secondary.',
  },

  'secondary': {
    eyebrow: 'Button · Secondary',
    explanation:
      'Secondary buttons sit beside the primary CTA for related-but-not-primary actions (Cancel, Save as draft). Filled background <code>bg-card</code> + visible border so they read as a button, not a link.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Secondary</span>
          <div class="ec-body"><button class="demo-btn demo-btn-secondary">Save as draft</button></div>
          <div class="ec-code">variant="secondary"</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">In hierarchy</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-secondary">Save as draft</button>
            <button class="demo-btn demo-btn-primary">Publish</button>
          </div>
        </div>
      </div>`,
    code: `<Button variant="secondary">Save as draft</Button>
<Button>Publish</Button>`,
    howto:
      'Use Secondary for parallel actions that share weight with the primary. Use Outline for actions that should read as less prominent than Secondary.',
  },

  'outline': {
    eyebrow: 'Button · Outline',
    explanation:
      'Outline buttons have a transparent background and a border. Lowest emphasis among "still looks like a button" variants. Common for Cancel, Back, secondary toolbars.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Outline</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-outline">Cancel</button>
            <button class="demo-btn demo-btn-outline">${ICON.download} Export</button>
          </div>
          <div class="ec-code">variant="outline"</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Cancel + Primary pair</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-outline">Cancel</button>
            <button class="demo-btn demo-btn-primary">Save</button>
          </div>
        </div>
      </div>`,
    code: `<Button variant="outline">Cancel</Button>
<Button>Save</Button>`,
    howto:
      'Default to Outline for Cancel + Back actions. For toolbar buttons (Export, Filter, Sort), Outline reads as a button without competing with the primary.',
  },

  'ghost': {
    eyebrow: 'Button · Ghost',
    explanation:
      'Ghost buttons are transparent with no border — they only become visible on hover. Use them in dense lists, table actions, kebab menus, navigation links where buttons would create noise.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Ghost · hover to reveal</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-ghost" style="transition:background 0.15s;" onmouseover="this.style.background='var(--muted)'" onmouseout="this.style.background='transparent'">Edit</button>
            <button class="demo-btn demo-btn-ghost" style="transition:background 0.15s;" onmouseover="this.style.background='var(--muted)'" onmouseout="this.style.background='transparent'">Duplicate</button>
            <button class="demo-btn demo-btn-ghost" style="transition:background 0.15s;" onmouseover="this.style.background='var(--muted)'" onmouseout="this.style.background='transparent'">Archive</button>
          </div>
          <div class="ec-code">variant="ghost" + hover:bg-muted</div>
        </div>
      </div>`,
    code: `<Button variant="ghost">Edit</Button>
<Button variant="ghost"><Trash className="size-4" /></Button>`,
    howto:
      'Reach for Ghost when the action is contextual to a row, card, or menu — anywhere a fully visible button would compete with content.',
  },

  'destructive': {
    eyebrow: 'Button · Destructive',
    explanation:
      'Destructive buttons signal an action that cannot be undone (Delete, Reject, Discard). Use sparingly — every red button trains users to expect harm.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Destructive</span>
          <div class="ec-body"><button class="demo-btn demo-btn-destructive">Delete project</button></div>
          <div class="ec-code">variant="destructive"</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">In a confirm dialog</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-outline">Cancel</button>
            <button class="demo-btn demo-btn-destructive">Yes, delete</button>
          </div>
        </div>
      </div>`,
    code: `<Button variant="destructive">Delete project</Button>

// In a confirm dialog:
<Button variant="outline">Cancel</Button>
<Button variant="destructive">Yes, delete</Button>`,
    howto:
      'Pair every Destructive action with an Outline Cancel. Never put Destructive as the primary CTA of a top-level page — only inside confirm dialogs or row-level actions.',
  },

  'link-text-action': {
    eyebrow: 'Button · Link',
    explanation:
      'Link variant looks like underlined inline text but acts as a button. Use in body copy, inside table cells, or where a button outline would feel wrong.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Link button</span>
          <div class="ec-body" style="display:block;">
            <p style="margin:0;font-size:13px;color:var(--fg);">3 line items need review. <button class="demo-btn demo-btn-link">Open review queue</button></p>
          </div>
          <div class="ec-code">variant="link"</div>
        </div>
      </div>`,
    code: `<p>
  3 line items need review.{' '}
  <Button variant="link" onClick={openReviewQueue}>
    Open review queue
  </Button>
</p>`,
    howto:
      'Pick Link when the action is part of a sentence. Otherwise use Ghost or Outline.',
  },

  'disabled': {
    eyebrow: 'Button · Disabled',
    explanation:
      'Disabled buttons cannot be clicked. Reduce opacity, change cursor to <code>not-allowed</code>, remove hover effects. Always tell the user WHY the button is disabled (tooltip, helper text).',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Disabled primary</span>
          <div class="ec-body"><button class="demo-btn demo-btn-disabled" disabled>Save</button></div>
          <div class="ec-code">disabled + opacity-70</div>
        </div>
      </div>`,
    code: `<Button disabled>Save</Button>

// With reason:
<Tooltip content="Fix the 3 errors above first">
  <Button disabled>Save</Button>
</Tooltip>`,
    howto:
      'Never disable a button without explaining why. Pair every disabled CTA with a tooltip, an inline message, or visible error indicators.',
  },

  'loading': {
    eyebrow: 'Button · Loading',
    explanation:
      'During async work, replace the button label with a spinner + "Working…" text. Disable the button while loading so users cannot double-fire.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Loading state</span>
          <div class="ec-body"><button class="demo-btn demo-btn-primary" disabled style="opacity:0.85;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 0.8s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            Working…
          </button></div>
          <div class="ec-code">loading={true} + disabled</div>
        </div>
      </div>
      <style>@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }</style>`,
    code: `<Button loading={isSaving} disabled={isSaving}>
  {isSaving ? 'Working…' : 'Save'}
</Button>`,
    howto:
      'Always disable while loading to prevent double-submit. Spinner color = <code>currentColor</code> so it inherits the button text color.',
  },

  'with-icon': {
    eyebrow: 'Button · With icon',
    explanation:
      'Icon-prefixed buttons clarify intent. Icon size 14-16px (h-3.5 / h-4), gap of 6-8px. The icon should NEVER be larger than the text x-height.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Icon + label</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-primary">${ICON.download} Export</button>
            <button class="demo-btn demo-btn-outline">${ICON.check} Approve</button>
            <button class="demo-btn demo-btn-ghost">${ICON.alert} Report</button>
          </div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Icon-only (with aria-label)</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-outline" aria-label="Settings" style="padding:7px 9px;">${ICON.info}</button>
          </div>
        </div>
      </div>`,
    code: `<Button>
  <Download className="size-4" />
  Export
</Button>

<Button variant="outline" aria-label="Settings">
  <Settings className="size-4" />
</Button>`,
    howto:
      'For icon-only buttons, always add <code>aria-label</code>. The icon size should match the text size: <code>size-4</code> for default buttons, <code>size-3.5</code> for sm.',
  },

  'table-list-rows': {
    eyebrow: 'Hover · table rows',
    explanation:
      'Table rows that are clickable get a subtle hover tint <code>hover:bg-muted/40</code>. The cursor changes to pointer. The full row becomes the click target.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Hoverable row</span>
          <div class="ec-body" style="display:block;">
            <div style="background:var(--card);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
              <div style="padding:10px 12px;border-bottom:1px solid var(--border);font-size:12px;font-weight:600;color:var(--muted-fg);text-transform:uppercase;letter-spacing:0.04em;">Quotes</div>
              <div style="padding:10px 12px;font-size:13px;color:var(--fg);cursor:pointer;transition:background 0.12s;border-bottom:1px solid var(--border);" onmouseover="this.style.background='color-mix(in srgb, var(--muted) 40%, transparent)'" onmouseout="this.style.background='transparent'">SO2604102 — Leland Furniture · $4,159</div>
              <div style="padding:10px 12px;font-size:13px;color:var(--fg);cursor:pointer;transition:background 0.12s;" onmouseover="this.style.background='color-mix(in srgb, var(--muted) 40%, transparent)'" onmouseout="this.style.background='transparent'">QT-1042 — NorthPoint · $8,910</div>
            </div>
          </div>
          <div class="ec-code">hover:bg-muted/40 cursor-pointer transition-colors</div>
        </div>
      </div>`,
    code: `<TableRow
  onClick={() => openDetail(row)}
  className="hover:bg-muted/40 cursor-pointer transition-colors"
>
  ...
</TableRow>`,
    howto:
      'Always pair a clickable row with <code>cursor-pointer</code> + the hover tint + a transition. Without all three the row reads as static.',
  },

  'clickable-cards': {
    eyebrow: 'Hover · cards',
    explanation:
      'Clickable cards lift one shadow level on hover, with a subtle 1px translateY. The whole card becomes the click target — never put an "Open" button inside a clickable card (that creates two click affordances).',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Clickable card · hover lifts</span>
          <div class="ec-body" style="display:block;">
            <div class="mock-card" style="transition:all 0.15s;cursor:pointer;" onmouseover="this.style.boxShadow='0 10px 15px -3px rgba(0,0,0,0.10)';this.style.transform='translateY(-1px)';" onmouseout="this.style.boxShadow='0 1px 2px rgba(0,0,0,0.05)';this.style.transform='translateY(0)';">
              <div class="mc-header">
                <div><div class="mc-title">Quote QT-1042</div><div class="mc-sub">NorthPoint</div></div>
                <span class="status-pill status-warning">Review</span>
              </div>
            </div>
          </div>
          <div class="ec-code">hover:shadow-md hover:-translate-y-px transition-all</div>
        </div>
      </div>`,
    code: `<Card
  onClick={() => openDetail(item)}
  className="cursor-pointer hover:shadow-md hover:-translate-y-px
             transition-all duration-150"
>
  ...
</Card>`,
    howto:
      'No interactive children inside a clickable card. If a row needs both "open" and "delete", make the card non-clickable and add explicit buttons.',
  },

  'navigation-links': {
    eyebrow: 'Hover · nav links',
    explanation:
      'Navigation links use color hover, not background hover. <code>text-muted-foreground hover:text-foreground</code> is the canonical pair for sidebar items and tabs.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Nav links</span>
          <div class="ec-body" style="display:block;">
            <nav style="display:flex;flex-direction:column;gap:4px;">
              <a href="#" style="font-size:13px;padding:6px 10px;border-radius:4px;color:var(--muted-fg);text-decoration:none;transition:color 0.12s;" onmouseover="this.style.color='var(--fg)'" onmouseout="this.style.color='var(--muted-fg)'">Overview</a>
              <a href="#" style="font-size:13px;padding:6px 10px;border-radius:4px;color:var(--fg);background:var(--muted);text-decoration:none;font-weight:600;">Components <span style="font-size:10px;color:var(--muted-fg);">(active)</span></a>
              <a href="#" style="font-size:13px;padding:6px 10px;border-radius:4px;color:var(--muted-fg);text-decoration:none;transition:color 0.12s;" onmouseover="this.style.color='var(--fg)'" onmouseout="this.style.color='var(--muted-fg)'">Tokens</a>
            </nav>
          </div>
          <div class="ec-code">text-muted-foreground hover:text-foreground</div>
        </div>
      </div>`,
    code: `<Link
  className="text-muted-foreground hover:text-foreground transition-colors"
  href="/components"
>
  Components
</Link>`,
    howto:
      'Add the active state as a separate token: <code>bg-muted text-foreground font-semibold</code>. Never rely on the hover state alone to mark active.',
  },

  'composition-rules': {
    eyebrow: 'Button composition',
    explanation:
      'When grouping buttons: one primary, demoted secondaries (outline / ghost), destructive isolated on the left or in a confirm dialog. Right-align primary in a horizontal row.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Standard dialog footer</span>
          <div class="ec-body" style="justify-content:flex-end;">
            <button class="demo-btn demo-btn-outline">Cancel</button>
            <button class="demo-btn demo-btn-primary">Save</button>
          </div>
        </div>
        <div class="example-card">
          <span class="ec-tag">With destructive on the left</span>
          <div class="ec-body" style="justify-content:space-between;">
            <button class="demo-btn demo-btn-destructive">Delete</button>
            <div style="display:flex;gap:8px;">
              <button class="demo-btn demo-btn-outline">Cancel</button>
              <button class="demo-btn demo-btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>`,
    code: `<DialogFooter>
  <Button variant="destructive">Delete</Button>
  <Spacer />
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</DialogFooter>`,
    howto:
      'Primary goes to the right (the "happy path" lands under the user\'s thumb / mouse). Destructive isolates to the left so it is not accidentally clicked.',
  },
};

const ICONS = {
  'icon-library': {
    eyebrow: 'Icon library',
    explanation:
      'Strata standardizes on <strong>Lucide</strong> for application icons and <strong>Heroicons</strong> in select legacy areas. Never mix multiple icon libraries in the same view — the stroke widths and visual weights differ.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Lucide-style icons</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <span class="icon-pair">${ICON.check} Check</span>
            <span class="icon-pair">${ICON.alert} Alert</span>
            <span class="icon-pair">${ICON.info} Info</span>
            <span class="icon-pair">${ICON.download} Download</span>
          </div>
        </div>
      </div>`,
    code: `import { Check, AlertTriangle, Info, Download } from 'lucide-react';

<Check className="size-4 text-success" />
<AlertTriangle className="size-4 text-warning" />`,
    howto:
      'For new screens use <code>lucide-react</code> exclusively. If you must mix, isolate one library per surface — never two libraries side by side.',
  },

  'primary-action-icons-brand': {
    eyebrow: 'Icon · brand action',
    explanation:
      'For the highest-emphasis icon action (Generate, Export, Submit), use the brand color as a container background with dark icon foreground.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Brand icon container</span>
          <div class="ec-body">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:var(--primary);color:var(--primary-fg);">${ICON.download}</span>
            <span style="font-size:13px;color:var(--fg);font-weight:600;">Export report</span>
          </div>
          <div class="ec-code">bg-primary text-primary-foreground</div>
        </div>
      </div>`,
    code: `<button className="bg-primary text-primary-foreground rounded-lg p-2">
  <Download className="size-4" />
</button>`,
    howto:
      'Reserve this treatment for one icon per view. The icon is the visual anchor, not decoration.',
  },

  'state-icons': {
    eyebrow: 'Icon · state',
    explanation:
      'State icons inherit the state token color via <code>currentColor</code>. Check + success, AlertTriangle + warning/destructive, Info + info.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">State-toned icons</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <span class="icon-pair icon-tone-success">${ICON.check} text-success</span>
            <span class="icon-pair icon-tone-warning">${ICON.alert} text-warning</span>
            <span class="icon-pair icon-tone-destructive">${ICON.alert} text-destructive</span>
            <span class="icon-pair">${ICON.info} text-info</span>
          </div>
        </div>
      </div>`,
    code: `<Check className="size-4 text-success" />
<AlertTriangle className="size-4 text-warning" />
<AlertTriangle className="size-4 text-destructive" />
<Info className="size-4 text-info" />`,
    howto:
      'The SVG inherits color from <code>currentColor</code> — set the color on the className, never on the SVG <code>stroke</code> attribute.',
  },

  'secondary-neutral-icons': {
    eyebrow: 'Icon · neutral',
    explanation:
      'Decorative or secondary icons (search, settings, kebab menus, chevrons) use <code>text-muted-foreground</code>. They sit in the visual background until interacted with.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Neutral icons</span>
          <div class="ec-body" style="flex-wrap:wrap;">
            <span class="icon-pair icon-tone-muted">${ICON.info} text-muted-foreground</span>
            <span class="icon-pair icon-tone-muted">${ICON.download} text-muted-foreground</span>
          </div>
        </div>
      </div>`,
    code: `<Search className="size-4 text-muted-foreground" />
<Settings className="size-4 text-muted-foreground" />`,
    howto:
      'Default to <code>text-muted-foreground</code> for any decorative icon. Only escalate to <code>text-foreground</code> when the icon is part of a clickable affordance.',
  },

  'hover-icons': {
    eyebrow: 'Icon · hover',
    explanation:
      'On hover, secondary icons brighten from <code>text-muted-foreground</code> to <code>text-foreground</code>. The transition signals "you can interact with me".',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Hover icon</span>
          <div class="ec-body">
            <button class="demo-btn demo-btn-ghost" style="padding:6px;" aria-label="Settings" onmouseover="this.style.background='var(--muted)';this.querySelector('svg').style.color='var(--fg)'" onmouseout="this.style.background='transparent';this.querySelector('svg').style.color='var(--muted-fg)'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted-fg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition:color 0.12s;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </button>
          </div>
          <div class="ec-code">text-muted-foreground hover:text-foreground</div>
        </div>
      </div>`,
    code: `<button
  className="text-muted-foreground hover:text-foreground transition-colors p-2"
  aria-label="Settings"
>
  <Settings className="size-4" />
</button>`,
    howto:
      'Always add <code>transition-colors</code> so the brightening is a smooth animation, not a jump.',
  },

  'sizes': {
    eyebrow: 'Icon · sizes',
    explanation:
      'Strata uses 4 canonical icon sizes: <strong>12px</strong> (inline meta), <strong>14px</strong> (dense lists), <strong>16px</strong> (default), <strong>20px</strong> (buttons), <strong>24px</strong> (headings).',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">5 sizes</span>
          <div class="ec-body" style="flex-wrap:wrap;align-items:center;">
            <span class="icon-pair">${ICON.iconSized(12)} 12 · h-3</span>
            <span class="icon-pair">${ICON.iconSized(14)} 14 · h-3.5</span>
            <span class="icon-pair">${ICON.iconSized(16)} 16 · h-4</span>
            <span class="icon-pair">${ICON.iconSized(20)} 20 · h-5</span>
            <span class="icon-pair">${ICON.iconSized(24)} 24 · h-6</span>
          </div>
        </div>
      </div>`,
    code: `<Check className="size-3" />     {/* 12px */}
<Check className="size-3.5" />   {/* 14px */}
<Check className="size-4" />     {/* 16px — default */}
<Check className="size-5" />     {/* 20px */}
<Check className="size-6" />     {/* 24px */}`,
    howto:
      'Default to <code>size-4</code>. Step up to <code>size-5</code> for buttons; step down to <code>size-3.5</code> for table cells. Anything beyond 24px is decorative, not iconographic.',
  },

  'icon-container': {
    eyebrow: 'Icon container',
    explanation:
      'For prominent icon actions, wrap the icon in a container with background + padding. The container reads as the "action button", the icon as its label.',
    visual: `
      <div class="example-row">
        <div class="example-card">
          <span class="ec-tag">Brand</span>
          <div class="ec-body">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:var(--primary);color:var(--primary-fg);">${ICON.download}</span>
          </div>
          <div class="ec-code">bg-primary p-2 rounded-lg</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Soft tint</span>
          <div class="ec-body">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:color-mix(in srgb, var(--primary) 15%, transparent);color:var(--fg);">${ICON.download}</span>
          </div>
          <div class="ec-code">bg-primary/15 p-2 rounded-lg</div>
        </div>
        <div class="example-card">
          <span class="ec-tag">Neutral</span>
          <div class="ec-body">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;background:var(--muted);color:var(--muted-fg);">${ICON.download}</span>
          </div>
          <div class="ec-code">bg-muted p-2 rounded-lg</div>
        </div>
      </div>`,
    code: `<button className="bg-primary text-primary-foreground p-2 rounded-lg">
  <Download className="size-4" />
</button>`,
    howto:
      'Container size 36×36px for primary actions, 28×28px for secondary. Match border-radius to the surrounding component (8px for cards, full for pills).',
  },

  'rules': {
    eyebrow: 'Icon · rules',
    explanation:
      'Three rules: (1) icon color via className, never via SVG stroke attribute; (2) <code>aria-hidden="true"</code> when the icon is decorative AND has a text label; (3) <code>aria-label</code> when the icon stands alone as a button.',
    visual: `
      <div class="example-row">
        <div class="example-card is-bad">
          <span class="ec-tag">✕ Hardcoded stroke + no aria</span>
          <div class="ec-body"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div class="ec-code">&lt;svg stroke="#22c55e" /&gt;</div>
        </div>
        <div class="example-card is-good">
          <span class="ec-tag">✓ className + aria</span>
          <div class="ec-body"><span class="icon-tone-success" aria-hidden="true">${ICON.check}</span> <span style="color:var(--success);font-weight:600;font-size:13px;">Saved</span></div>
          <div class="ec-code">aria-hidden + text-success</div>
        </div>
      </div>`,
    code: `// Decorative icon next to text:
<span className="inline-flex items-center gap-1">
  <Check className="size-4 text-success" aria-hidden="true" />
  Saved
</span>

// Icon-only button:
<button aria-label="Delete row">
  <Trash className="size-4" />
</button>`,
    howto:
      'Audit every <code>&lt;svg&gt;</code> for hardcoded colors. Audit every icon-only button for <code>aria-label</code>. The MCP <code>get_anti_patterns</code> tool flags both.',
  },
};

// ── Export ──────────────────────────────────────────────────────────────

export const EXAMPLES_BY_HEADING = {
  laws: LAWS,
  'anti-patterns': ANTI,
  'rules-color-tokens': COLOR_TOKENS,
  'rules-brand-colors': BRAND_COLORS,
  'rules-containers': CONTAINERS,
  'rules-buttons': BUTTONS,
  'rules-icons': ICONS,
  'rules-elevation': ELEVATION,
  // Stage 5 will populate the remaining 2 section ids:
  //   'rules-typography', 'token-reference'
};
