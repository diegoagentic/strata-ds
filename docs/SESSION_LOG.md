# Strata DS — Session log

> Chronological record of work done on the DS + its consumers (demo-2026-strata-v3 in particular). Each entry references the commit(s) that delivered it. Use this when you need to understand "why was this decision made?" — the commit messages have the long-form rationale.

---

## Phase 1 — DS skeleton + MCP server foundation (earlier sessions)

| Commit | What |
| --- | --- |
| `75ed292` | Phase 4a — Figma cleanup, removed `src/app/`, relocated clipboard/CopyButton, archived figmaApi |
| `6aece38` | Phase 4b — migrated 99 P2 stories to P1 Storybook + dark mode + token JSON |
| `a5fc210` | Added DS Configuration story section (governance, status tokens, MCP connection) |
| `e2d2f79` | Phase 4c — enriched 10 priority components with when-to-use, anti-patterns, token docs |
| `3cf30c6` | Phase 5 — native MCP server with 7 tools (get_overview, get_component, get_tokens, get_rules, get_anti_patterns, search_governance, report_error) |
| `23a1752` | Phase 6-7 — P1↔P2 sync check, token audit scanner, pre-commit hook with tier-based enforcement |
| `3358ad8` | Phase 8 — refinement proposal analyzer (error collector, pattern analyzer, action item generator) |

Result: DS package + MCP server with 7 tools, governance scanner, learning system.

---

## Phase 2 — MCP-first dev app (week 1 of recent work)

| Commit | What |
| --- | --- |
| `1a17840` | MCP-first dev app + 93 enriched components in MCP + Branding/Transparency views |
| `062c26f` | Added 24 more live previews + fixed Skeleton visibility |
| `6a6912e` | Expanded live previews to 78 components (forms, overlays, marketing, ecommerce) |
| `5fbeee3` | Full P1↔P2 sidebar parity + Grid&Containers page + multi-variant showcase previews |

Result: a P1 dev app at localhost:5173 with sidebar mirroring P2's catalogue, every component with a live preview.

---

## Phase 3 — Vercel + hooks fix + parity gaps (mid-week)

| Commit | What |
| --- | --- |
| `a0a0f42` | Vercel build for dev app — separate `dev-dist/` + `vercel.json` |
| `a94b1b5` | Scoped hooks to preview components (fixed "Rendered more hooks" error) + 9 missing previews |
| `c523c8b` | Closed P1↔P2 parity gaps for 7 components (input, select, sheet, drawer, sonner, copy-button, sms) |
| `2000d37` | Repaired broken images in ProductList/ProductOverview/ShoppingCart + improved tooltip preview |

Result: P1 dev app stable on Vercel + visual parity with P2 storybook.

---

## Phase 4 — Sidebar alignment + foundations reconciliation

| Commit | What |
| --- | --- |
| `a2d90bd` | Final P1↔P2 sidebar alignment + enrich 3 thin MCP entries |
| `1d3d64d` | Hide Marketing+Ecommerce sections in P1 sidebar + add 2 missing MCP entries (action-center, create-order-dialog) |
| `68fef32` | Restore real Strata logo PNGs in BrandingView |
| `c3d68fb` | Export `ThemeProvider` + `useTheme` from package barrel |
| `0da10e3` | **Full foundations reconciliation** — surfaces (20), status (10), sidebar (8), charts (5), brand (12), 6 extended palettes. Fixed brand hex mismatches, added glow tokens, created branding/transparency/grid-containers sections. |

Result: MCP `/foundations/*` returns the 8 sections matching `variables.css` exactly. No more drift.

---

## Phase 5 — DS Architect agent + plan_ui (this session)

| Commit | What |
| --- | --- |
| `3badbb8` | **ds-architect subagent** + **plan_ui MCP tool** + slash command `/ds-plan` + featured live demo in MCPView |
| `e5c1c96` | Documented ds-architect workflow in MCPView + README + OverviewView callout |
| `90336ee` | Reordered MCPView (educational content moved to bottom) + generalized flow diagram (capabilities, not navbar-specific) |
| `914d184` | **5-layer enforcement strategy**: `get_session_briefing` MCP tool, assertive `plan_ui` description, Cursor rules template, Claude Code UserPromptSubmit hook, Antigravity system prompt template |
| `ab1ac00` | **Developer Guide** — `GUIDE.md` (canonical, 800-line GitHub-readable) + `DeveloperGuideView` (interactive, in dev app) with mental model, glossary, your-first-5-min, request flow trace, 5 worked examples, troubleshooting, FAQ, architecture diagram |

Result: a DS that proactively guides AI tools through MCP + agent + system prompts + hook + subagent. Triple-redundant enforcement. Onboarding via Developer Guide.

---

## demo-2026-strata-v3 progress (parallel work)

| FASE | What | Status |
| --- | --- | --- |
| 0 | Skeleton — Vite + Tailwind v4 + DS source alias + MCP config | ✅ |
| 1 | Provider stack — Auth, Demo, DemoProfile, Tenant, Theme | ✅ |
| 2 | Chrome dual-mode — floating pill Navbar + DemoSidebar (FAB, expanded, collapsed) + Spotlight + AIIndicator | ✅ |
| 3 | MBI profile + 18 mock data files + 9 demo steps | ✅ |
| 4 | **Shared components + MBI shells + landing libre + esqueletos pages** | ⏳ NEXT |
| 5 | Accounting AI flow (8 files, m2.1 + m2.3) | ⏳ |
| 6 | Collections AI flow (5 files, m2.4 + m2.5) | ⏳ |
| 7 | Quotes AI flow (11 files, m3.3 → m3.5 → m3.2 → m3.6 → m3.4) | ⏳ |
| 8 | Audit + docs + screenshots | ⏳ |

### Bugs caught and fixed during v3 work

- **React duplication**: v3 + DS each have their own `node_modules/react`; fixed via `dedupe` + explicit alias to v3's copy in `vite.config.ts`.
- **Alias collision**: `@/components/*` was being grabbed by the DS alias when v3 imported its own components. Fixed by switching v3's component imports to relative paths.
- **Navbar drift**: v3 first navbar was generic full-width because the implementer didn't consult the MCP. Discovery led to creating the `ds-architect` agent + 5-layer enforcement. Documented in `CLAUDE.md` of v3 as cautionary tale.
- **404 on Sidebar component**: P1 sidebar had `id: "sidebar-component"` but MCP only knew it as `sidebar`. Fixed in `a2d90bd`.

---

## Themes that emerged across sessions

### 1. P1 ↔ P2 alignment is foundational

Every consumer of the DS depends on these being in sync. We invested heavily in:
- Audit tooling (`sync:check`, `audit:tokens`)
- Visual parity in the dev app preview registry
- Foundations reconciliation (each token mirrors `variables.css`)

### 2. The MCP must be authoritative

Early sessions had drift between `variables.css` (truth) and MCP responses. Phase 4 reconciled them. Going forward: any change to `variables.css` requires a corresponding update in the MCP `FOUNDATIONS` object.

### 3. AI assistants need active steering

Just exposing tools isn't enough — AI may skip the lookup. The 5-layer enforcement (Phase 5) closes this gap with belt+braces+backup-belt.

### 4. Onboarding-by-doc beats onboarding-by-tribal-knowledge

Before the Developer Guide, every new dev (human or AI) had to piece things together from README + MCPView + plan files. Now there's one path through the system.

---

## Known gaps / future work

### Not blocking but worth doing

- **CLI helper**: `npx strata-ds plan "description"` for non-AI workflows
- **Cursor rules format for `.cursor/rules/`**: ours is markdown but Cursor may evolve the format
- **MCP transport over WebSocket**: currently stdio (IDE-bound). HTTP + WebSocket would let remote clients connect.
- **DS Architect for new components**: a "create_component" workflow that scaffolds a new DS component end-to-end
- **DS for non-React frameworks**: web components mirror? CSS-only mirror?

### Open questions

- How do we detect drift between `templates/` files and the canonical `.claude/agents/` ones automatically?
- Should `report_error` open a GitHub issue automatically?
- Storybook (P2) hasn't been touched in this session — does it need updating to reflect the foundations reconciliation?

---

## Glossary of important paths

| Path | What lives here |
| --- | --- |
| `design system/strata-ds/src/mcp-server/index.mjs` | MCP server source — components, foundations, rules, anti-patterns, tools, HTTP routes. **Source of governance truth.** |
| `design system/strata-ds/src/styles/tokens/variables.css` | CSS variable definitions for light mode. **Source of token truth.** |
| `design system/strata-ds/src/styles/tokens/variables-dark.css` | Dark mode overrides. |
| `design system/strata-ds/src/styles/tokens/theme-v4.css` | Tailwind v4 `@theme` mapping that exposes the variables to utilities. |
| `design system/strata-ds/src/components/` | 95 component implementations (.tsx). |
| `design system/strata-ds/src/app/` | The dev app shown at localhost:5173 (sidebar + views). |
| `design system/strata-ds/.claude/agents/ds-architect.md` | The subagent definition (canonical). |
| `design system/strata-ds/templates/` | Copy-paste files for any consuming project. |
| `design system/strata-ds/GUIDE.md` | The Developer Guide. **Read this first.** |
| `design system/strata-ds/docs/HANDOFF.md` | This handoff doc — entry point. |
| `design system/strata-ds/docs/SESSION_LOG.md` | This file — chronological log. |
| `design system/strata-ds/docs/MIGRATION_PLAN.md` | Active plan for v3 + outstanding DS work. |
| `demo-2026-strata-v3/` | Greenfield port of demo-2026-strata using the new DS. MVP MBI tenant. |
| `demo-2026-strata-v3/CLAUDE.md` | v3-specific AI guidance + workflow + Navbar bug cautionary tale. |
