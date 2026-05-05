# Strata DS — Developer Guide

> A practical guide for developers integrating the Strata Design System into their projects with AI tools (Cursor, Claude Code, Antigravity, VS Code Copilot).

---

## Table of contents

1. [Mental model](#1-mental-model) — what is the MCP, what is the agent, how they fit together
2. [Glossary](#2-glossary) — every term you need
3. [Your first 5 minutes](#3-your-first-5-minutes) — zero to "using the agent"
4. [How a request flows](#4-how-a-request-flows) — the 5 layers, traced
5. [Worked examples](#5-worked-examples) — 5 real scenarios with code
6. [Troubleshooting](#6-troubleshooting) — when things don't fire / break
7. [FAQ](#7-faq) — short answers to common questions
8. [Architecture](#8-architecture) — diagram of the whole system

---

## 1. Mental model

The Strata DS isn't just a component library — it's a **live, queryable knowledge base** that AI tools consult before generating UI. This prevents your AI from inventing patterns the DS already provides.

### The problem we solve

When you ask a generic AI to "build a navbar with tabs", it generates code based on **its training data** — thousands of navbars from the open web, none of them yours. Result: hardcoded `bg-blue-500`, custom `<button>` markup, mismatched dark mode, drift from your DS. PR review catches it (best case) or production ships it (worst case).

### How we fix it

Five mechanisms layer on top of each other. Any one alone has gaps; combined they reach the AI through every channel.

```
┌──────────────────────────────────────────────────────┐
│  USER PROMPT: "build me a navbar with tabs"          │
└────────────────────┬─────────────────────────────────┘
                     │
        Layer 4 ─────┤  Pre-prompt hook (Claude Code)
                     │  Detects UI keyword → injects "[Strata DS active] Call plan_ui first"
                     ▼
        Layer 1 ─────┤  System prompt always loaded
                     │  CLAUDE.md / .cursor/rules/ → "Before any UI, plan_ui"
                     ▼
        Layer 5 ─────┤  Subagent fires (Claude Code)
                     │  ds-architect routes to deterministic blueprint workflow
                     ▼
        Layer 3 ─────┤  Tool description nudges
                     │  plan_ui description literally says "🚨 MANDATORY"
                     ▼
        Layer 2 ─────┤  Session briefing already loaded
                     │  AI knows the rules from MCP get_session_briefing()
                     ▼
                     ▼
              ┌──────────────┐
              │  MCP server   │  plan_ui(description) → blueprint
              │  localhost:3001│  + get_component, get_foundations, ...
              └──────┬────────┘
                     ▼
        Blueprint with: component, tokens, anti-patterns, snippet
                     │
                     ▼
        Implementer codes from blueprint
                     │
                     ▼
              ✅  DS-compliant by construction
```

### Two mental models

It helps to think of it as:

- **The DS is a person you can ask.** The MCP server is the phone number; `plan_ui` is the conversation. You pick up the phone, describe what you need, and the DS tells you exactly which component to use.
- **The agent is a co-pilot that makes the call for you.** Without it, the AI might forget to call. With it, every UI request triggers the consultation automatically.

---

## 2. Glossary

These terms appear across the docs. Here's what each one is:

| Term | Definition | Example |
| --- | --- | --- |
| **MCP** | Model Context Protocol — a standard that lets AI tools call external tools/resources via a server. | The Strata DS exposes its catalogue via an MCP server on `localhost:3001`. |
| **MCP server** | The local Node.js process that responds to MCP tool calls. | `node src/mcp-server/index.mjs` from the DS folder. |
| **MCP tool** | A named, callable function the AI can invoke through MCP. | `plan_ui("navbar with tabs")` returns a blueprint. |
| **Subagent** | A specialized agent that runs inside Claude Code (or similar) for a specific job. Has a description, tools list, and system prompt. | `ds-architect` is a subagent that fires on UI prompts. |
| **Slash command** | A user-invokable shortcut in Claude Code that runs a predefined task. | `/ds-plan navbar with tabs` |
| **Hook** | A script that runs at a specific lifecycle event (e.g. before the AI processes a prompt). | `UserPromptSubmit.json` injects context when UI keywords are detected. |
| **System prompt** | Instructions loaded into the AI's context at session start. | `.cursor/rules/strata-ds.md`, `CLAUDE.md` |
| **Token** | A semantic CSS variable name (e.g. `bg-card`, `text-foreground`). | Use `bg-primary` not `bg-blue-500`. |
| **Anti-pattern** | A documented "don't do this" rule. | `❌ Raw <table> elements → Use <Table> from DS` |
| **Blueprint** | The structured response from `plan_ui` — component + tokens + rules + anti-patterns + snippet. | What the agent returns BEFORE writing code. |
| **Tier** | Governance strictness level (1 = strict for shared components, 3 = loose for demos). | The DS itself is Tier 1; demo apps are Tier 3. |

---

## 3. Your first 5 minutes

From zero to using the DS with your AI:

### Step 1 — Start the MCP server (30 seconds)

In the DS folder:

```bash
cd "design system/strata-ds"
node src/mcp-server/index.mjs
```

The server runs on stdio for IDEs and exposes a health endpoint on port 3001:

```bash
curl http://localhost:3001/health
# → {"status":"ok","tools":11,...}
```

### Step 2 — Configure your IDE (1 minute)

Pick your tool:

**Cursor** — create `.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "strata-ds": {
      "command": "node",
      "args": ["./design system/strata-ds/src/mcp-server/index.mjs"]
    }
  }
}
```

**Claude Code** — create `.claude/settings.json`:
```json
{
  "mcpServers": {
    "strata-ds": {
      "command": "node",
      "args": ["../design system/strata-ds/src/mcp-server/index.mjs"]
    }
  }
}
```

**VS Code Copilot** — create `.vscode/mcp.json`:
```json
{
  "servers": {
    "strata-ds": {
      "type": "stdio",
      "command": "node",
      "args": ["./design system/strata-ds/src/mcp-server/index.mjs"]
    }
  }
}
```

### Step 3 — Install enforcement templates (1 minute)

Copy from the DS folder:

**Cursor**:
```bash
mkdir -p .cursor/rules
cp "../design system/strata-ds/templates/cursor-rules-strata-ds.md" .cursor/rules/strata-ds.md
```

**Claude Code** (full kit):
```bash
mkdir -p .claude/agents .claude/commands .claude/hooks
cp "../design system/strata-ds/.claude/agents/ds-architect.md"      .claude/agents/
cp "../design system/strata-ds/.claude/commands/ds-plan.md"         .claude/commands/
cp "../design system/strata-ds/templates/claude-code-hook-user-prompt-submit.json" \
   .claude/hooks/UserPromptSubmit.json
```

**Antigravity / generic** — paste content of `templates/antigravity-system-strata-ds.md` into the agent's system-prompt field.

### Step 4 — Reload your IDE (5 seconds)

Restart the IDE so it picks up the MCP config + hooks/agents.

### Step 5 — Try it (2 minutes)

In your AI chat:

```
/ds-plan a sign-in screen with email, password, sign-in button, and forgot-password link
```

You should see a blueprint with:
- Recommended components (Form, Field, Input, Button)
- Required tokens (bg-card, bg-input-background, focus:ring-ring, text-primary)
- Anti-patterns to avoid (raw `<form>`, hardcoded colors)
- Starter snippet

If you got a blueprint — you're set. **Now write your real prompt and watch the agent fire automatically.**

---

## 4. How a request flows

Trace what happens when a developer writes:

> "necesito una pantalla para que los usuarios firmen contratos"

The prompt is **implicit** — the user didn't say "build" or "navbar" or any UI noun explicitly. Yet all 5 layers still kick in:

```
─── Step 1 ─── Hook detects "pantalla" ───────────────────────────
  UserPromptSubmit.json regex matches → injects:
  "🎨 [Strata DS active] You MUST call plan_ui first."

─── Step 2 ─── System prompt reaffirms ─────────────────────────
  CLAUDE.md / .cursor/rules/ already in context:
  "Before any UI task, call plan_ui. Hard rule."

─── Step 3 ─── Subagent auto-trigger ───────────────────────────
  ds-architect's description matches "pantalla" → routes the task

─── Step 4 ─── Tool description confirms ───────────────────────
  When the AI scans available tools, plan_ui says:
  "🚨 MANDATORY for any UI task. MUST be called BEFORE writing code."

─── Step 5 ─── Briefing already loaded ─────────────────────────
  Earlier in the session AI called get_session_briefing()
  → it knows the token rules, the catalogue size, the workflow

─── Action ─── AI calls plan_ui("pantalla para firmar contratos")

─── Response ── MCP returns:
                primary: Form + Card composition
                tokens:  bg-card, bg-input-background, border-input,
                         text-primary (CTA), text-muted-foreground (hint)
                rules:   color-tokens, brand-colors
                anti-patterns: ❌ raw <form>, ❌ bg-blue-500 for CTA
                blueprint_questions:
                  - "Auto-redirect on success or show toast?"
                  - "Need 2FA flow?"

─── Output ── Agent presents blueprint to user BEFORE any code

─── Result ── User: "perfect — that matches our DS, ship it"
              ✅ Zero rework, zero invention drift.
```

---

## 5. Worked examples

### Example 1 — Sign-in screen

**Prompt**: "build a sign-in screen with email, password, sign-in button, and a forgot password link"

**Blueprint returned**:
```ts
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from 'strata-design-system';
import { Field, FieldLabel, FieldDescription } from 'strata-design-system';
import { Input, Button, Link } from 'strata-design-system';

<Card className="max-w-md mx-auto">
  <CardHeader>
    <CardTitle>Sign in</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
    </Field>
    <Field>
      <FieldLabel>Password</FieldLabel>
      <Input type="password" />
      <FieldDescription>
        <Link href="/forgot-password">Forgot password?</Link>
      </FieldDescription>
    </Field>
  </CardContent>
  <CardFooter>
    <Button type="submit" className="w-full">Sign in</Button>
  </CardFooter>
</Card>
```

**Why this is right**:
- `Card` provides the surface tokens (`bg-card`, `text-card-foreground`)
- `Field` ties label → input → description with a11y
- `Input type="password"` auto-adds visibility toggle (DS feature)
- `Button` (default variant) resolves to `bg-primary text-primary-foreground` — auto light/dark
- `Link` is the DS link primitive (uses `text-primary hover:underline` tokens)
- All semantic tokens; zero raw colors

**What the AI would have built without the agent**:
- Raw `<form>` with `bg-white p-8 rounded-lg shadow`
- `<input className="border border-gray-300">` (gray-300 not in DS)
- `<button className="bg-blue-500 text-white">` (wrong token)
- No password visibility toggle
- Breaks dark mode

---

### Example 2 — Dashboard KPI row

**Prompt**: "I need a dashboard with 4 KPI cards showing revenue, users, conversion rate, and active sessions"

**Blueprint returned**:
```ts
import { KPICard } from 'strata-design-system';
import { TrendingUp, Users, Target, Activity } from 'lucide-react';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <KPICard
    label="Revenue"
    value="$48,219"
    delta="+12.5%"
    deltaTone="success"
    icon={<TrendingUp className="size-4" />}
  />
  <KPICard
    label="Users"
    value="2,481"
    delta="+8.2%"
    deltaTone="success"
    icon={<Users className="size-4" />}
  />
  <KPICard
    label="Conversion"
    value="3.4%"
    delta="-0.3%"
    deltaTone="warning"
    icon={<Target className="size-4" />}
  />
  <KPICard
    label="Active sessions"
    value="312"
    delta="real time"
    deltaTone="muted"
    icon={<Activity className="size-4" />}
  />
</div>
```

**Tokens used**: `bg-card`, `text-foreground`, `text-muted-foreground` for labels, `text-status-success` / `text-status-warning` via `deltaTone` prop, `border-border`.

**Anti-pattern avoided**: Hand-rolled `<div>` cards with raw `text-green-500` for trends. The `deltaTone` prop semantically maps to the right status token.

---

### Example 3 — Sortable data table with status badges

**Prompt**: "data table for orders with sortable columns, status badges, and a search filter"

**Blueprint returned**:
```ts
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell
} from 'strata-design-system';
import { StatusBadge, Input } from 'strata-design-system';
import { Search } from 'lucide-react';

<div className="space-y-4">
  <Input
    type="search"
    placeholder="Search orders..."
    prefix={<Search className="size-4" />}
  />
  <Table striped>
    <TableHeader>
      <TableRow>
        <TableHead sortable>Order #</TableHead>
        <TableHead sortable>Customer</TableHead>
        <TableHead sortable>Status</TableHead>
        <TableHead sortable className="text-right">Total</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {orders.map((o) => (
        <TableRow key={o.id}>
          <TableCell className="font-mono">{o.id}</TableCell>
          <TableCell>{o.customer}</TableCell>
          <TableCell><StatusBadge status={o.status} /></TableCell>
          <TableCell className="text-right">{o.total}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
```

**Tokens used**: `border-border`, `bg-muted/50` for striped rows, `hover:bg-muted/50` row hover (built-in), `text-foreground` / `text-muted-foreground`, status tokens via `<StatusBadge>`.

**Anti-pattern avoided**: Raw `<table>` with `border: 1px solid #ccc`, custom `<span>` badges with hardcoded greens/reds. The DS `<StatusBadge>` maps the status string to the right `bg-status-* /10 + text-status-*` pattern automatically.

---

### Example 4 — Notification toast on save

**Prompt**: "show a success toast when the form saves, and an error toast if the API fails"

**Blueprint returned**:
```ts
import { toast } from 'sonner'; // re-exported by strata-design-system
import { Toaster } from 'strata-design-system';

// Mount once at app root:
<Toaster />

// In your save handler:
async function handleSave() {
  try {
    await api.save(data);
    toast.success("Profile saved", {
      description: "Your changes are live.",
    });
  } catch (err) {
    toast.error("Could not save", {
      description: err.message,
      action: { label: "Retry", onClick: handleSave },
    });
  }
}
```

**Tokens used**: Sonner picks up DS theme via the `Toaster` config (`bg-popover`, `border-border`, status colors).

**Anti-pattern avoided**: Custom modal-as-notification (blocks UI), `alert()` (jarring), banners that don't auto-dismiss. Sonner is the DS-blessed transient feedback channel.

---

### Example 5 — Brand-colored CTA button

**Prompt**: "primary CTA button for the hero section — should be the lime brand color"

**Blueprint returned**:
```ts
import { Button } from 'strata-design-system';

// Recommended (semantic):
<Button variant="default" size="lg">Get started</Button>

// Or explicit brand pill (when you need full lime treatment):
<Button variant="brand" shape="pill" size="lg">Get started</Button>
```

**Tokens used**:
- `bg-primary` resolves to `brand-300` (light) and `brand-500` (dark) via the `--color-primary` CSS variable
- `text-primary-foreground` ensures WCAG-AA contrast in both modes

**Anti-pattern avoided**: `<button className="bg-yellow-400">` (wrong shade), `<button className="bg-lime-500">` (Tailwind primitive instead of DS token), or `<button className="bg-[#E6F993]">` (hardcoded hex that drifts when the brand updates).

---

## 6. Troubleshooting

### "The agent doesn't fire when I ask for UI"

Causes (most likely first):

1. **Hook not installed** — confirm `.claude/hooks/UserPromptSubmit.json` exists in your project (Claude Code only).
2. **System prompt not loaded** — for Cursor, check `.cursor/rules/strata-ds.md`. For Claude Code, ensure `CLAUDE.md` is at the project root.
3. **MCP server not running** — `curl http://localhost:3001/health` must return JSON. If not, run `node src/mcp-server/index.mjs` from the DS folder.
4. **IDE didn't pick up the config** — restart the IDE.

Fastest diagnostic: in your AI chat, type `/ds-plan navbar with tabs`. If the slash command works, the agent file is loaded. If the response includes a real component name, the MCP is reachable.

### "MCP returns 404 / 'Component not found'"

The catalogue is finite. If `get_component("FooBar")` returns 404:

1. **Spelling**: try `search_governance("foo")` to fuzzy-match.
2. **Real gap**: if no match, the component genuinely doesn't exist. Call `report_error({ component: "FooBar", error: "Not in catalogue", project: "your-project" })` to log the gap. The DS team triages these in REFINEMENT_PROPOSALS.md.
3. **Use the closest primitive**: until the gap is filled, build with the nearest match (e.g. for a missing "Wizard", compose `Card` + `Tabs` + `Button`).

### "The recommendation feels wrong"

The agent is a starting point, not a tyrant. If `plan_ui` recommends NavbarFloating but your context needs a flush full-width bar:

1. Look at `alternatives` in the response — usually has the right shape.
2. Override explicitly: tell the AI "use Navbar (not NavbarFloating) because this is a generic app shell, not a marketing demo."
3. The AI should respect your override AND log the friction via `report_error` so the recommendation logic improves.

### "The hook injects too aggressively"

The `UserPromptSubmit.json` hook fires on 30+ keywords. If it's noisy for non-UI tasks:

1. **Edit the regex** in your local copy to remove the keyword that's causing false positives.
2. **Disable per-session**: comment out the hook entry temporarily.
3. **Report it**: open an issue on the DS repo with the prompt that triggered incorrectly.

### "I'm using a tool that doesn't support MCP"

Three options:

1. **Direct curl**: `curl 'localhost:3001/plan_ui?description=...'` — get the blueprint as JSON, paste into your AI chat manually.
2. **System prompt only**: paste `templates/antigravity-system-strata-ds.md` content into your tool's system-prompt field. The AI won't have callable tools, but it'll know the rules and token names.
3. **CLI helper** (future): `npx strata-ds plan "navbar"` — coming soon.

### "The team disagrees with a DS rule"

Rules aren't immutable. If a rule blocks legitimate work:

1. **Discuss with the DS owner** — propose a change to the rule's markdown source in `mcp-server/index.mjs` `RULES`.
2. **Add an exception note** to the rule: "Exception: tier-3 demo apps may use raw zinc for storytelling palettes."
3. **Tier governance**: tier-1 (the DS itself) is strict, tier-3 (demo apps) is loose. Match the tier to the project.

---

## 7. FAQ

**Q: Do I have to use AI at all?**
A: No. The MCP exposes an HTTP API; you can curl `localhost:3001/plan_ui?description=...` from any script and get the same blueprint as JSON. The AI tools are a convenience layer.

**Q: Will this slow down my AI?**
A: No. `plan_ui` returns in ~50ms. The agent runs in parallel with the implementer; you don't wait sequentially.

**Q: Does the agent write the code or just plan?**
A: Just plans. The implementer (you, the main AI agent) writes the code from the blueprint. This separation is intentional — the architect doesn't have file-write permissions.

**Q: What if I want to bypass the agent for a quick prototype?**
A: Two ways: (1) tell the AI "skip the architect, this is a throwaway" — it should respect that. (2) Comment out the hook for the session. The DS rules still apply at PR review time, so use sparingly.

**Q: How do I keep templates in sync when the DS updates rules?**
A: Pull from the DS repo (`git pull` in `design system/strata-ds`) and re-copy `templates/*` into your project. The DS templates are versioned; we'll publish breaking-change notes in commit messages tagged `feat(templates)!:`.

**Q: My project has a custom palette / branded variant. How do I extend the DS without breaking rules?**
A: Three patterns: (1) wrap a DS component (`<MyBrandedButton>` that internally uses `<Button variant="brand">`), (2) propose adding the variant to the DS itself (open a PR), (3) tier-3 escape hatch — apps that aren't shared can use raw tokens with a documented justification.

**Q: Is there a Storybook?**
A: Yes — `front-react-strata-storybook` (P2). Read-only reference for component behavior, not a runtime dependency.

**Q: Is there a way to bulk-audit my project for DS violations?**
A: `npm run audit:tokens` from the DS folder runs over a directory and flags raw tokens, hardcoded colors, and known anti-patterns. Configure your CI to fail on violations.

---

## 8. Architecture

```
                                    ┌────────────────────────────┐
                                    │  Your IDE (Cursor /        │
                                    │  Claude Code / Antigravity │
                                    │  / VS Code Copilot)        │
                                    └─────────────┬──────────────┘
                                                  │
        ┌─────────────────────────────────────────┼──────────────────────────────────────┐
        │                                         │                                      │
        ▼                                         ▼                                      ▼
┌──────────────────┐               ┌────────────────────────────┐         ┌─────────────────────────┐
│ System prompt    │               │  Pre-prompt hook           │         │  Subagent              │
│ .cursor/rules/   │               │  .claude/hooks/            │         │  .claude/agents/        │
│ CLAUDE.md        │               │  UserPromptSubmit.json     │         │  ds-architect.md        │
│                  │               │                            │         │                          │
│ Always loaded    │               │ Fires on UI keyword        │         │ Auto-fires on patterns  │
│ Sets baseline    │               │ Injects "call plan_ui"     │         │ Forces blueprint flow   │
└──────────────────┘               └────────────────────────────┘         └─────────────────────────┘
        │                                         │                                      │
        └─────────────────────────────────────────┼──────────────────────────────────────┘
                                                  │
                                                  ▼
                                  ┌─────────────────────────────────┐
                                  │  MCP server                     │
                                  │  localhost:3001 (stdio + HTTP)  │
                                  │                                  │
                                  │  Tools (11):                    │
                                  │   - get_session_briefing        │
                                  │   - plan_ui                     │
                                  │   - get_component               │
                                  │   - get_component_code          │
                                  │   - get_foundations             │
                                  │   - get_rules                   │
                                  │   - get_anti_patterns           │
                                  │   - search_governance           │
                                  │   - get_overview                │
                                  │   - get_tokens                  │
                                  │   - report_error                │
                                  └─────────────────┬───────────────┘
                                                    │
                                                    ▼
                                  ┌─────────────────────────────────┐
                                  │  DS source of truth             │
                                  │  variables.css + variables-dark │
                                  │  + 95 component .tsx files       │
                                  │  + 8 governance rules           │
                                  │  + 17 anti-patterns             │
                                  └─────────────────────────────────┘
```

### File map

```
design system/strata-ds/
├── src/mcp-server/index.mjs          # MCP server source (11 tools, foundations, rules)
├── src/styles/tokens/variables.css   # SOURCE OF TRUTH for all colors/tokens
├── src/components/**/*.tsx           # 95 component implementations
├── .claude/agents/ds-architect.md    # Subagent definition (canonical)
├── .claude/commands/ds-plan.md       # Slash command (canonical)
├── templates/
│   ├── README.md                     # 5-layer enforcement strategy + install
│   ├── cursor-rules-strata-ds.md     # Copy → .cursor/rules/ in any project
│   ├── claude-code-hook-user-prompt-submit.json  # Copy → .claude/hooks/
│   └── antigravity-system-strata-ds.md  # Paste into Antigravity / generic system prompt
├── README.md                         # Quickstart for AI-assisted projects
└── GUIDE.md                          # ← you are here
```

---

## Where to next

- **Live demo**: run the dev app (`npm run dev` from this folder) → http://localhost:5173 → "MCP Connection" page has a working `plan_ui` tester.
- **All components**: http://localhost:5173 → "All Components" — visual grid of all 95 with previews.
- **Foundations**: http://localhost:5173 → Foundations sidebar — Colors, Typography, Spacing, etc.
- **Templates ready to copy**: `templates/` folder.
- **Open a question / report a gap**: call `report_error` from any AI tool with MCP enabled, or open an issue in the DS repo.
