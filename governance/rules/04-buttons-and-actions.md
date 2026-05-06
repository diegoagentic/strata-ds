# Regla 04 — Botones y Elementos de Acción

## Variantes de botón

### Primary (CTA principal)
Una por sección/vista. El único con brand lime.

```tsx
<button className="bg-primary text-primary-foreground 
                   hover:bg-primary/90 
                   px-4 py-2 rounded-lg 
                   transition-colors font-medium">
  Acción Principal
</button>
```

### Secondary
Acción de apoyo junto a un primary.

```tsx
<button className="bg-secondary text-secondary-foreground 
                   border border-border
                   hover:bg-muted 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Acción Secundaria
</button>
```

### Outline
Acción alternativa, menos prominente.

```tsx
<button className="border border-input bg-background text-foreground
                   hover:bg-accent hover:text-accent-foreground 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Outline
</button>
```

### Ghost
Para acciones de baja prioridad o contextos densos (tablas, toolbars).

```tsx
<button className="text-foreground 
                   hover:bg-accent hover:text-accent-foreground 
                   px-3 py-2 rounded-md 
                   transition-colors">
  Ghost
</button>
```

### Destructive
Para acciones que eliminan o no se pueden deshacer.

```tsx
<button className="bg-destructive text-destructive-foreground 
                   hover:bg-destructive/90 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Eliminar
</button>

// Variante outline destructive
<button className="border border-destructive text-destructive bg-transparent
                   hover:bg-destructive/10 
                   px-4 py-2 rounded-lg 
                   transition-colors">
  Eliminar
</button>
```

### Link / Text action
Para navegación o acciones inline en texto.

```tsx
<button className="text-primary underline-offset-4 
                   hover:underline hover:text-primary/90 
                   transition-colors text-sm">
  Ver detalles
</button>

// Sin subrayado (navigation)
<button className="text-muted-foreground 
                   hover:text-foreground 
                   transition-colors text-sm">
  Cancelar
</button>
```

---

## Estados de botón

### Disabled

```tsx
<button 
  disabled
  className="bg-primary text-primary-foreground 
             opacity-50 cursor-not-allowed
             px-4 py-2 rounded-lg">
  No disponible
</button>
```

### Loading

```tsx
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg 
                   flex items-center gap-2">
  <span className="animate-spin text-primary-foreground">
    <LoadingIcon className="w-4 h-4" />
  </span>
  Procesando...
</button>
```

### Con ícono

```tsx
// Ícono a la izquierda
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg 
                   flex items-center gap-2 transition-colors hover:bg-primary/90">
  <PlusIcon className="w-4 h-4" />
  Agregar
</button>

// Ícono a la derecha (acción direccional)
<button className="text-foreground hover:text-primary px-4 py-2 
                   flex items-center gap-2 transition-colors">
  Ver más
  <ChevronRightIcon className="w-4 h-4" />
</button>

// Solo ícono (icon button)
<button className="bg-muted hover:bg-accent p-2 rounded-md transition-colors"
        aria-label="Cerrar">
  <XMarkIcon className="w-5 h-5 text-muted-foreground" />
</button>
```

---

## Hover states en elementos no-button

### Filas de tabla / lista

```tsx
<tr className="hover:bg-muted/50 transition-colors cursor-pointer">
<div className="hover:bg-accent rounded-md transition-colors px-3 py-2">
```

### Cards clickeables

```tsx
<div className="bg-card border border-border rounded-xl p-6 cursor-pointer
                hover:shadow-lg hover:border-primary/50 
                transition-all duration-200">
```

### Links de navegación

```tsx
<a className="text-muted-foreground hover:text-foreground transition-colors">
// Si es elemento activo:
<a className="text-foreground font-medium">  // sin hover — ya está activo
```

---

## Reglas de composición

1. **Un solo Primary por sección** — si hay dos CTAs, el menos importante va como Secondary u Outline
2. **Destructive siempre requiere confirmación** — nunca disparar acción destructiva directo al click sin modal/alert de confirmación
3. **Grupos de botones** — Primary a la derecha (convención de formularios y dialogs)
4. **Tamaños** — no inventar tamaños. Usar las variantes de padding del DS: `px-3 py-1.5` (sm), `px-4 py-2` (md), `px-6 py-3` (lg)
5. **border-radius** — `rounded-md` para sm/md, `rounded-lg` para lg, `rounded-full` solo para icon buttons circulares
