# Strata Design System — Leyes Absolutas

Estas reglas NUNCA se violan. Son la base de todo componente, flujo y variante.

---

## LEY 1 — Nunca hardcodear valores hex o colores raw

**PROHIBIDO:**
```tsx
className="bg-[#E6F993] text-[#02060C]"
className="text-green-500"
className="bg-zinc-900"
```

**CORRECTO:**
```tsx
className="bg-primary text-primary-foreground"
className="text-success"
className="bg-background"
```

**Por qué:** Los hex hardcodeados rompen el tema dark/light y no se propagan cuando los tokens cambian. Tailwind raw classes (green-500, zinc-900) ignoran el sistema semántico.

---

## LEY 2 — brand-300 y brand-400 NUNCA son color de texto sobre fondos claros

**PROHIBIDO:**
```tsx
className="text-brand-300"           // contraste 1.8:1 — FALLA accesibilidad
className="text-primary"             // en texto corrido sobre bg-white
```

**CORRECTO — brand-300/400 solo como:**
- Fondo de botón CTA
- Borde de indicador activo
- Fondo de ícono destacado (pequeño área)
- Indicador de foco (focus ring)

**Por qué:** brand-300 (#E6F993 lime) sobre blanco tiene contraste 1.8:1. WCAG requiere mínimo 4.5:1 para texto. Usar como texto es inaccesible.

---

## LEY 3 — primary-foreground siempre es texto oscuro (#02060C)

En ambos modos (light y dark), cuando el fondo es `bg-primary` (lime):

```tsx
// SIEMPRE
className="bg-primary text-primary-foreground"
// primary-foreground = #02060C en light Y dark
```

**Nunca:**
```tsx
className="bg-brand-300 text-white"   // contraste falla en lime
className="bg-primary text-foreground" // usar la variable correcta
```

---

## LEY 4 — Tokens semánticos antes que tokens primitivos

Orden de preferencia:
1. `bg-primary` ✓ (semántico — se adapta a modo)
2. `bg-brand-300` ✓ solo si necesitas el shade específico por diseño
3. `bg-[#E6F993]` ✗ NUNCA

Para estados:
1. `text-success` ✓
2. `text-green-600` ✗
3. `text-[#098400]` ✗

---

## LEY 5 — Dark mode via tokens semánticos, no via clases dark:

**PROHIBIDO:**
```tsx
className="bg-white dark:bg-zinc-900"
className="text-zinc-900 dark:text-white"
```

**CORRECTO:**
```tsx
className="bg-background"    // #EBECEE light / #02060C dark — automático
className="text-foreground"  // #02060C light / #EBECEE dark — automático
```

**Excepción válida:** El sidebar usa inversión explícita. Ver `rules/03-containers-and-cards.md`.

---

## LEY 6 — No mezclar sistemas de color legacy y nuevo

El sistema tiene dos namespaces históricos. Solo usar el nuevo:

| Legacy (NO usar) | Nuevo (usar) |
|---|---|
| `--primary` (#27272a) | `--color-primary` (#E6F993) |
| `--secondary` (#f4f4f5) | `--color-secondary` (#fafafa) |
| `--background` (#ffffff) | `--color-background` (#EBECEE) |

Si ves clases que producen colores inesperados (gris oscuro en lugar de lime), probablemente están usando el namespace legacy.

---

## LEY 7 — Todo elemento interactivo debe tener estado hover

```tsx
// Mínimo requerido para cualquier elemento clickeable:
className="... hover:bg-primary/90 transition-colors"

// Para cards:
className="... hover:shadow-lg hover:border-primary/50 transition-all"

// Para texto/iconos:
className="... hover:text-primary transition-colors"
```

---

## Resumen rápido para AI agents

Cuando generes código para Strata DS, antes de escribir cualquier className:
1. ¿Es un color? → Usa token semántico (`bg-background`, `text-foreground`, `text-success`)
2. ¿Es lime/brand? → Solo como fondo de acción primaria, nunca como texto
3. ¿Tiene dark mode? → Si usas tokens semánticos, ya está cubierto automáticamente
4. ¿Es interactivo? → Agrega hover + transition
5. ¿Dudas del token correcto? → Consulta `tokens/token-reference.md`
