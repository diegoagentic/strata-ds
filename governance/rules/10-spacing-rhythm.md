# Strata DS — Spacing and Vertical Rhythm

Consistent spacing is what makes a design system feel unified. Inconsistent spacing is what makes a screen feel cluttered or undermined even when every component is technically correct. Strata uses an opinionated spacing scale and a baseline vertical rhythm that all components honor.

This rule extends [`rules/06-typography.md`](./06-typography.md) and [`rules/09-layout-density.md`](./09-layout-density.md).

---

## The 4-point spacing scale

Every gap, padding, and margin in Strata must be a step on the 4-point scale: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96**. Tailwind classes: `1 · 2 · 3 · 4 · 6 · 8 · 12 · 16 · 24`.

```tsx
// ✅ Do — values from the scale
<div className="p-4">     {/* 16px */}
<div className="gap-3">   {/* 12px */}
<div className="mt-8">    {/* 32px */}

// ❌ Don't — arbitrary or off-scale values
<div className="p-[18px]">
<div className="gap-[14px]">
<div style={{ marginTop: 28 }}>
```

| Step | Tailwind | Use case |
|---|---|---|
| **4** | `1` | Internal icon padding · tight badge insets |
| **8** | `2` | Compact button padding · small gap |
| **12** | `3` | Default gap between siblings · compact card padding |
| **16** | `4` | Default card padding · default vertical section spacing |
| **24** | `6` | Section padding · row spacing in dense lists |
| **32** | `8` | Section separation · default page padding |
| **48** | `12` | Major section break |
| **64** | `16` | Hero padding · top-level page margin |
| **96** | `24` | Marketing pages only |

---

## Vertical rhythm — section spacing

Sections inside a card or page use a consistent rhythm. Default to `space-y-6` (24px) between sibling sections and `space-y-3` (12px) within a section.

```tsx
// ✅ Do
<PageLayout>
  <div className="space-y-8">                {/* 32px between major sections */}
    <section className="space-y-3">          {/* 12px within a section */}
      <Heading>Quote info</Heading>
      <FieldValueRow ... />
      <FieldValueRow ... />
    </section>
    <section className="space-y-3">
      <Heading>Vendor</Heading>
      <FieldValueRow ... />
    </section>
  </div>
</PageLayout>

// ❌ Don't — random spacing between siblings
<section>
  <Heading>Quote info</Heading>
  <div className="mt-7">...</div>
  <div className="mt-3">...</div>
  <div className="mt-10">...</div>
</section>
```

---

## Padding consistency by surface level

Each surface level has a default padding:

| Surface | Default padding | Tailwind |
|---|---|---|
| Page root (Level 0) | 48px desktop · 24px mobile | `p-6 lg:p-12` |
| Card / panel (Level 1) | 24px | `p-6` |
| Compact card | 16px | `p-4` |
| Inner section (Level 2) | 16px | `p-4` |
| Modal body | 24px | `p-6` |
| Modal header / footer | 16px vertical, 24px horizontal | `px-6 py-4` |

```tsx
// ✅ Do
<Card className="p-6">                    {/* Level 1 */}
  <section className="bg-muted p-4">      {/* Level 2 */}
    ...
  </section>
</Card>

// ❌ Don't — same padding at every level (flattens the hierarchy)
<Card className="p-4">
  <section className="bg-muted p-4">
    ...
  </section>
</Card>
```

---

## Gap conventions

Gaps describe how siblings sit next to each other. Stick to these by intent:

| Gap | Tailwind | Use case |
|---|---|---|
| **4** | `gap-1` | Icon + label inside a single button or badge |
| **8** | `gap-2` | Adjacent buttons in a button group |
| **12** | `gap-3` | Form field siblings · table row siblings |
| **16** | `gap-4` | Default grid gap · siblings in a row |
| **24** | `gap-6` | Section grid · large grid breakpoint |

```tsx
// ✅ Do
<ButtonGroup className="gap-2">
  <Button>Cancel</Button>
  <Button>Save</Button>
</ButtonGroup>

<Grid className="grid-cols-3 gap-6">
  <KPICard />
  <KPICard />
  <KPICard />
</Grid>

// ❌ Don't — same gap for unrelated relationships
<div className="gap-6">                       {/* too wide for adjacent buttons */}
  <Button>Cancel</Button>
  <Button>Save</Button>
</div>
```

---

## Margin between text and following element

| Text element | Margin to next | Tailwind |
|---|---|---|
| h1 → paragraph | 12px | `mb-3` |
| h2 → content | 12px | `mb-3` |
| h3 → content | 8px | `mb-2` |
| Paragraph → paragraph | 16px | `mb-4` (or `space-y-4` on parent) |
| Eyebrow → h1 | 6px | `mb-1.5` |

```tsx
// ✅ Do
<header className="mb-6">
  <p className="text-xs font-bold uppercase text-muted-foreground mb-1.5">Tool</p>
  <h1 className="text-4xl font-extrabold mb-3">Quote Converter</h1>
  <p className="text-base text-muted-foreground">Drag-and-drop a quote PDF…</p>
</header>
```

---

## Anti-patterns

| ❌ | ✅ |
|---|---|
| `mt-[18px]`, `gap-[14px]`, `p-[20px]` | Stick to the 4-point scale |
| Same padding at Level 0, 1, 2 (flat hierarchy) | Step the padding per surface level |
| `<div className="mb-7">` (arbitrary one-off) | Use `space-y-*` on the parent for sibling rhythm |
| Section spacing varies per page | `space-y-8` (or `space-y-6`) consistent across views |
| Gap-6 between adjacent buttons | Gap-2 between button siblings |

---

## Source files

- `governance/rules/06-typography.md` — text hierarchy interacts with vertical rhythm
- `governance/rules/09-layout-density.md` — density modes reuse the spacing scale
- `Strata Design System/strata-ds/src/styles/tokens/variables.css` — token-level spacing
