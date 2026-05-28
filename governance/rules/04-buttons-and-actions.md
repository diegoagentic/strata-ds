# Rule 04 — Buttons and Action Elements

## Button variants

### Primary (main CTA)
One per section/view. The only one with brand lime.

```tsx
<button className="bg-primary text-primary-foreground 
                   hover:bg-primary/90 
                   px-4 py-2 rounded-lg 
                   transition-colors font-medium">
  Primary Action
</button>
```

### Secondary
Supporting action next to a primary.

```tsx
<button className="bg-secondary text-secondary-foreground 
                   border border-border
                   hover:bg-muted 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Secondary Action
</button>
```

### Outline
Alternative, less prominent action.

```tsx
<button className="border border-input bg-background text-foreground
                   hover:bg-accent hover:text-accent-foreground 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Outline
</button>
```

### Ghost
For low-priority actions or dense contexts (tables, toolbars).

```tsx
<button className="text-foreground 
                   hover:bg-accent hover:text-accent-foreground 
                   px-3 py-2 rounded-md 
                   transition-colors">
  Ghost
</button>
```

### Destructive
For actions that delete or cannot be undone.

```tsx
<button className="bg-destructive text-destructive-foreground 
                   hover:bg-destructive/90 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Delete
</button>

// Outline destructive variant
<button className="border border-destructive text-destructive bg-transparent
                   hover:bg-destructive/10 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Delete
</button>
```

### Link / Text action
For navigation or inline actions in text.

```tsx
<button className="text-primary underline-offset-4 
                   hover:underline hover:text-primary/90 
                   transition-colors text-sm">
  View details
</button>

// Without underline (navigation)
<button className="text-muted-foreground 
                   hover:text-foreground 
                   transition-colors text-sm">
  Cancel
</button>
```

---

## Button states

### Disabled

```tsx
<button 
  disabled
  className="bg-primary text-primary-foreground 
             opacity-50 cursor-not-allowed
             px-4 py-2 rounded-lg">
  Not available
</button>
```

### Loading

```tsx
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg 
                   flex items-center gap-2">
  <span className="animate-spin text-primary-foreground">
    <LoadingIcon className="w-4 h-4" />
  </span>
  Processing...
</button>
```

### With icon

```tsx
// Icon on the left
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg 
                   flex items-center gap-2 transition-colors hover:bg-primary/90">
  <PlusIcon className="w-4 h-4" />
  Add
</button>

// Icon on the right (directional action)
<button className="text-foreground hover:text-primary px-4 py-2 
                   flex items-center gap-2 transition-colors">
  View more
  <ChevronRightIcon className="w-4 h-4" />
</button>

// Icon only (icon button)
<button className="bg-muted hover:bg-accent p-2 rounded-md transition-colors"
        aria-label="Close">
  <XMarkIcon className="w-5 h-5 text-muted-foreground" />
</button>
```

---

## Hover states on non-button elements

### Table / list rows

```tsx
<tr className="hover:bg-muted/50 transition-colors cursor-pointer">
<div className="hover:bg-accent rounded-md transition-colors px-3 py-2">
```

### Clickable cards

```tsx
<div className="bg-card border border-border rounded-xl p-6 cursor-pointer
                hover:shadow-lg hover:border-primary/50 
                transition-all duration-200">
```

### Navigation links

```tsx
<a className="text-muted-foreground hover:text-foreground transition-colors">
// If it is the active element:
<a className="text-foreground font-medium">  // no hover — already active
```

---

## Composition rules

1. **Only one Primary per section** — if there are two CTAs, the less important one goes as Secondary or Outline
2. **Destructive always requires confirmation** — never fire a destructive action directly on click without a modal/alert confirmation
3. **Button groups** — Primary on the right (form and dialog convention)
4. **Sizes** — do not invent sizes. Use the DS padding variants: `px-3 py-1.5` (sm), `px-4 py-2` (md), `px-6 py-3` (lg)
5. **border-radius** — `rounded-md` for sm/md, `rounded-lg` for lg, `rounded-full` only for circular icon buttons
