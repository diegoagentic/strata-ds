# Rule 07 — Elevation and Shadows

## Elevation levels

Shadows indicate visual surface hierarchy. Do not combine them arbitrarily — each level has a purpose.

| Level | Token | Tailwind | Usage |
|---|---|---|---|
| **0** — Integrated | no shadow | `bg-card border border-border` | Card that lives inside another surface, no need to detach |
| **1** — Standard | `--shadow-sm` | `shadow-sm` | Regular cards on a page |
| **2** — Floating | `--shadow-md` | `shadow-md` | Panels that float above content (popovers, hover cards) |
| **3** — Modal | `--shadow-xl` | `shadow-xl` | Dialogs, Drawers, Sheets — modal surfaces |
| **hover** — Interactive | `--shadow-lg` | `hover:shadow-lg` | Clickable card on hover |

```tsx
// Level 0 — no shadow (card inside another card)
<div className="bg-muted border border-border rounded-lg p-4">
  Sub-section
</div>

// Level 1 — standard card
<div className="bg-card border border-border rounded-xl p-6 shadow-sm">
  <h3 className="font-semibold text-foreground">Card</h3>
</div>

// Level 2 — floating popover
<div className="bg-popover border border-border rounded-lg shadow-md p-3">
  Popover content
</div>

// Level 3 — modal
<div className="bg-background border border-border rounded-2xl shadow-xl">
  Dialog content
</div>

// Interactive hover
<div className="bg-card border border-border rounded-xl p-6 shadow-sm
                hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
  Clickable card
</div>
```

---

## Available tokens

| Token | Value (CSS) | Tailwind class |
|---|---|---|
| `--shadow-sm`    | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `shadow-sm` |
| `--shadow-base`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | `shadow` |
| `--shadow-md`    | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | `shadow-md` |
| `--shadow-lg`    | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | `shadow-lg` |
| `--shadow-xl`    | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | `shadow-xl` |
| `--shadow-2xl`   | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | `shadow-2xl` |
| `--shadow-inner` | `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)` | `shadow-inner` |
| `--shadow-none`  | `none` | `shadow-none` |

---

## Rules

1. **Do not skip levels**: if a panel is at Level 1, its child elements cannot be Level 3. The level drops or stays — never jumps dramatically.
2. **Do not combine shadow + heavy border**: if it has `shadow-md` or more, the border can be subtle (`border-border`) or absent. Heavy shadow + thick border duplicates the signal.
3. **Hover state uses level +1**: a `shadow-sm` card on hover goes up to `shadow-lg` (not to `shadow-2xl`).
4. **Dark mode**: shadows are preserved — values like `rgb(0 0 0 / X)` project less intensely over dark backgrounds, but still indicate hierarchy.
5. **Do not hardcode inline `box-shadow`**: always use Tailwind classes to guarantee consistency.

---

## Anti-patterns

| ❌ Wrong | ✅ Right | Why |
|---|---|---|
| `style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}` | `className="shadow-md"` | Inconsistency with the rest of the DS |
| `shadow-2xl` on a regular card | `shadow-sm` | Disproportionate level, visual noise |
| `shadow-xl border-4 border-black` | `shadow-xl` alone | Heavy border duplicates the elevation |
| `hover:shadow-2xl` from `shadow-sm` | `hover:shadow-lg` | Excessive jump |

---

## Pattern: complete interactive card

```tsx
<button className="
  bg-card border border-border rounded-xl p-6
  shadow-sm
  hover:shadow-lg hover:border-primary/50
  focus:ring-2 focus:ring-primary focus:ring-offset-2
  transition-all
  text-left
">
  <h3 className="font-semibold text-foreground">Title</h3>
  <p className="mt-1 text-sm text-muted-foreground">Description</p>
</button>
```

---

## Source files

- Variables: `src/styles/tokens/variables.css` (lines with `--shadow-`)
- See also: `governance/rules/03-containers-and-cards.md` for how to combine shadows with surface hierarchy.
