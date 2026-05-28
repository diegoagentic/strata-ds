# Rule 02 — Brand Colors (Lime) Usage

## The brand color is a SIGNAL, not a base color

Brand (lime #E6F993 / #C3E433) exists to draw attention to **a specific action or state**. It is not a general fill color.

---

## Where to USE brand

### 1. Primary action button (CTA)

```tsx
// Light mode
<button className="bg-brand-300 text-zinc-900 hover:bg-brand-400 transition-colors">
  Primary Action
</button>

// Dark mode
<button className="bg-brand-400 text-zinc-900 hover:bg-brand-500 transition-colors">
  Primary Action
</button>

// With semantic token (recommended — adapts to mode automatically)
<button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
  Primary Action
</button>
```

### 2. Active / selected element indicator

```tsx
// Active nav item
<NavItem className="border-l-2 border-primary text-foreground bg-primary/10">
  Dashboard
</NavItem>

// Active tab
<Tab className="border-b-2 border-primary text-foreground">
  Transactions
</Tab>
```

### 3. Decorative accent on branded cards

```tsx
// Top border of featured card
<Card className="bg-card border border-border">
  <div className="h-1 bg-brand-400 rounded-t-lg" />
  {/* content */}
</Card>
```

### 4. Action icon container background

```tsx
// Icon in primary action context
<div className="bg-primary/15 rounded-lg p-2">
  <SparklesIcon className="text-primary w-5 h-5" />
</div>
```

### 5. Focus ring / focus indicator

```tsx
<input className="focus:ring-2 focus:ring-primary focus:ring-offset-2" />
```

---

## Where NOT to use brand

| Case | Why |
|---|---|
| Body text on light background | Contrast 1.8:1 — fails WCAG |
| Headings or titles | It is not a text color |
| Whole section background | Too dominant, signal is lost |
| Input borders in normal state | Reserved for focus/active |
| State icons (success, error) | Use semantic state tokens |
| Informational badges | Use info/success/warning tokens |

---

## Full brand scale

```
brand-50:  #fdfee7  — almost white, very subtle
brand-100: #f9fdc3  — very light tint
brand-200: #f4fb89  — light tint
brand-300: #E6F993  — ← PRIMARY LIGHT MODE (CTA)
brand-400: #C3E433  — ← PRIMARY DARK MODE (CTA) / hover light
brand-500: #a3c414  — hover dark / strong decoration
brand-600: #A0C114  — emphasis borders
brand-700: #7a9410  — text over brand (accessible)
brand-800: #5c6f0f  — dark text over brand
brand-900: #4a5810  — very dark
brand-950: #233502  — almost black brand
```

### Contrast rule with brand as background:
- Over `brand-300` → always `text-zinc-900` or `text-primary-foreground` (#02060C)
- Over `brand-400` → always `text-zinc-900` (#02060C)
- NEVER `text-white` over brand-300/400 (insufficient contrast)

---

## Pattern: full branded card

```tsx
// Light mode
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
  <div className="h-1 bg-brand-400" />
  <div className="p-6">
    <h3 className="text-zinc-900 font-semibold">Title</h3>
    <p className="text-zinc-500 text-sm">Secondary description</p>
    <button className="mt-4 bg-brand-300 text-zinc-900 hover:bg-brand-400 px-4 py-2 rounded-lg transition-colors">
      Action
    </button>
  </div>
</div>

// Dark mode (using semantic tokens so it is automatic)
<div className="bg-card border border-border rounded-xl overflow-hidden">
  <div className="h-1 bg-primary" />
  <div className="p-6">
    <h3 className="text-foreground font-semibold">Title</h3>
    <p className="text-muted-foreground text-sm">Secondary description</p>
    <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors">
      Action
    </button>
  </div>
</div>
```
