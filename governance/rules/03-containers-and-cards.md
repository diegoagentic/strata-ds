# Regla 03 — Contenedores, Cards y Secciones

## Jerarquía de fondos

Cada nivel de la UI tiene su fondo asignado. No intercambiar entre niveles.

```
Nivel 0 — Layout raíz
  bg-background (#EBECEE light / #02060C dark)
  
Nivel 1 — Panels, Cards, Modals
  bg-card (#fafafa light / #02060C dark)
  
Nivel 2 — Secciones internas, Tablas, Sub-paneles
  bg-muted o bg-secondary (#fafafa light / #141E2C dark)
  
Nivel especial — Sidebar
  bg-sidebar (ver sección de sidebar abajo)
```

---

## Nivel 0 — Layout raíz y páginas

```tsx
// Fondo de página
<main className="bg-background min-h-screen">

// Fondo de vista / route
<div className="bg-background p-6">
```

---

## Nivel 1 — Cards y Panels

```tsx
// Card estándar
<div className="bg-card border border-border rounded-xl p-6">
  <h3 className="text-foreground font-semibold">Título</h3>
  <p className="text-muted-foreground text-sm">Descripción</p>
</div>

// Card interactiva (hover state obligatorio)
<div className="bg-card border border-border rounded-xl p-6 
                hover:shadow-lg hover:border-primary/50 
                transition-all cursor-pointer">

// Modal / Dialog
<div className="bg-background border border-border rounded-2xl shadow-xl">

// Popover / Dropdown
<div className="bg-popover border border-border rounded-lg shadow-md">
```

---

## Nivel 2 — Secciones internas

```tsx
// Sub-sección dentro de card
<div className="bg-muted rounded-lg p-4">

// Fila de tabla / item de lista
<div className="bg-muted/50 hover:bg-muted rounded-md px-4 py-3 transition-colors">

// Área de input / form section
<div className="bg-secondary rounded-lg p-4 border border-border">

// Header de sección dentro de panel
<div className="bg-muted px-6 py-3 border-b border-border">
  <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
    Sección
  </span>
</div>
```

---

## Sidebar — Inversión de tema

El sidebar SIEMPRE usa colores invertidos al modo del app. Este es comportamiento intencional de diseño.

```
App en Light → Sidebar oscuro (zinc-950)
App en Dark  → Sidebar claro (white / zinc-50)
```

```tsx
// Tokens dedicados de sidebar (no usar bg-background aquí)
<aside className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border">

// Item de nav normal
<NavItem className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">

// Item de nav activo
<NavItem className="bg-sidebar-primary/15 text-sidebar-primary border-l-2 border-sidebar-primary">

// Ícono en sidebar
<Icon className="text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
```

Tokens de sidebar disponibles:
- `--color-sidebar` → fondo principal
- `--color-sidebar-foreground` → texto principal
- `--color-sidebar-primary` → color brand para activos
- `--color-sidebar-accent` → hover background
- `--color-sidebar-accent-foreground` → texto en hover
- `--color-sidebar-border` → borde separador

---

## Secciones de estado / Status sections

Cuando una card o sección representa un estado específico:

```tsx
// Sección de éxito
<div className="bg-success/5 border border-success/40 rounded-lg p-4">
  <div className="flex items-center gap-2">
    <CheckIcon className="text-success w-5 h-5" />
    <span className="text-success font-medium">Completado</span>
  </div>
  <p className="text-foreground text-sm mt-1">Descripción del resultado</p>
</div>

// Sección de advertencia
<div className="bg-warning/5 border border-warning/40 rounded-lg p-4">
  <ExclamationIcon className="text-warning w-5 h-5" />
  <span className="text-warning font-medium">Advertencia</span>
</div>

// Sección de error
<div className="bg-destructive/5 border border-destructive/30 rounded-lg p-4">
  <XCircleIcon className="text-destructive w-5 h-5" />
  <span className="text-destructive font-medium">Error</span>
</div>

// Sección de info
<div className="bg-info/5 border border-info/40 rounded-lg p-4">
  <InfoIcon className="text-info w-5 h-5" />
  <span className="text-info font-medium">Información</span>
</div>

// Sección AI
<div className="bg-ai/10 border border-ai/30 rounded-lg p-4">
  <SparklesIcon className="text-ai w-5 h-5" />
  <span className="text-ai font-medium">Sugerencia de IA</span>
</div>
```

---

## Elevation / Sombras

Las sombras indican elevación — usarlas consistentemente:

```tsx
// Nivel 0 — sin sombra (integrado al fondo)
className="bg-card border border-border"

// Nivel 1 — sombra pequeña (cards)
className="bg-card border border-border shadow-sm"

// Nivel 2 — sombra media (panels flotantes)
className="bg-card border border-border shadow-md"

// Nivel 3 — sombra grande (modals, drawers)
className="bg-background border border-border shadow-xl"

// Estado hover de card (elevación al interactuar)
className="... hover:shadow-lg hover:border-primary/50 transition-all"
```
