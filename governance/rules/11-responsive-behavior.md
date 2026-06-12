# Strata DS — Responsive Behavior

Strata is built desktop-first because that is where the work happens. But every layout must adapt gracefully to smaller viewports — phones for quick lookups, tablets for review. This rule defines the breakpoints, the content-priority hierarchy, and the canonical patterns for how layouts reflow.

This rule extends [`rules/09-layout-density.md`](./09-layout-density.md).

---

## Breakpoints

Strata uses the Tailwind defaults:

| Breakpoint | Min width | Tailwind | Target devices |
|---|---|---|---|
| **base** | 0 | (no prefix) | Phones portrait (320-639px) |
| **sm** | 640px | `sm:` | Phones landscape · small tablets |
| **md** | 768px | `md:` | Tablets portrait |
| **lg** | 1024px | `lg:` | Tablets landscape · small laptops |
| **xl** | 1280px | `xl:` | Default desktop |
| **2xl** | 1536px | `2xl:` | Large desktop · wide monitors |

**Primary target**: `lg` and above. Mobile (`base` / `sm`) is a graceful fallback, not the design target.

---

## Content prioritization

When the viewport shrinks, you must decide what to **keep visible**, what to **stack**, what to **collapse**, and what to **hide**. Always in that order — never hide content the user needs to complete the task.

| Priority | Pattern | When |
|---|---|---|
| 1. Keep | Same layout, smaller padding | Difference < 200px |
| 2. Stack | Side-by-side becomes vertical | Two columns no longer fit |
| 3. Collapse | Expanded panel becomes accordion | Deep nested information |
| 4. Hide | Decorative content disappears | Only when content is not load-bearing |

```tsx
// ✅ Do — stack two columns on mobile
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
  <Main />
  <Sidebar />
</div>

// ✅ Do — collapse sidebar to accordion on mobile
<div className="space-y-4">
  <Main />
  <details className="lg:hidden">
    <summary>Show details</summary>
    <Sidebar />
  </details>
  <Sidebar className="hidden lg:block" />
</div>

// ❌ Don't — hide critical content because mobile is hard
<Sidebar className="hidden lg:block">
  {/* sidebar with required filters — mobile users cannot filter */}
</Sidebar>
```

---

## Stack vs reflow vs hide

### Stack — convert horizontal to vertical

```tsx
// ✅ Do
<div className="flex flex-col lg:flex-row gap-4">
  <Item />
  <Item />
  <Item />
</div>

// Tables stack on mobile via responsive utility classes:
<table className="hidden md:table">...</table>
<MobileList className="md:hidden">...</MobileList>
```

### Reflow — same content, different arrangement

```tsx
// ✅ Do — KPIs reflow from 4 columns to 2 columns to 1
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <KPICard />
  <KPICard />
  <KPICard />
  <KPICard />
</div>
```

### Hide — only for truly decorative content

```tsx
// ✅ Do
<DecorativeIllustration className="hidden xl:block" />
<HeroVideo className="hidden lg:block" />

// ❌ Don't — hiding interactive controls
<FilterBar className="hidden md:flex" />   {/* mobile cannot filter! */}
<Toolbar className="hidden lg:flex" />     {/* mobile cannot act! */}
```

---

## Touch targets

Any interactive element rendered on a touch device must be at least **40×40px** (Apple HIG / Material guideline). Strata buttons at `size="default"` are 40px tall; `size="sm"` (32px) is desktop-only.

```tsx
// ✅ Do — full-size buttons on mobile
<Button size="default">Save</Button>

// ❌ Don't — small buttons on touch
<Button size="sm">Save</Button>     {/* 32px — too small for touch */}
```

For icon-only buttons:

```tsx
// ✅ Do
<Button size="icon" aria-label="Delete">  {/* 40×40px */}
  <Trash className="size-4" />
</Button>

// ❌ Don't
<button className="p-1" aria-label="Delete">  {/* ~28×28px touch target */}
  <Trash className="size-4" />
</button>
```

---

## Modal behavior across breakpoints

| Breakpoint | Default modal pattern |
|---|---|
| `base` / `sm` | Full-screen sheet (slide up from bottom) — `<Sheet>` |
| `md` | Centered dialog with reduced padding — `<Dialog>` `max-w-md` |
| `lg`+ | Centered dialog with full padding — `<Dialog>` `max-w-2xl` or `max-w-4xl` |

```tsx
// ✅ Do — switch overlay type at breakpoint
{isMobile ? <Sheet>...</Sheet> : <Dialog>...</Dialog>}

// Or — single component that adapts
<Dialog className="sm:max-w-full sm:rounded-none sm:h-screen lg:max-w-2xl lg:rounded-lg lg:h-auto">
```

---

## Sidebar behavior

| Breakpoint | Sidebar |
|---|---|
| `base` to `md` | Hidden by default; opens as overlay drawer |
| `lg`+ | Persistent left column |

```tsx
<aside className="
  fixed inset-y-0 left-0 w-72 transform -translate-x-full
  lg:translate-x-0 lg:static
  transition-transform
">
  {nav}
</aside>
```

---

## Typography scaling

Heading sizes step down on smaller viewports to avoid breaking long words onto multiple lines.

| Element | base | sm | md | lg+ |
|---|---|---|---|---|
| h1 | `text-2xl` | `text-3xl` | `text-3xl` | `text-4xl` |
| h2 | `text-xl` | `text-xl` | `text-2xl` | `text-2xl` |
| h3 | `text-lg` | `text-lg` | `text-lg` | `text-xl` |

```tsx
// ✅ Do
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">Dashboard</h1>
```

---

## Anti-patterns

| ❌ | ✅ |
|---|---|
| Hide interactive controls below a breakpoint | Always reflow / stack / collapse — never hide |
| `size="sm"` buttons on touch devices | `size="default"` (40px) at mobile breakpoints |
| Fixed pixel widths that overflow on mobile | `max-w-full` + percentage / fr-based widths |
| Single column on every viewport | `grid-cols-1 lg:grid-cols-N` (responsive grid) |
| Modal `max-w-4xl` on mobile (overflows viewport) | Sheet on mobile, dialog on desktop |
| h1 `text-4xl` on a 320px viewport (breaks words) | Step down: `text-2xl sm:text-3xl lg:text-4xl` |

---

## Source files

- `governance/rules/09-layout-density.md` — desktop density principles
- `governance/rules/06-typography.md` — base scale that responsive utilities step
- Tailwind defaults: https://tailwindcss.com/docs/responsive-design
