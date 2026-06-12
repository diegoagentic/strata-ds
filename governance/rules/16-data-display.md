# Strata DS — Data Display Patterns

Tables, lists, and dashboards are where users do most of their work in Strata. They demand consistent decisions about alignment, sort affordances, density, pagination, and how to surface empty/loading/error states inline. This rule codifies the canonical patterns so every data surface looks and behaves the same.

This rule extends [`rules/09-layout-density.md`](./09-layout-density.md), [`rules/12-empty-states.md`](./12-empty-states.md), and [`rules/13-loading-states.md`](./13-loading-states.md).

---

## Tables

### Column alignment by data type

| Data type | Alignment | Rationale |
|---|---|---|
| Text (name, description) | Left | Reading direction |
| Number / currency | Right | Decimal alignment |
| Status / badge | Left or center | Visual scanning |
| Action column | Right | Out of the way until needed |
| Icon-only column | Center | Symmetric look |

```tsx
// ✅ Do
<ColumnDef field="name"   align="left"   />
<ColumnDef field="total"  align="right" cell={(r) => <Money value={r.total} />} />
<ColumnDef field="status" align="left"  cell={(r) => <StatusBadge>{r.status}</StatusBadge>} />
<ColumnDef field="actions" align="right" />

// ❌ Don't — currency left-aligned (impossible to scan)
<ColumnDef field="total" align="left" cell={(r) => `$${r.total}`} />
```

### Tabular numerals on all numeric columns

```tsx
// ✅ Do
<td className="tabular-nums text-right">$4,159.12</td>

// ❌ Don't — proportional digits cause shaky column widths
<td className="text-right">$4,159.12</td>
```

### Sortable column headers

Sortable headers must show:

1. The label
2. A subtle sort affordance (↑/↓ arrow or chevron)
3. A clear active state (filled arrow, highlighted background)

```tsx
// ✅ Do
<TableHead
  onClick={() => toggleSort('total')}
  className="cursor-pointer hover:bg-muted/40"
>
  <div className="inline-flex items-center gap-1">
    Total
    {sortBy === 'total'
      ? (sortDir === 'asc' ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />)
      : <ChevronsUpDown className="size-3 text-muted-foreground/50" />}
  </div>
</TableHead>

// ❌ Don't — clickable header with no visual affordance
<TableHead onClick={() => toggleSort('total')}>Total</TableHead>
```

### Row hover and selection

Hover and selected states are distinct.

```tsx
// ✅ Do
<TableRow
  data-state={selected ? 'selected' : undefined}
  className="hover:bg-muted/40 data-[state=selected]:bg-primary/10"
>
  ...
</TableRow>
```

### Sticky header on long tables

For tables longer than the viewport, the header stays sticky.

```tsx
// ✅ Do
<table>
  <thead className="sticky top-0 bg-card z-10">
    <tr>...</tr>
  </thead>
  <tbody>...</tbody>
</table>
```

---

## Inline empty / loading / error rows

Tables have their own version of empty / loading / error states — rendered inline, spanning all columns.

```tsx
// ✅ Empty
<TableRow>
  <TableCell colSpan={columns.length} className="text-center py-10 text-sm text-muted-foreground">
    No quotes match these filters.
  </TableCell>
</TableRow>

// ✅ Loading (skeleton rows matching final column count)
{Array.from({ length: 5 }).map((_, i) => (
  <TableRow key={i}>
    {columns.map((col, j) => (
      <TableCell key={j}><Skeleton className="h-4 w-full" /></TableCell>
    ))}
  </TableRow>
))}

// ✅ Error
<TableRow>
  <TableCell colSpan={columns.length} className="py-10">
    <div className="flex flex-col items-center gap-3">
      <AlertTriangle className="size-6 text-destructive" />
      <span className="text-sm">Couldn't load quotes.</span>
      <Button variant="outline" onClick={refetch}>Retry</Button>
    </div>
  </TableCell>
</TableRow>
```

---

## Lists (non-tabular)

For collections without uniform columns (recent activity, notifications, search results), use a list with consistent row structure.

### Standard list item

```tsx
// ✅ Do
<li className="flex items-start gap-3 py-3 hover:bg-muted/40 px-3 -mx-3 rounded-md transition-colors">
  <Icon className="size-5 text-muted-foreground shrink-0 mt-0.5" />
  <div className="flex-1 min-w-0">
    <p className="text-sm font-semibold truncate">{title}</p>
    <p className="text-xs text-muted-foreground truncate">{meta}</p>
  </div>
  <time className="text-xs text-muted-foreground shrink-0">{when}</time>
</li>
```

### Density modes

Apply [`rules/09-layout-density.md`](./09-layout-density.md): comfortable for hero lists (`py-3`), compact for dense lists (`py-1.5`).

---

## Pagination vs infinite scroll

| Pattern | Use when | Don't use when |
|---|---|---|
| **Pagination** | Tabular data, comparison, jump-to-page is useful | Infinite "feed" content |
| **Load more** | Activity feeds, notifications, short additional batches | The user needs to find a specific record (lose position on reload) |
| **Infinite scroll** | Social feeds, image grids — Strata rarely uses | Tabular data (cannot deep-link) |

```tsx
// ✅ Do — pagination for record lists
<Pagination>
  <PaginationPrev disabled={page === 1} />
  <PaginationItem>{page} of {totalPages}</PaginationItem>
  <PaginationNext disabled={page === totalPages} />
</Pagination>

// ✅ Do — load more for activity feed
<Button variant="outline" onClick={loadMore}>Load 25 more</Button>
```

### Always show "N of M" or "Showing X-Y of Z"

```tsx
// ✅ Do
<TableCaption>Showing 1-25 of 487 quotes</TableCaption>

// ❌ Don't
<TableCaption>Some quotes</TableCaption>
```

---

## Bulk selection and bulk actions

When a list supports multi-select, use a header checkbox + per-row checkbox + a `<BulkActionBar>` that appears when ≥1 row is selected.

```tsx
// ✅ Do
<BulkActionBar
  selectedCount={selected.size}
  itemNoun="quote"
  onClearSelection={() => setSelected(new Set())}
  actions={
    <>
      <Button variant="outline" size="sm"><Download className="size-3.5 mr-1.5" /> Export</Button>
      <Button variant="destructive" size="sm"><Trash className="size-3.5 mr-1.5" /> Delete</Button>
    </>
  }
/>

// ❌ Don't — bulk actions live in the page header all the time (even with 0 selected)
<PageHeader>
  <Button>Export selected</Button>
  <Button>Delete selected</Button>
</PageHeader>
```

---

## Filtering

### Filter pills above the list

For status-style filters with mutually exclusive options, use `<FilterPills>`.

```tsx
// ✅ Do
<FilterPills
  activeKey={status}
  onChange={setStatus}
  options={[
    { key: 'all',      label: 'All',      count: 487 },
    { key: 'pending',  label: 'Pending',  count: 12 },
    { key: 'reviewed', label: 'Reviewed', count: 462 },
    { key: 'archived', label: 'Archived', count: 13 },
  ]}
/>
```

### Filter pills show counts

Always show counts per filter. Counts both confirm the filter does something and help the user choose where to look.

### Persistent active-filter chips

For more complex filtering (multiple dimensions), show active filters as removable chips above the list.

```tsx
<ActiveFilters>
  <Chip onRemove={() => clearFilter('vendor')}>Vendor: NorthPoint</Chip>
  <Chip onRemove={() => clearFilter('after')}>After: Mar 1, 2025</Chip>
  <button onClick={clearAll} className="text-xs underline">Clear all</button>
</ActiveFilters>
```

---

## Dashboards

### KPI row first, charts second, lists third

The visual scan order is: high-level metrics → trends → detail.

```tsx
<PageLayout>
  <KPIRow>
    <KPICard label="Quotes (30d)" value="487" delta="+12%" />
    <KPICard label="Approved" value="462" />
    <KPICard label="Pending" value="12" />
    <KPICard label="Rejected" value="13" />
  </KPIRow>
  <ChartGrid>
    <BarChart />
    <LineChart />
  </ChartGrid>
  <Table>...</Table>
</PageLayout>
```

### KPI cards — always show context

A KPI without context (delta, comparison period, target) is just a number. Always pair the value with a small delta or "vs last period".

```tsx
// ✅ Do
<KPICard
  label="Quotes (30d)"
  value="487"
  delta={{ value: '+12.5%', tone: 'success' }}
  caption="vs previous 30 days"
/>

// ❌ Don't — bare number
<KPICard label="Quotes" value="487" />
```

---

## Anti-patterns

| ❌ | ✅ |
|---|---|
| Currency left-aligned | Currency right-aligned with `tabular-nums` |
| Sortable headers with no affordance | ChevronUp / Down / ChevronsUpDown indicator |
| Empty state inside a card with no message | `colSpan={cols} text-center` empty row with reason + CTA |
| `<Spinner>` centered in an empty table | Skeleton rows matching the column count |
| Bulk action bar always visible (even with 0 selected) | `<BulkActionBar hideWhenEmpty>` from the DS |
| Pagination with no total ("Page 3 of ?") | "Showing 51-75 of 487" |
| Filter pills with no counts | Always include counts per pill |
| Mixed density modes on the same page | One density per surface; compact for sub-panels |

---

## Source files

- `governance/rules/09-layout-density.md` — density modes
- `governance/rules/12-empty-states.md` — empty-state copy and CTAs
- `governance/rules/13-loading-states.md` — skeleton sizing
- `Strata Design System/strata-ds/src/components/application-ui/data-list-table.tsx`
- `Strata Design System/strata-ds/src/components/application-ui/data-list-card.tsx`
- `Strata Design System/strata-ds/src/components/application-ui/filter-pills.tsx`
- `Strata Design System/strata-ds/src/components/application-ui/bulk-action-bar.tsx`
