# Migration Plan — demo-2026-strata-v3 + outstanding DS work

> Active plan. Mirrors the local Claude Code plan (`~/.claude/plans/...`) so the same plan is available on any machine. Update this file when scope changes.

---

## Context

`demo-2026-strata` is the original demo (193 components, 16K LoC for MBI alone, 8 tenants, 17 simulations, demo flows interactive paso a paso). The v2 attempt failed (wireframe stub).

`demo-2026-strata-v3` is the greenfield port using the new strata-design-system. **MVP scope = MBI tenant only.** Other tenants follow once MBI proves the pattern.

---

## Decisions locked in

1. **New folder**: `demo-2026-strata-v3` (clean slate, leave v2 as reference)
2. **Architecture replicates v1**: manual switch + 5 contexts (Auth, Demo, DemoProfile, Tenant, Theme) — NOT React Router, NOT Zustand
3. **MVP = MBI only** (the most recent tenant, 9 steps, 3 flows: Accounting AI / Collections AI / Quotes AI)
4. **MCP used as dev tool** + ds-architect agent (5-layer enforcement)
5. **P2 (Storybook) is read-only** — no story changes during MVP
6. **Tailwind v4** in v3 (aligned with P1)
7. **Tokens via DS source alias** — no rebuild needed during dev
8. **Marketing + Ecommerce hidden** in P1 sidebar (components stay in lib + MCP)
9. **Component-mapping pre-flight is mandatory** — `/ds-plan` BEFORE every new component port

---

## v3 status

| FASE | Description | Status |
| --- | --- | --- |
| 0 | Skeleton — Vite + Tailwind v4 + DS source alias + MCP config + CLAUDE.md | ✅ DONE |
| 1 | Provider stack — 5 contexts wired in correct order | ✅ DONE |
| 2 | Chrome dual-mode — floating pill Navbar + DemoSidebar (3 states) + Spotlight + AIIndicator | ✅ DONE |
| 3 | MBI profile + 18 mock data files + 9 demo steps registered | ✅ DONE |
| 4 | **Shared components + MBI shells + landing libre + esqueletos pages** | ⏳ NEXT |
| 5 | Accounting AI flow — 8 files (m2.1, m2.3) | ⏳ |
| 6 | Collections AI flow — 5 files (m2.4, m2.5) | ⏳ |
| 7 | Quotes AI flow — 11 files (m3.3 → m3.5 → m3.2 → m3.6 → m3.4) | ⏳ |
| 8 | Audit + screenshots + handover docs | ⏳ |

---

## FASE 4 (NEXT) — Shared + MBI shells + landing libre

**Objective**: chrome de páginas MBI listo + landing navegable SIN demo activo (modo App libre funcional).

### Pre-flight (use the agent!)

Before writing any component in this fase, run:

```bash
# In Claude Code:
/ds-plan dialog with title, description, footer with cancel + confirm buttons
/ds-plan badge for status (success/warning/error)
/ds-plan tabs for an internal section navigation
/ds-plan card with header, content, footer
/ds-plan kpi card with label, value, delta indicator
```

Or in any AI tool with MCP enabled:
```
plan_ui("dialog with form and destructive cancel button")
plan_ui("status badge soft variant")
plan_ui("MBI overview landing with tenant stats")
```

### Concrete tasks

1. **Bulk MCP lookup** — call `plan_ui` for: Dialog, Badge, StatusBadge, Heading, Text, Tabs, Card, KPICard. Cache responses for the rest of the fase.

2. **Copy shared components** to `v3/src/components/shared/`:
   - `ReasonDialog.tsx` from v1 — audit imports vs DS (Dialog primitive + DS tokens)
   - `StatusBadge.tsx` from v1 — verify if our DS provides it (use DS version if so)

3. **Copy MBI shells** to `v3/src/components/mbi/`:
   - `MBIPageShell.tsx` (~70 LoC) — wrapper con header + breadcrumbs + tenant context
   - `MBIWizardShell.tsx` (~180 LoC) — chrome de wizard (step chips + back/next)
   - `MBIModuleHeader.tsx` (~285 LoC) — title + AI tint + outcome blurb
   - `MBIPersonaBadge.tsx` (~50 LoC) — componer con DS Avatar + Badge

4. **Create `MBIOverviewPage.tsx`** (~400 LoC port from v1) — landing del tenant:
   - Hero "MBI · Accounting AI + Quotes AI" + descripción
   - 3 stat cards (KPIs reales: 30 manufacturers, 42 employees, ~$17M revenue) usando `<KPICard>`
   - Sección "Available flows" con 2 cards clicables (Accounting AI / Quotes AI)
   - Sección "Try the guided demo" destacando el FAB ▶ Demo

5. **Create `MBIAccountingPage.tsx` + `MBIQuotesPage.tsx` esqueletos**:
   - Render mínimo con header + tabs internos (Accounting: AP / Collections; Quotes: 5-step wizard chips)
   - Mock data básica para "primer vistazo" antes de pasar al demo

6. **Audit DS por archivo**:
   - Tokens crudos `bg-zinc-50` → `<Card>` o `bg-card`/`bg-muted`
   - `text-foreground/muted-foreground` → ya OK
   - Botones inline → `<Button variant="...">`
   - Custom modals → `<Dialog>` del DS

### Success criteria

- Navegar a `mbi-overview` (default landing) sin demo activo → landing rica con KPIs y cards clicables
- Click en tab Accounting AI → renderiza `MBIAccountingPage` esqueleto
- Click en tab Quotes AI → renderiza `MBIQuotesPage` esqueleto
- Click ▶ Demo → DemoSidebar aparece, step 0 activo
- 0 errores de typecheck, 0 violaciones de tokens

---

## FASE 5 — Flow 1: Accounting AI (1 sesión)

Steps `m2.1` + `m2.3`. Files to port (8):

- `MBIAccountingPage.tsx` (272 LoC)
- `AccountingMorningQueue.tsx` (270 LoC)
- `InvoiceQueueTable.tsx` (240 LoC)
- `InvoiceDetailPanel.tsx` (550 LoC)
- `NonEDIReconcilerScene.tsx` (608 LoC)
- `NonEDIReconciliationPanel.tsx` (250 LoC)
- `DataSourcesBar.tsx` (280 LoC)

Pre-flight: `/ds-plan invoice queue table with status badges and detail drawer`.

Replace per file:
- `<table>` raw → `<Table>` from DS
- Modales con headlessui → `<Dialog>` from DS
- Botones inline → `<Button>` from DS
- Badges custom → `<StatusBadge>` from DS

---

## FASE 6 — Flow 2: Collections AI (1 sesión)

Steps `m2.4` + `m2.5`. Files (5):
- `ARAgingReviewScene.tsx` (208 LoC)
- `ARStatusBoard.tsx` (363 LoC)
- `ARHoldReviewModal.tsx` (300 LoC)
- `ARAgingWrapScene.tsx` (200 LoC)
- `AIEmailDraftsPanel.tsx` (330 LoC)

Pre-flight: `/ds-plan AR aging kanban board with email drafts panel`.

---

## FASE 7 — Flow 3: Quotes AI (1-2 sesiones)

Steps `m3.3` → `m3.5` → `m3.2` → `m3.6` → `m3.4`. Files (11):
- `QuoteValidationScene.tsx` (100 LoC)
- `AuditLoopDiagram.tsx` (180 LoC)
- `QuoteVendorUploadScene.tsx` (300 LoC)
- `NonCatalogVendorQuoteDemo.tsx` (500 LoC)
- `QuoteGPReviewScene.tsx` (359 LoC)
- `SIFToCOREPreview.tsx` (270 LoC)
- `QuoteProposalReviewScene.tsx` (420 LoC)
- `QuoteSendProposalScene.tsx` (490 LoC) — most complex
- `QuoteReadinessGate.tsx`, `SIFParserPreview.tsx`, `NonCatalogValidatorTable.tsx`

Pre-flight: `/ds-plan vendor quote PDF upload with extracted fields preview`.

---

## FASE 8 — Audit + docs + screenshots

1. `npm run audit:tokens` (when scripts ported) → 0 violations
2. DS adoption check: grep for `strata-design-system` imports — target >80% chrome reuses DS
3. Browser walk: tour MBI completo navegable de principio a fin
4. Capturar screenshots de los 9 steps + 3 tabs del modo App
5. Update `v3/README.md` + `v3/CLAUDE.md` with final state
6. MCP integration test: `get_component('Card')` from v3 IDE returns spec
7. Final commit: `feat(v3): MBI MVP complete · 9 demo steps · DS-compliant`

---

## Out of scope for MVP

- Other 7 tenants (Acme, COI, OPS, Dupler, Continua, WRG, Leland) — replicate pattern post-MVP
- GenUI artifacts (MBI doesn't use them)
- Page Dashboard general (4575 LoC) — MBI has its own shell
- Inventory / Transactions / MAC pages (not MBI-relevant)
- PDF export demo (html2canvas + jspdf) — defer
- Real auth (login is mock)
- E2E tests
- Polish to demo flow (transitions, micro-animations) — defer
- Promoting custom MBI components to the DS (decide post-MVP, per component)

---

## Critical files to modify in v3

| File | Action |
| --- | --- |
| `demo-2026-strata-v3/src/config/profiles/mbi.ts` | Already ported (FASE 3). |
| `demo-2026-strata-v3/src/config/profiles/mbi-data/*.ts` (18 files) | Already copied (FASE 3). |
| `demo-2026-strata-v3/src/components/shared/` | NEW — copy ReasonDialog + StatusBadge from v1 (audit imports) |
| `demo-2026-strata-v3/src/components/mbi/MBI*Shell.tsx` | NEW — copy 4 shells from v1 |
| `demo-2026-strata-v3/src/components/mbi/MBIOverviewPage.tsx` | NEW — landing |
| `demo-2026-strata-v3/src/components/mbi/MBI[Accounting|Quotes]Page.tsx` | NEW — esqueletos en F4, fill in F5/F6/F7 |

---

## How to verify between fases

After each fase:

```bash
cd demo-2026-strata-v3
npm run typecheck                                  # 0 new errors
npm run dev                                        # http://localhost:5180

# In another terminal:
curl http://localhost:3001/health                  # MCP up
# {"status":"ok","tools":11,...}

# Browser walk: navigate every newly-added page WITHOUT demo active first,
# then click ▶ Demo and walk through every newly-added step.
```

If anything breaks: check `MCP server is running`, `vite alias resolution`, `react dedupe`.

---

## Outstanding DS-side work (no v3 dependency)

| Task | Priority | Notes |
| --- | --- | --- |
| Update P2 stories to reflect foundations reconciliation | LOW | P2 is read-only during v3 MVP. Schedule post-MVP. |
| CLI helper `npx strata-ds plan "..."` | LOW | For non-AI workflows. |
| Auto-sync detection between `templates/` and `.claude/agents/` | LOW | Drift detection script. |
| Cursor `.cursor/rules/` format updates | MEDIUM | If Cursor evolves the format, update template. |
| Promote some custom MBI components to the DS | DECIDE PER COMPONENT | After v3 ships. |

---

**Last updated**: 2026-05-05 · Resume from FASE 4 above.
