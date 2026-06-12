# Strata DS — Microcopy and Tone

The words on the screen are part of the design system. Inconsistent button labels, vague error messages, and chatty helper text undermine the visual rules even when every component is correct. This rule defines Strata's voice + a set of canonical patterns for the most-touched copy surfaces.

This rule extends [`rules/04-buttons-and-actions.md`](./04-buttons-and-actions.md), [`rules/12-empty-states.md`](./12-empty-states.md), and [`rules/13-loading-states.md`](./13-loading-states.md).

---

## Voice principles

1. **Direct** — say what happens, not what might happen. Prefer "Saved" over "Your changes have been saved successfully."
2. **Active voice** — "Delete this record" over "This record will be deleted".
3. **Verb + object** in any actionable label — "Save report", "Reject acknowledgement". Never bare verbs.
4. **No filler** — "Please" / "Just" / "Simply" / emojis stay out of UI copy.
5. **No apology** — "Couldn't load" instead of "Oh no, sorry…".
6. **System speaks plainly** — "3 of 25 uploaded" beats "Processing your magnificent batch of documents".

---

## Buttons

### Pattern: verb + object

```tsx
// ✅ Do
<Button>Save quote</Button>
<Button>Approve report</Button>
<Button>Reject acknowledgement</Button>
<Button>Send to review</Button>

// ❌ Don't — bare verb that reads ambiguous when the context scrolls off
<Button>Save</Button>
<Button>Approve</Button>
<Button>Reject</Button>
```

The user must understand the action without seeing the rest of the screen. "Reject" alone could mean rejecting a line item, a discrepancy, or the whole report — be specific.

### Cancel and Back

`Cancel` and `Back` are the canonical exceptions to verb+object — they are intransitive and universally understood. Use them, do not invent variants.

```tsx
// ✅ Do
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Back</Button>

// ❌ Don't
<Button>Cancel changes</Button>
<Button>Go back to list</Button>
```

### Destructive actions

Destructive labels must surface the consequence and the noun:

```tsx
// ✅ Do
<Button variant="destructive">Delete quote</Button>
<Button variant="destructive">Reject acknowledgement</Button>

// ❌ Don't
<Button variant="destructive">Delete</Button>
<Button variant="destructive">Reject</Button>
```

### Loading state — present continuous

```tsx
// ✅ Do
<Button loading>Saving…</Button>
<Button loading>Uploading…</Button>

// ❌ Don't
<Button loading>Save</Button>
<Button loading>Please wait</Button>
```

---

## Error messages

Error copy must answer three questions: **what happened** · **why** · **what to do**.

```tsx
// ✅ Do
<FieldError>
  Couldn't save — the quote number is already used by SO-1042.
  Try a different number or edit the existing quote.
</FieldError>

// ❌ Don't — what happened, no why, no remedy
<FieldError>Save failed.</FieldError>

// ❌ Don't — technical detail user cannot act on
<FieldError>HTTP 409: Conflict (constraint violation)</FieldError>
```

### Inline field errors

```tsx
// ✅ Do — specific, actionable
<FieldError>Email must include a domain (example@company.com)</FieldError>

// ❌ Don't — generic
<FieldError>Invalid email</FieldError>
```

### System-level errors

```tsx
// ✅ Do
<Alert variant="destructive">
  <AlertTitle>Couldn't load quotes</AlertTitle>
  <AlertDescription>
    The server didn't respond. Check your connection and try again.
  </AlertDescription>
  <Button variant="outline" onClick={refetch}>Retry</Button>
</Alert>

// ❌ Don't
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

---

## Helper text and descriptions

### Helper text — describe expected format

```tsx
// ✅ Do
<FieldDescription>Format: SO-####### (e.g. SO-2604102)</FieldDescription>
<FieldDescription>We'll email you when the upload finishes.</FieldDescription>

// ❌ Don't — restate the label
<FieldLabel>Quote number</FieldLabel>
<FieldDescription>Enter the quote number for this record.</FieldDescription>
```

### Empty state descriptions

```tsx
// ✅ Do
<EmptyState
  title="No quotes match these filters"
  description="Try clearing one or more filters to see more results."
/>

// ❌ Don't
<EmptyState
  title="Empty"
  description="Sorry, we couldn't find anything for you right now."
/>
```

---

## Confirmations and success

Be brief. The user knows what they did — confirm and move on.

```tsx
// ✅ Do
<Toast>Quote saved.</Toast>
<Toast>5 documents uploaded.</Toast>

// ❌ Don't
<Toast>Your quote has been saved successfully to the database.</Toast>
<Toast>Great job! Your documents have all been uploaded.</Toast>
```

---

## Numbers and units

Always include the unit. "5" alone is meaningless.

```tsx
// ✅ Do
<Stat>5 quotes</Stat>
<Stat>$4,159.12</Stat>
<Stat>3 of 25 uploaded</Stat>

// ❌ Don't
<Stat>5</Stat>
<Stat>4159.12</Stat>
<Stat>3 / 25</Stat>
```

For currency, always use the symbol prefix + thousands separator + 2 decimals (US locale default in Strata):

```tsx
// ✅ Do
$4,159.12
$12,000.00

// ❌ Don't
4159.12
$4159
$4,159
```

---

## Dates and times

Use relative dates for recent items, absolute for older.

| Age | Format |
|---|---|
| < 1 minute | "Just now" |
| < 1 hour | "5 minutes ago" |
| < 24 hours | "3 hours ago" |
| < 7 days | "Yesterday" / "2 days ago" |
| < 1 year | "Mar 28" |
| ≥ 1 year | "Mar 28, 2025" |

```tsx
// ✅ Do
<Time>5 minutes ago</Time>
<Time>Mar 28, 2025</Time>

// ❌ Don't
<Time>2025-03-28T14:35:00.000Z</Time>     {/* technical */}
<Time>3/28/25</Time>                      {/* ambiguous */}
```

---

## Status labels

Status labels are nouns or adjectives, capitalized, single-word when possible.

```tsx
// ✅ Do
<StatusBadge>Pending</StatusBadge>
<StatusBadge>Reviewed</StatusBadge>
<StatusBadge>Archived</StatusBadge>

// ❌ Don't
<StatusBadge>pending review</StatusBadge>
<StatusBadge>NEEDS_ATTENTION</StatusBadge>
<StatusBadge>is_complete</StatusBadge>
```

---

## Tooltips

Tooltips give context that does not fit inline. Keep to 1 sentence (max 2). Never include actions inside a tooltip.

```tsx
// ✅ Do
<Tooltip>The match score combines field similarity and AI confidence.</Tooltip>

// ❌ Don't — multi-paragraph
<Tooltip>
  This is the match score. It is calculated by combining several factors
  including field similarity, AI confidence, and historical match patterns.
  You can read more about how this works in our documentation.
</Tooltip>

// ❌ Don't — action inside tooltip
<Tooltip><Button>Open settings</Button></Tooltip>
```

---

## Microcopy do/don't quick table

| ❌ Don't | ✅ Do |
|---|---|
| "Please save your work" | "Save quote" |
| "Oh no, something went wrong!" | "Couldn't load — check your connection and retry." |
| "Submit" | "Submit application" / "Submit for review" |
| "OK" | "Continue" / "Approve" / "Save" (be specific) |
| "Just click here to start" | "Upload first quote" |
| "Your data is being processed" | "Processing 3 of 25 documents…" |
| Emojis in interactive UI | Plain text |
| All-caps for emphasis | Bold or color emphasis, never all-caps |

---

## Source files

- `governance/rules/04-buttons-and-actions.md` — labels for buttons
- `governance/rules/12-empty-states.md` — empty-state copy
- `governance/rules/13-loading-states.md` — loading-state copy
