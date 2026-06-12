# Strata DS — Loading and Skeleton States

Loading states communicate what is happening, how long it will take, and (if possible) why. Picking the right pattern at the right time is the difference between a UI that feels responsive and one that feels broken.

This rule extends [`rules/04-buttons-and-actions.md`](./04-buttons-and-actions.md) (button loading variant).

---

## Three timing thresholds

| Delay | Pattern | Reasoning |
|---|---|---|
| **<200ms** | None (or instant feedback) | Below human perception of delay — no indicator needed |
| **200ms–1s** | Inline spinner or button loading state | User notices but expects fast completion |
| **1s–3s** | Skeleton or progress indicator | User waits — show structure to set expectations |
| **>3s** | Progress with explanation + cancel | User must know what is happening and have an escape hatch |

```tsx
// ✅ <200ms — no indicator
const handleSelect = (option) => setSelected(option);

// ✅ 200ms-1s — button loading
const handleSubmit = async () => {
  setSubmitting(true);
  await submitForm();   // ~500ms
  setSubmitting(false);
};
<Button loading={submitting}>Save</Button>

// ✅ 1s-3s — skeleton on the panel
{isFetching ? <CardSkeleton /> : <Card>{data}</Card>}

// ✅ >3s — progress + cancel
<UploadProgress percent={45} onCancel={abort} message="Uploading 12 of 25 files…" />
```

---

## Skeleton vs spinner

### Skeleton — for structured content

Use a skeleton when the loading content has a predictable shape (a card, a table row, a paragraph). The skeleton must match the final layout dimensions so the page does not jump when content loads.

```tsx
// ✅ Do — skeleton matches the final card structure
{isLoading ? (
  <Card>
    <Skeleton className="h-5 w-32 mb-2" />     {/* title placeholder */}
    <Skeleton className="h-3 w-full mb-1" />   {/* line 1 */}
    <Skeleton className="h-3 w-3/4" />         {/* line 2 */}
  </Card>
) : (
  <Card>
    <h3>{data.title}</h3>
    <p>{data.summary}</p>
  </Card>
)}

// ❌ Don't — spinner in the middle of an empty card
{isLoading ? <Card><Spinner /></Card> : <Card>{data}</Card>}
```

### Spinner — for indeterminate / short waits

Spinners are for actions where the user knows what they triggered: a button click, a form submit, a manual refresh. They are NOT for first paint.

```tsx
// ✅ Do — button spinner during submit
<Button loading={submitting}>Save</Button>

// ✅ Do — refresh action spinner
<IconButton aria-label="Refresh">
  {refreshing ? <Spinner /> : <RefreshIcon />}
</IconButton>

// ❌ Don't — center the page on a spinner during first paint
{isLoading ? <CenteredSpinner /> : <Dashboard data={data} />}
```

---

## Prevent layout shift (CLS)

The skeleton must occupy the same space as the final content. Layout shift is one of the most disorienting UX problems.

```tsx
// ✅ Do — skeleton has explicit dimensions
<Skeleton className="h-8 w-64" />        {/* matches the title's actual size */}
<Skeleton className="h-[420px] w-full" /> {/* matches the chart's final size */}

// ❌ Don't — skeleton with no size constraint
<Skeleton />                              {/* collapses to 0 then jumps */}
```

---

## Disabled vs loading

Disabled and loading are NOT the same.

| State | Visual | Meaning |
|---|---|---|
| **Disabled** | Greyed out, no spinner | Action cannot be taken (validation failed, dependency missing) |
| **Loading** | Spinner inline, label may change | Action is in progress |

```tsx
// ✅ Do
<Button disabled={!isValid}>Save</Button>           {/* invalid — cannot save */}
<Button loading={isSaving}>Save</Button>            {/* saving in progress */}
<Button loading={isSaving} disabled>Saving…</Button> {/* both — disable to prevent double-fire */}

// ❌ Don't — loading without disabled (allows double-submit)
<Button loading={isSaving}>Save</Button>  {/* still clickable, fires twice */}
```

Always disable a button while it is loading so the user cannot double-fire the action.

---

## Long operations — progress + cancel

Above 3 seconds, the user needs to know:

1. **What is happening** (uploading, processing, generating)
2. **How far along** (12 of 25, 45%, 30 seconds remaining)
3. **How to escape** (cancel, abort, hide)

```tsx
// ✅ Do — explicit progress + cancel
<UploadProgress
  current={12}
  total={25}
  percent={48}
  onCancel={abortUpload}
  message="Uploading documents…"
/>

// ❌ Don't — indeterminate spinner for 30 seconds
<Spinner />
```

For operations where progress cannot be measured (server-side processing), show an estimated time and a cancel button:

```tsx
<ProcessingNotice
  message="Analyzing 25 documents — usually takes 30-60 seconds"
  onCancel={abortJob}
/>
```

---

## Multi-step / staged loading

When a page loads multiple data sources, show them progressively. Do not block the whole page on the slowest call.

```tsx
// ✅ Do — render each section as its data arrives
<PageLayout>
  <KPIRow data={kpiData ?? null} loading={kpiLoading} />
  <Chart data={chartData ?? null} loading={chartLoading} />
  <RecentActivity data={activityData ?? null} loading={activityLoading} />
</PageLayout>

// ❌ Don't — block everything on the slowest fetch
{isLoading ? <FullPageSpinner /> : <PageLayout>...</PageLayout>}
```

---

## Loading inside a button

Strata `<Button loading>` swaps the icon (or prepends one) for a spinner, keeps the label text, and disables clicks.

```tsx
// ✅ Do
<Button loading={isSubmitting}>Save</Button>            {/* default text stays visible */}
<Button loading={isSubmitting}>{isSubmitting ? 'Saving…' : 'Save'}</Button>   {/* optional label swap */}

// ❌ Don't
<Button>{isSubmitting && <Spinner />} Save</Button>     {/* manual; loses focus + disable */}
```

---

## Anti-patterns

| ❌ | ✅ |
|---|---|
| Spinner during first paint | Skeleton matching final layout |
| Skeleton with no explicit dimensions (causes layout shift) | Skeleton with `h-* w-*` matching real content |
| Loading button without disabled (allows double-fire) | `loading={x} disabled={x}` both set |
| Indeterminate spinner > 3 seconds | Progress + cancel |
| Block the whole page on the slowest fetch | Progressive loading per section |
| Disabled button with spinner (looks broken) | Disabled = greyed, no spinner |

---

## Source files

- `governance/rules/04-buttons-and-actions.md` — button loading variant
- `Strata Design System/strata-ds/src/components/application-ui/skeleton.tsx`
- `Strata Design System/strata-ds/src/components/application-ui/progress.tsx`
- `Strata Design System/strata-ds/src/components/application-ui/button.tsx` — loading prop
