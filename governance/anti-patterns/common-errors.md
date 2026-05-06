# Anti-patrones — Errores Documentados

Estos errores se han observado repetidamente en los proyectos. Cada uno tiene su corrección.

---

## ERROR 01 — Colores de estado hardcodeados

**Observado en:** UI-Dealer, Smart Comparator, MBI Builder

```tsx
// ❌ MAL — usar clases Tailwind raw para estados
className="text-green-500 dark:text-green-400"
className="text-red-500"
className="bg-yellow-100 text-yellow-800"
className="text-blue-600"
```

```tsx
// ✅ CORRECTO — tokens semánticos de estado
className="text-success"
className="text-destructive"
className="bg-warning/10 text-warning"
className="text-info"
```

**Por qué falla:** Los colores raw (green-500, red-500) no se adaptan al sistema de temas y pueden tener contraste inadecuado en dark mode. No están sincronizados con los tokens del DS.

---

## ERROR 02 — Hardcodear fondos de contenedor

**Observado en:** todos los proyectos

```tsx
// ❌ MAL
className="bg-white"              // No se adapta a dark mode
className="bg-zinc-900"           // No es el token correcto
className="bg-[#EBECEE]"          // Hex hardcodeado
className="bg-gray-50"            // Clase Tailwind raw
```

```tsx
// ✅ CORRECTO
className="bg-background"         // Fondo de página
className="bg-card"               // Cards y panels
className="bg-muted"              // Secciones secundarias
```

**Por qué falla:** `bg-white` en dark mode se convierte en blanco sobre fondo oscuro — completamente roto. El token `bg-background` ya maneja ambos modos.

---

## ERROR 03 — Mezclar sistemas de color legacy y nuevo

**Observado en:** todos los proyectos (heredado de migración)

```tsx
// ❌ MAL — usando namespace legacy
className="text-primary"          // Puede resolver a #27272a (gris) en lugar de #E6F993 (lime)
                                   // dependiendo de qué CSS cargó primero
```

**El problema:** `theme.css` tiene dos sistemas:
- Legacy: `--primary: #27272a` (gris oscuro de shadcn)
- Nuevo: `--color-primary: #E6F993` (lime brand)

Si ves un botón "primary" que se ve gris en lugar de lime, está usando el namespace legacy.

```tsx
// ✅ CORRECTO — verificar que theme.css mapee correctamente
// El token --color-primary debe ser el que se usa vía Tailwind
// Revisar que vite/tailwind config use @theme inline con --color-* prefix
```

**Acción:** Si un componente muestra colores inesperados, verificar en DevTools qué valor resuelve `--primary` vs `--color-primary`.

---

## ERROR 04 — brand-300 como texto

**Observado en:** demos, componentes nuevos en flujos de prototipo

```tsx
// ❌ MAL — lime como color de texto
className="text-brand-300"        // 1.8:1 contraste sobre blanco — FALLA WCAG
className="text-primary"          // mismo problema si el token es lime
```

```tsx
// ✅ CORRECTO — lime solo como fondo
className="bg-primary text-primary-foreground"  // fondo lime, texto oscuro
className="bg-brand-300 text-zinc-900"          // explícito
```

---

## ERROR 05 — Dark mode con clases dark: en lugar de tokens semánticos

**Observado en:** UI-Dealer src/components/, Smart Comparator

```tsx
// ❌ MAL — dark mode manual por componente
className="text-zinc-900 dark:text-white"
className="bg-white dark:bg-zinc-800"
className="border-zinc-200 dark:border-zinc-700"
```

```tsx
// ✅ CORRECTO — token semántico (ya maneja ambos modos)
className="text-foreground"
className="bg-background"
className="border-border"
```

**Por qué falla:** Cada componente que usa `dark:` manual crea una dependencia frágil que se rompe si los valores de los tokens cambian. Además es el doble de código a mantener.

---

## ERROR 06 — No aplicar hover state en elementos interactivos

**Observado en:** componentes de flujos nuevos, proof-of-concept

```tsx
// ❌ MAL — elemento clickeable sin feedback visual
<div className="bg-card border border-border rounded-xl p-6 cursor-pointer">

// ❌ MAL — botón sin hover
<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
```

```tsx
// ✅ CORRECTO
<div className="bg-card border border-border rounded-xl p-6 cursor-pointer
                hover:shadow-lg hover:border-primary/50 transition-all">

<button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg
                   hover:bg-primary/90 transition-colors">
```

**Por qué falla:** Sin hover state, el usuario no sabe que el elemento es interactivo. Es un problema de usabilidad básico y rompe la consistencia visual del DS.

---

## ERROR 07 — Usar opacity en contenedor en lugar de opacity utility en color

**Observado en:** varios proyectos

```tsx
// ❌ MAL — opacity en contenedor afecta TODOS los hijos incluyendo texto
<div className="bg-primary opacity-10">
  <span className="text-foreground">Este texto también queda al 10% de opacidad</span>
</div>
```

```tsx
// ✅ CORRECTO — opacity solo en el color de fondo
<div className="bg-primary/10">
  <span className="text-foreground">Este texto tiene opacidad normal</span>
</div>
```

---

## ERROR 08 — No usar tokens de sidebar para el sidebar

**Observado en:** DemoSidebar.tsx y variantes

```tsx
// ❌ MAL — hardcodeando colores del sidebar
className="bg-zinc-950 text-white"
className="bg-white text-zinc-900"
```

```tsx
// ✅ CORRECTO — tokens dedicados de sidebar
className="bg-sidebar text-sidebar-foreground"
// Los tokens sidebar-* ya manejan la inversión de tema automáticamente
```

---

## ERROR 09 — Múltiples CTAs primarios en la misma vista

**Observado en:** flujos de demo con múltiples acciones

```tsx
// ❌ MAL — tres botones primary compiten por atención
<button className="bg-primary ...">Guardar</button>
<button className="bg-primary ...">Publicar</button>
<button className="bg-primary ...">Exportar</button>
```

```tsx
// ✅ CORRECTO — jerarquía clara
<button className="bg-primary text-primary-foreground ...">Guardar</button>      // Primary (1)
<button className="border border-input bg-background ...">Publicar</button>      // Outline
<button className="text-muted-foreground hover:text-foreground ...">Exportar</button>  // Ghost
```

---

## ERROR 10 — Crear variables CSS locales que duplican tokens del DS

**Observado en:** componentes de proyectos específicos

```tsx
// ❌ MAL — en el CSS del componente
.my-component {
  --accent-color: #E6F993;  /* duplicando --color-primary */
  --text-color: #02060C;    /* duplicando --color-foreground */
}
```

```tsx
// ✅ CORRECTO — referenciar los tokens existentes
.my-component {
  color: var(--color-foreground);
  accent-color: var(--color-primary);
}
// O simplemente usar Tailwind: className="text-foreground"
```
