# Token Reference — Strata Design System

Referencia rápida de todos los tokens disponibles. Fuente: `src/styles/tokens/variables.css` + `variables-dark.css`

---

## Colores semánticos de superficie

| Token CSS | Tailwind class | Light | Dark | Uso |
|---|---|---|---|---|
| `--color-background` | `bg-background` | #EBECEE | #02060C | Fondo de página |
| `--color-foreground` | `text-foreground` | #02060C | #EBECEE | Texto principal |
| `--color-card` | `bg-card` | #fafafa | #02060C | Cards y panels |
| `--color-card-foreground` | `text-card-foreground` | #02060C | #EBECEE | Texto en cards |
| `--color-popover` | `bg-popover` | #fafafa | #02060C | Dropdowns, tooltips |
| `--color-popover-foreground` | `text-popover-foreground` | #02060C | #EBECEE | Texto en popovers |
| `--color-muted` | `bg-muted` | #fafafa | #141E2C | Secciones secundarias |
| `--color-muted-foreground` | `text-muted-foreground` | #959DA7 | #959DA7 | Texto secundario |
| `--color-secondary` | `bg-secondary` | #fafafa | #141E2C | Fondos alternativos |
| `--color-secondary-foreground` | `text-secondary-foreground` | #02060C | #EBECEE | Texto sobre secondary |
| `--color-accent` | `bg-accent` | #fafafa | #141E2C | Hover backgrounds |
| `--color-accent-foreground` | `text-accent-foreground` | #02060C | #EBECEE | Texto en hover |

---

## Colores de acción primaria (Brand)

| Token CSS | Tailwind class | Light | Dark | Uso |
|---|---|---|---|---|
| `--color-primary` | `bg-primary` / `text-primary` | #E6F993 | #C3E433 | CTA, activos |
| `--color-primary-foreground` | `text-primary-foreground` | #02060C | #02060C | Texto sobre primary |

---

## Bordes e inputs

| Token CSS | Tailwind class | Light | Dark | Uso |
|---|---|---|---|---|
| `--color-border` | `border-border` | #D0D4D8 | #141E2C | Bordes generales |
| `--color-input` | `border-input` | #D0D4D8 | #141E2C | Bordes de inputs |
| `--color-input-background` | `bg-input` | #fafafa | — | Fondo de inputs |
| `--color-ring` | `ring-ring` | #959DA7 | — | Focus ring |

---

## Colores de estado

| Token CSS | Tailwind class | Valor | Uso |
|---|---|---|---|
| `--color-destructive` | `bg-destructive` / `text-destructive` | #E52D49 | Errores, destructivo |
| `--color-destructive-foreground` | `text-destructive-foreground` | #ffffff | Texto sobre destructive |
| `--color-success` | `text-success` / `bg-success` | #098400 | Éxito, confirmación |
| `--color-success-light` | `bg-success-light` | #e5f9e4 | Fondo success sutil |
| `--color-warning` | `text-warning` / `bg-warning` | #b27d00 | Advertencias |
| `--color-warning-light` | `bg-warning-light` | #fff5cd | Fondo warning sutil |
| `--color-info` | `text-info` / `bg-info` | #2164d1 | Información |
| `--color-info-light` | `bg-info-light` | #ecf4ff | Fondo info sutil |
| `--color-error` | `text-error` / `bg-error` | #d20322 | Error (alternativo) |
| `--color-error-light` | `bg-error-light` | #ffe4e7 | Fondo error sutil |
| `--color-ai` | `text-ai` / `bg-ai` | #8b5cf6 | Indicadores de IA |
| `--color-ai-light` | `bg-ai-light` | #ede9fe | Fondo AI sutil |

---

## Tokens de Sidebar

| Token CSS | Tailwind class | Uso |
|---|---|---|
| `--color-sidebar` | `bg-sidebar` | Fondo del sidebar |
| `--color-sidebar-foreground` | `text-sidebar-foreground` | Texto principal sidebar |
| `--color-sidebar-primary` | `text-sidebar-primary` | Brand activo en sidebar |
| `--color-sidebar-accent` | `bg-sidebar-accent` | Hover background sidebar |
| `--color-sidebar-accent-foreground` | `text-sidebar-accent-foreground` | Texto en hover sidebar |
| `--color-sidebar-border` | `border-sidebar-border` | Borde separador sidebar |

---

## Escala Brand (primitivos)

Solo usar cuando el token semántico no alcanza.

| Token | Valor |
|---|---|
| `--color-brand-50` | #fdfee7 |
| `--color-brand-100` | #f9fdc3 |
| `--color-brand-200` | #f4fb89 |
| `--color-brand-300` | #E6F993 ← primary light |
| `--color-brand-400` | #C3E433 ← primary dark |
| `--color-brand-500` | #a3c414 |
| `--color-brand-600` | #A0C114 |
| `--color-brand-700` | #7a9410 |
| `--color-brand-800` | #5c6f0f |
| `--color-brand-900` | #4a5810 |
| `--color-brand-950` | #233502 |

---

## Tokens de Charts

| Token | Valor | Color |
|---|---|---|
| `--color-chart-1` | #6366f1 | Indigo |
| `--color-chart-2` | #22c55e | Green |
| `--color-chart-3` | #E52D49 | Red |
| `--color-chart-4` | #f59e0b | Amber |
| `--color-chart-5` | #818cf8 | Light Indigo |

---

## Tipografía

| Token | Valor | Uso |
|---|---|---|
| `--font-brand` | 'PP Monument Extended' | Headings de marca, hero text |
| `--font-sans` | Inter, system-ui | Cuerpo de texto (default) |
| `--font-mono` | ui-monospace, SFMono | Código, datos técnicos |

---

## Archivos fuente

- `Strata Design System/strata-ds/src/styles/tokens/variables.css` → tokens light mode
- `Strata Design System/strata-ds/src/styles/tokens/variables-dark.css` → tokens dark mode
- `Strata Design System/strata-ds/src/styles/theme.css` → mapeo a Tailwind v4
