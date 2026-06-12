# Strata DS — Lint baseline

Snapshot of where `validate_component_against_rules` (the 30-check linter shared by the MCP tool, CI workflow, and `npm run lint:tsx-diff` CLI) fires across the canonical components today. Used as a reference for prioritising refactors and to confirm that CI checks are calibrated for real signal vs noise.

Last sweep: `find src/components -name '*.tsx' | xargs npx tsx scripts/lint-tsx-diff.mjs`

## Headline

| Metric | Value |
|---|---:|
| Files scanned | **126** |
| Files exempt (palette providers) | 8 |
| Files with at least one violation | 84 |
| Total errors | **390** |
| Total warnings | 383 |
| Total infos | 8 |
| F26-F28 promoted Strata Components — errors | **0** |
| F26-F28 promoted Strata Components — warnings | 40 |

## Palette-provider exemptions

These 8 files exist to map a semantic prop (`color="success"` / `intent="warning"`) to specific raw Tailwind classes. The lint engine still operates over their source, but `lint-tsx-diff.mjs` skips them when bulk-scanning because the raw-color + `dark:` cascades are by design.

```
src/components/application-ui/badge.tsx          (196 raw matches — color palette)
src/components/application-ui/kpi-card.tsx       (121 — intent palette)
src/components/application-ui/info-banner.tsx    (17  — success/warning/error/info palette)
src/components/application-ui/status-badge.tsx   (26  — status palette)
src/components/application-ui/banner.tsx         (14  — variant palette)
src/components/application-ui/priority-badge.tsx (—   — priority palette)
src/components/application-ui/tracking.tsx       (—   — status palette)
src/components/overlays/alert.tsx                (29  — alert palette)
```

To add to this list, edit `PALETTE_PROVIDERS` in `scripts/lint-tsx-diff.mjs`. Do **not** add a file here to silence lint output on a new component — fix the component to use semantic tokens instead.

## Top offenders (after exemptions)

Most of these are legacy Catalyst-derived components that pre-date the strict color-token rules. They are not blocking the merge to main because CI runs the validator against the **diff**, not the full tree — only new violations gate the merge.

| Errors | File |
|---:|---|
| 58 | `src/components/Navbar.tsx` |
| 45 | `src/components/application-ui/action-center/ActionCenter.tsx` |
| 38 | `src/components/application-ui/experiences-navbar.tsx` |
| 26 | `src/components/application-ui/action-center/NotificationItem.tsx` |
| 25 | `src/components/application-ui/shared-order-card.tsx` |
| 25 | `src/components/application-ui/shared-inventory-card.tsx` |
| 20 | `src/components/application-ui/action-center/ChatView.tsx` |
| 16 | `src/components/overlays/dropdown-menu.tsx` |
| 13 | `src/components/application-ui/tabs.tsx` |
| 12 | `src/components/application-ui/shared-catalog-card.tsx` |

## Distribution by rule

| Rule | Count | Notes |
|---|---:|---|
| LAW 5 / anti-pattern 05 (manual `dark:` cascade) | 480 | Most prevalent — Catalyst legacy. |
| anti-pattern 01 (raw Tailwind state color) | 378 | `text-green-500`, `bg-red-100`, etc. inside legacy components. |
| anti-pattern 04 / LAW 4 (forbidden palette) | 220 | `bg-lime-*`, `text-purple-*`, etc. |
| anti-pattern 02 (hardcoded surface) | 186 | `bg-white`, `bg-zinc-900`. |
| rules/06-typography | 70 | Arbitrary text sizes (`text-[10px]`) for dense UI. |
| rules/10-spacing-rhythm + 09-layout-density | 59 | `min-h-[...]`, `max-w-[...]`. |
| LAW 2 (brand-text contrast) | 37 | After the F44 regex fix, this drops to the few real cases. |
| rules/15-accessibility-focus | 26 | Missing `aria-label` on icon-only buttons, `outline-none` without replacement. |
| code-usage Rule 4 (cn() merging) | 17 | String concat / template literal for className. |
| other | <20 | Icons, button labels, etc. |

## F26-F28 Strata Components — clean

The 19 components promoted in the recent arc (data-list-toolbar, filter-pills, view-toggle, strata-top-bar, data-list-table, data-list-card, data-list-card-grid, bulk-action-bar, funnel-stepper, kanban-funnel, file-upload-modal, editable-line-table, document-review-modal + companions, split-pane-review-modal, discrepancy-row + companion) carry **0 errors**.

40 warnings remain across them, dominated by:
- arbitrary text sizes (`text-[10px]` / `text-[11px]`) — intentional for compact list/header density
- arbitrary heights (`min-h-[200px]`, `max-h-[calc(100vh-1.5rem)]`) — modal sizing
- non-breaking spacing helpers (`min-w-[18px]` count badges)

None of these are LAW violations. They are documented density choices.

## How CI uses this

`.github/workflows/validate-tsx-diff.yml` runs `npm run lint:tsx-diff -- --base origin/<base>` on every PR. It:

1. Diffs the PR against its base branch
2. Walks the changed `.tsx` / `.jsx` files (excluding palette providers + test/stories/preview files)
3. Posts a sticky comment on the PR with the full report
4. Fails the job if **any** new error-level violation was introduced

The baseline above (390 pre-existing errors) is grandfathered. Only NEW errors gate the merge.

## How to act on this

- **For a new component**: aim for the F26-F28 standard (0 errors). If you need an exception, justify it in the PR description per the template.
- **For a legacy refactor**: pick a file from the top-offenders table, refactor to semantic tokens, drop the file's lines from this table.
- **For a palette provider**: this file documents the why. Add new ones via `PALETTE_PROVIDERS` in `scripts/lint-tsx-diff.mjs` only when the palette mapping IS the component's primary purpose.

Re-run the sweep after major changes:

```bash
find src/components -name '*.tsx' | xargs npx tsx scripts/lint-tsx-diff.mjs > /tmp/lint-sweep.txt
```
