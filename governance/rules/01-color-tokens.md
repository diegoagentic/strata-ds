# Regla 01 — Uso de Tokens de Color

## Sistema de capas

El DS tiene 3 capas de tokens. Siempre usar la más semántica disponible.

```
Capa 3 — Semántica (PREFERIDA)
  bg-primary, text-foreground, bg-card, text-muted-foreground

Capa 2 — Primitiva de marca (solo cuando el diseño requiere shade específico)
  bg-brand-300, bg-brand-400, text-brand-600

Capa 1 — Primitiva neutral (solo para construcción interna de componentes DS)
  bg-zinc-950, text-zinc-400
```

---

## Tokens semánticos disponibles

### Backgrounds de superficie
| Token | Light | Dark | Usar para |
|---|---|---|---|
| `bg-background` | #EBECEE | #02060C | Fondo de página, layout raíz |
| `bg-card` | #fafafa | #02060C | Cards, panels, contenedores elevados |
| `bg-muted` | #fafafa | #141E2C | Secciones secundarias, tablas |
| `bg-secondary` | #fafafa | #141E2C | Fondos alternativos |
| `bg-accent` | #fafafa | #141E2C | Hover state backgrounds |
| `bg-popover` | #fafafa | #02060C | Dropdowns, tooltips, popovers |

### Colores de texto
| Token | Light | Dark | Usar para |
|---|---|---|---|
| `text-foreground` | #02060C | #EBECEE | Texto principal |
| `text-muted-foreground` | #959DA7 | #959DA7 | Texto secundario, placeholders |
| `text-card-foreground` | #02060C | #EBECEE | Texto dentro de cards |
| `text-primary-foreground` | #02060C | #02060C | Texto sobre fondo primary (lime) |

### Colores de acción primaria
| Token | Light | Dark | Usar para |
|---|---|---|---|
| `bg-primary` | #E6F993 | #C3E433 | Botón CTA principal |
| `text-primary` | #E6F993 | #C3E433 | Iconos destacados, links activos |

### Bordes e inputs
| Token | Light | Dark | Usar para |
|---|---|---|---|
| `border-border` | #D0D4D8 | #141E2C | Bordes generales |
| `border-input` | #D0D4D8 | #141E2C | Bordes de inputs |
| `bg-input` | #fafafa | — | Fondo de inputs |
| `ring-ring` | #959DA7 | — | Focus ring |

### Estados semánticos
| Token | Valor | Usar para |
|---|---|---|
| `text-success` / `bg-success` | #098400 | Confirmaciones, éxito |
| `text-warning` / `bg-warning` | #b27d00 | Advertencias |
| `text-destructive` / `bg-destructive` | #E52D49 | Errores, acciones destructivas |
| `text-info` / `bg-info` | #2164d1 | Información, help |
| `text-ai` / `bg-ai` | #8b5cf6 | Indicadores de IA |

---

## Patrón de opacidad para estados suaves

Para fondos sutiles de estado, usar opacity utilities:

```tsx
// Estado success sutil
className="bg-success/5 border border-success/40 text-success"

// Estado warning sutil
className="bg-warning/5 border border-warning/40 text-warning"

// Estado error sutil
className="bg-destructive/10 border border-destructive/30 text-destructive"

// Estado info sutil
className="bg-info/5 border border-info/40 text-info"

// Estado AI sutil
className="bg-ai/10 text-ai"
```

---

## Regla de charts

Para gráficos usar los tokens de chart, no colores libres:

```tsx
// Correcto
stroke="var(--color-chart-1)"   // indigo
fill="var(--color-chart-2)"     // green

// Los 5 chart tokens disponibles:
// --color-chart-1: #6366f1 (indigo)
// --color-chart-2: #22c55e (green)
// --color-chart-3: #E52D49 (red)
// --color-chart-4: #f59e0b (amber)
// --color-chart-5: #818cf8 (light indigo)
```
