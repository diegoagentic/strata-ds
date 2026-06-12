<!--
PR template for the Strata Design System repo.
- Fill in the sections that apply; delete the ones that don't.
- The 'DS rules check' section below is required for any PR that touches
  src/components/ or src/app/. The CI runs validate_component_against_rules
  on changed TSX files; a green check there is the bar.
-->

## What changed

<!--
One-liner per change. Reference governance rules by slug where applicable
(e.g., "moves the Cancel button left of the primary CTA per rules/04-buttons-and-actions").
-->

-

## Why

<!--
The motivation. If this fixes a corrected pattern surfaced by the
corrections-mining diagnostic, link the bucket
(e.g., 'fixes Modal/overlay/dialog structure forensic from F39').
-->

## Screenshots / before-after

<!-- For UI changes. -->

## DS rules check

<!--
The CI workflow `.github/workflows/validate-tsx-diff.yml` runs
`validate_component_against_rules` against every changed TSX file in this
PR. If you ran it locally too, drop the report here.
-->

- [ ] Ran `npm run lint:tsx-diff` locally and reviewed the output
- [ ] No 'error' severity violations in the diff
- [ ] Any 'warning' / 'info' violations are intentional (justify below)

### Intentional warnings / infos

<!-- e.g., "narrow-center-column on the legal docs page is correct — long-form prose context." -->

## Governance / rules touched

<!--
If this PR adds or updates a rule (.md file in governance/), tick here so the
HTML guide regenerates on merge:
-->

- [ ] Edited a .md in `governance/` (HTML guide will rebuild via `.github/workflows/publish-rules-guide.yml`)
- [ ] Touched a component in `src/components/` exposed by the DS
- [ ] Touched the MCP server in `src/mcp-server/`
- [ ] None of the above
