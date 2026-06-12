# Strata DS — Empty States

An empty state is what the user sees when there is nothing to show — no items in a list, no results for a filter, no data in a chart, no notifications. It is one of the most-touched-yet-most-neglected screens in any product. A good empty state explains **why** the surface is empty, **what** the user can do about it, and **how** to get started.

This rule extends [`rules/04-buttons-and-actions.md`](./04-buttons-and-actions.md) (CTAs) and [`rules/14-microcopy-tone.md`](./14-microcopy-tone.md) (voice).

---

## The four empty-state variants

| Variant | Trigger | Required elements |
|---|---|---|
| **Fresh** | First-time view; user has not created anything yet | Icon · headline · 1-sentence explanation · primary CTA |
| **Filtered** | Filter or search returned nothing | Icon · "no results" headline · suggestion to relax filters |
| **Loading-error** | Network or backend failed | Warning icon · cause · retry CTA |
| **Permission** | User does not have access | Lock icon · cause · request-access CTA or contact-admin link |

```tsx
// ✅ Do — distinct treatment per variant
{isError ? <EmptyError onRetry={refetch} /> :
 isFiltered ? <EmptyFiltered onClearFilters={clear} /> :
 noItems ? <EmptyFresh onCreate={openCreateModal} /> :
 <List items={items} />}

// ❌ Don't — same generic "No data" for every case
{items.length === 0 && <div>No data</div>}
```

---

## Always include a CTA

The empty state must offer a next step. The user landed here for a reason — the empty state should help them act.

```tsx
// ✅ Do — clear CTA per variant
<EmptyState
  icon={<InboxIcon />}
  title="No quotes yet"
  description="Upload a quote PDF to extract fields and line items."
  action={<Button>Upload first quote</Button>}
/>

// ❌ Don't — empty state with no next step
<EmptyState
  icon={<InboxIcon />}
  title="No quotes yet"
/>
```

The CTA changes per variant:

- **Fresh** → "Create your first X", "Upload a Y", "Get started"
- **Filtered** → "Clear filters", "Reset search"
- **Loading-error** → "Retry", "Refresh"
- **Permission** → "Request access", "Contact admin"

---

## Microcopy — empathetic but not chatty

```tsx
// ✅ Do — direct, action-oriented
<Title>No quotes match these filters</Title>
<Description>Try clearing one or more filters to see more results.</Description>

// ❌ Don't — too friendly / chatty
<Title>Oh no, looks like we couldn't find any quotes! 😅</Title>
<Description>Don't worry, this happens sometimes. Why not try a different search?</Description>

// ❌ Don't — too cold / technical
<Title>Result set: 0 records</Title>
<Description>Query returned no matches.</Description>
```

The tone is calm + helpful. Not apologetic, not corporate.

---

## Illustration vs icon vs nothing

| Surface size | Recommended visual |
|---|---|
| Full page | Optional illustration (60×60px max) or large icon (48px) |
| Card / panel | Small icon (24-32px) — no illustration |
| Inline / small | No icon — text only |

```tsx
// ✅ Full-page empty
<EmptyState size="lg">
  <Icon size={48} className="text-muted-foreground/40" />
  <Heading>No quotes yet</Heading>
  ...
</EmptyState>

// ✅ Card-level empty
<EmptyState size="sm" className="py-12">
  <Icon size={24} className="text-muted-foreground/60" />
  ...
</EmptyState>

// ✅ Inline empty (table cell, dropdown body)
<div className="text-sm text-muted-foreground text-center py-4">
  No results
</div>
```

Never use a stock-photo-like illustration. The DS does not ship them and they conflict with the brand's minimal feel.

---

## Filtered empty — show the user what they searched

When the empty state comes from a filter, surface the active filters so the user knows what to relax.

```tsx
// ✅ Do
<EmptyState
  icon={<SearchIcon />}
  title="No documents match these filters"
  description={
    <>
      Active filters: <Pill>Status: Pending</Pill> <Pill>Vendor: NorthPoint</Pill>
    </>
  }
  action={<Button onClick={clearFilters}>Clear filters</Button>}
/>

// ❌ Don't — generic "no results" with no hint
<div className="text-sm text-muted-foreground">No results.</div>
```

---

## Error empty state — actionable cause

```tsx
// ✅ Do
<EmptyState
  icon={<AlertTriangle className="text-destructive" />}
  title="Couldn't load quotes"
  description="The server didn't respond. Check your connection and try again."
  action={<Button variant="outline" onClick={refetch}>Retry</Button>}
/>

// ❌ Don't — bare error code or stack trace
<div>Error: ECONNREFUSED</div>
```

If the cause is a known recoverable error (rate limit, auth expired), tell the user exactly what to do. If it is unknown, offer Retry and a link to support.

---

## Surface hierarchy of empty states

The empty state respects the surface it sits on. On `bg-card`, the empty state body is `bg-muted/30` or transparent (not another card). On `bg-background`, it is unstyled (just content).

```tsx
// ✅ Card-bound empty — softer background to read as "inner empty"
<Card>
  <EmptyState className="bg-muted/30 py-10 rounded-lg">...</EmptyState>
</Card>

// ✅ Page-bound empty — no extra container
<PageLayout>
  <EmptyState className="py-20">...</EmptyState>
</PageLayout>
```

---

## Anti-patterns

| ❌ | ✅ |
|---|---|
| `"No data"` as the only message | Title + 1-sentence reason + CTA |
| Same empty state for fresh / filtered / error | Distinct copy + icon + action per variant |
| Apologetic copy ("Oh no, we couldn't…") | Calm, direct ("No quotes match these filters") |
| Stock illustrations | DS icon at the appropriate size, or no icon |
| Hide the surface entirely (no list at all) | Empty state is the state — keep the page chrome around it |
| Tiny "no results" text in the center of a huge surface | Full empty-state block at the size of the surface |

---

## Source files

- `governance/rules/04-buttons-and-actions.md` — CTAs used by empty states
- `governance/rules/14-microcopy-tone.md` — voice for the headline + description
- `Strata Design System/strata-ds/src/components/data-visualization/empty-state.tsx`
