# Regla 05 — Iconos

## Librería de íconos

Strata DS usa **@heroicons/react** como librería principal.

```tsx
import { PlusIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'  // solid para énfasis
```

---

## Color de íconos por contexto

### Íconos de acción primaria (brand)
```tsx
// En contexto de CTA o feature destacada
<SparklesIcon className="text-primary w-5 h-5" />
<PlusIcon className="text-primary w-5 h-5" />
```

### Íconos de estado
```tsx
// Success
<CheckCircleIcon className="text-success w-5 h-5" />

// Warning
<ExclamationTriangleIcon className="text-warning w-5 h-5" />

// Error / Destructive
<XCircleIcon className="text-destructive w-5 h-5" />

// Info
<InformationCircleIcon className="text-info w-5 h-5" />

// AI / Magic
<SparklesIcon className="text-ai w-5 h-5" />
```

### Íconos secundarios / neutros
```tsx
// Íconos de soporte, navegación, UI general
<ChevronRightIcon className="text-muted-foreground w-4 h-4" />
<MagnifyingGlassIcon className="text-muted-foreground w-5 h-5" />
<EllipsisHorizontalIcon className="text-muted-foreground w-5 h-5" />
```

### Íconos con hover
```tsx
// Ícono que reacciona al hover de su contenedor (usando group)
<div className="group hover:bg-accent rounded-md p-2 transition-colors">
  <CogIcon className="text-muted-foreground group-hover:text-foreground w-5 h-5 transition-colors" />
</div>

// Ícono que se vuelve brand en hover
<button className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
  Ver más
</button>
```

---

## Tamaños

| Contexto | Clase | Píxeles |
|---|---|---|
| Inline en texto (sm) | `w-3 h-3` | 12px |
| Inline en texto (base) | `w-4 h-4` | 16px |
| Botones, inputs | `w-5 h-5` | 20px |
| Cards, secciones | `w-6 h-6` | 24px |
| Ilustración / empty state | `w-8 h-8` o `w-12 h-12` | 32-48px |

---

## Contenedor de ícono (Icon container)

Para íconos que necesitan fondo:

```tsx
// Brand container (feature highlight)
<div className="bg-primary/15 rounded-lg p-2 w-fit">
  <SparklesIcon className="text-primary w-5 h-5" />
</div>

// Success container
<div className="bg-success/10 rounded-lg p-2 w-fit">
  <CheckCircleIcon className="text-success w-5 h-5" />
</div>

// Muted container (neutral)
<div className="bg-muted rounded-lg p-2 w-fit">
  <CogIcon className="text-muted-foreground w-5 h-5" />
</div>
```

---

## Reglas

1. **No usar emojis como íconos** — siempre usar heroicons
2. **Outline vs Solid** — outline para UI general, solid para estados de énfasis o indicadores activos
3. **aria-hidden en íconos decorativos** — `<Icon aria-hidden="true" />`
4. **aria-label en icon buttons** — `<button aria-label="Cerrar"><XMarkIcon /></button>`
5. **No hardcodear color hex** — siempre usar clases semánticas (`text-success`, `text-primary`, etc.)
6. **Consistencia de tamaño en grupos** — todos los íconos de un mismo componente deben tener el mismo tamaño
