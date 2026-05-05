# Strata DS — Session Handoff

> Where we are, what's next, how to resume on another machine.

This is the **entry point** if you're picking up work on the Strata DS or any of its consumers (demo-2026-strata-v3 in particular). Read this first, then dive into [SESSION_LOG.md](./SESSION_LOG.md) for the full chronology and [MIGRATION_PLAN.md](./MIGRATION_PLAN.md) for the active plan.

---

## TL;DR — current state

| Area | State | Where |
| --- | --- | --- |
| **DS package** (P1 — strata-ds) | ✅ Production-ready · 95 components · 8 foundations · 17 anti-patterns | This repo |
| **MCP server** | ✅ 11 tools · stdio + HTTP on :3001 · `plan_ui` blueprint helper | `src/mcp-server/index.mjs` |
| **ds-architect subagent** | ✅ Auto-fires on UI prompts · slash command `/ds-plan` | `.claude/agents/` + `.claude/commands/` |
| **Enforcement templates** | ✅ Cursor rules · Claude Code hook · Antigravity system prompt | `templates/` |
| **Developer Guide** | ✅ GUIDE.md + interactive view in dev app | `GUIDE.md` + `src/app/views/DeveloperGuideView.tsx` |
| **P1 dev app** | ✅ Running at localhost:5173 · Foundations / Components / MCP Connection / Developer Guide | `src/app/` |
| **P2 Storybook** | ✅ Running at localhost:6006 · 90+ stories · read-only reference | `front-react-strata-storybook/` (sibling repo) |
| **demo-2026-strata-v3** | 🟡 FASES 0-3 done · paused at FASE 4 | `../../demo-2026-strata-v3` |

---

## How to resume on another machine

### Clone the repos

```bash
# Workspace layout expected:
# Strata/
# ├── design system/
# │   ├── strata-ds/                          ← this repo
# │   └── front-react-strata-storybook/       ← P2 (read-only)
# ├── demo-2026-strata/                       ← v1 demo (read-only blueprint)
# ├── demo-2026-strata-v2/                    ← failed port (reference)
# └── demo-2026-strata-v3/                    ← v3 in progress

# 1. Clone strata-ds (this repo)
git clone https://github.com/diegoagentic/strata-ds.git "design system/strata-ds"

# 2. Pull latest
cd "design system/strata-ds"
git pull origin main

# 3. Install
npm install
```

### Start the three local servers

You'll typically need all three running while iterating on v3:

```bash
# Terminal 1 — P1 dev app
cd "design system/strata-ds"
npm run dev
# → http://localhost:5173

# Terminal 2 — MCP server (powers the AI)
cd "design system/strata-ds"
node src/mcp-server/index.mjs
# → http://localhost:3001/health

# Terminal 3 — P2 Storybook (read-only reference)
cd "design system/front-react-strata-storybook"
npm run storybook
# → http://localhost:6006

# Terminal 4 (when working on v3) — v3 dev app
cd "demo-2026-strata-v3"
npm run dev
# → http://localhost:5180
```

### Open the dev app and start

1. http://localhost:5173 → **Developer Guide** in sidebar — primer in 5 sections
2. http://localhost:5173 → **MCP Connection** → live `plan_ui` demo
3. Continue with `MIGRATION_PLAN.md` from the next pending phase

---

## Active plan — what's next

**v3 FASE 4** (paused — see [MIGRATION_PLAN.md](./MIGRATION_PLAN.md) §v3 plan):

> Shared components + MBI shells + landing libre + esqueletos pages

Concretely:

1. Bulk `plan_ui` lookup for: Dialog, Badge, StatusBadge, Heading, Text, Tabs, Card, KPICard
2. Copy shared components to v3: `ReasonDialog.tsx`, `StatusBadge.tsx` (audit imports vs DS)
3. Copy MBI shells: `MBIPageShell`, `MBIWizardShell`, `MBIModuleHeader`, `MBIPersonaBadge`
4. Create `MBIOverviewPage.tsx` — landing del tenant cuando no hay demo
5. Create `MBIAccountingPage.tsx` + `MBIQuotesPage.tsx` esqueletos (modo App libre)
6. Verify: navigate `mbi-overview` / `mbi-accounting` / `mbi-quotes` without demo active

After FASE 4: FASE 5 (Accounting AI flow, 8 files), FASE 6 (Collections AI, 5 files), FASE 7 (Quotes AI, 11 files), FASE 8 (audit + screenshots).

---

## What changed this week (2026-04-29 → 2026-05-05)

Ten major commits delivered the DS Architect workflow + comprehensive docs:

| Commit | What it did |
| --- | --- |
| `ab1ac00` | Developer Guide (GUIDE.md + interactive view) |
| `914d184` | 5-layer enforcement templates (Cursor rules + Claude Code hook + Antigravity system prompt) |
| `90336ee` | MCPView reordered + flow diagram generalized |
| `e5c1c96` | Documented ds-architect workflow in MCPView + README + OverviewView |
| `3badbb8` | ds-architect subagent + `plan_ui` MCP tool + slash command |
| `0da10e3` | Full foundations reconciliation P1 ↔ DS source of truth (8 sections) |
| `c3d68fb` | Export `ThemeProvider` + `useTheme` from DS barrel |
| `68fef32` | Restore real Strata logo PNGs in BrandingView |
| `1d3d64d` | Hide Marketing/Ecommerce in P1 sidebar + add 2 missing MCP entries |
| `a2d90bd` | Final P1↔P2 sidebar alignment + enrich 3 thin MCP entries |

See [SESSION_LOG.md](./SESSION_LOG.md) for the complete chronology including v3 work.

---

## Critical files / where to look

### When something breaks

- **MCP server crashes** → `src/mcp-server/index.mjs` (start with `node src/mcp-server/index.mjs`)
- **Dev app types fail** → run `npm run typecheck`. The 3 pre-existing errors in `archive/` and `legacy-components.ts` are known, ignore them.
- **Vercel deploy fails** → check `vercel.json`. Build outputs to `dev-dist/` (not `dist/` which is for the lib build).
- **v3 React duplication** → `vite.config.ts` has `dedupe` + explicit react-dom alias. Don't remove.
- **v3 alias conflicts** → `@/components/*`, `@/utils`, `@/contexts/*` map to DS source; `@/*` (catch-all) maps to v3 src. Don't reorder.

### When extending the DS

- **Add a new component** → drop into `src/components/<category>/<name>.tsx` + register in MCP `COMPONENTS` map at the same path
- **Add a new token** → add to `src/styles/tokens/variables.css` AND `variables-dark.css` AND mirror in MCP `FOUNDATIONS.colors` (or relevant section)
- **Add a new rule** → add to MCP `RULES` map in `src/mcp-server/index.mjs` + reference in `.claude/agents/ds-architect.md` if it's enforcement-relevant

### When extending the agent / MCP

- **Add a tool** → MCP `tools` array in `setRequestHandler(ListToolsRequestSchema, ...)` + handler in the switch statement + matching HTTP route in the health server section
- **Update enforcement** → edit `templates/cursor-rules-strata-ds.md` + `templates/antigravity-system-strata-ds.md` + `templates/claude-code-hook-user-prompt-submit.json` + `.claude/agents/ds-architect.md` (consistency across all four)
- **Strengthen tool descriptions** → the description string in the tool definition is what AI clients see; make it imperative

---

## Decisions to remember

These were made along the way; document them so we don't re-debate:

1. **v3 architecture mirrors v1** (manual switch + 5 contexts) — not React Router. Source: user decision in plan.
2. **MVP scope = MBI only** — other 7 tenants come after MBI proves the pattern.
3. **Tailwind v4 in v3** — aligned with P1, not v3-of-Tailwind.
4. **Tokens consumed via DS source alias** — no need to rebuild the lib on every change. Vite alias points at `design system/strata-ds/src/components/index.ts`.
5. **P2 is read-only** during v3 MVP. No story changes.
6. **Marketing + Ecommerce hidden in P1 sidebar** — components remain in lib + MCP, just not in nav.
7. **`bg-primary text-primary-foreground` is preferred** over `bg-brand-300 dark:bg-brand-500` for active/CTA states (semantic, auto-resolves).
8. **Component-mapping pre-flight is mandatory** — every new component port in v3 must run `/ds-plan` first. Established after the Navbar drift bug in FASE 2.

---

## Where the daily plan lives

- **Local Claude Code plans**: `~/.claude/plans/gracias-ya-tenemos-toda-snappy-minsky.md` (not committed; machine-local)
- **Canonical plan in this repo**: [`docs/MIGRATION_PLAN.md`](./MIGRATION_PLAN.md) (committed; share across machines)

If you start a new Claude Code session on a different machine, the local plan file won't be there. Start from `MIGRATION_PLAN.md` instead — it has the same content.

---

## How to ask for help / surface a gap

While working:

```bash
# Direct curl to the MCP — works without AI
curl http://localhost:3001/health
curl 'http://localhost:3001/plan_ui?description=<your-thing>'
curl http://localhost:3001/foundations/colors

# Via AI tool with MCP enabled
> Use the Strata DS MCP. Call get_session_briefing first.
> Then plan_ui("description of what you need").
```

If something's missing from the catalogue:

```ts
// Inside any AI tool with MCP
report_error({
  component: "MissingThing",
  error: "no good match in plan_ui for X",
  project: "demo-2026-strata-v3",
  context: "needed for FASE N",
});
```

This appends to `REFINEMENT_PROPOSALS.md` in the DS root and is the official feedback channel.

---

**Last updated**: 2026-05-05 · **Next session**: resume v3 FASE 4 per `MIGRATION_PLAN.md`
