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

// ── Export ──────────────────────────────────────────────────────────────

export const EXAMPLES_BY_HEADING = {
  laws: LAWS,
  'anti-patterns': ANTI,
  'rules-color-tokens': COLOR_TOKENS,
  'rules-brand-colors': BRAND_COLORS,
  // Stages 3-5 will populate the remaining 6 section ids:
  //   'rules-containers', 'rules-buttons',
  //   'rules-icons', 'rules-typography',
  //   'rules-elevation', 'token-reference'
};
