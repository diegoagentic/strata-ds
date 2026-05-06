# Regla 02 — Uso de Brand Colors (Lime)

## El color brand es un SEÑALIZADOR, no un color de base

Brand (lime #E6F993 / #C3E433) existe para llamar la atención hacia **una acción o estado específico**. No es un color de relleno general.

---

## Dónde SÍ usar brand

### 1. Botón de acción primaria (CTA)

```tsx
// Light mode
<button className="bg-brand-300 text-zinc-900 hover:bg-brand-400 transition-colors">
  Acción Principal
</button>

// Dark mode
<button className="bg-brand-400 text-zinc-900 hover:bg-brand-500 transition-colors">
  Acción Principal
</button>

// Con token semántico (recomendado — adapta modo automáticamente)
<button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
  Acción Principal
</button>
```

### 2. Indicador de elemento activo / seleccionado

```tsx
// Nav item activo
<NavItem className="border-l-2 border-primary text-foreground bg-primary/10">
  Dashboard
</NavItem>

// Tab activo
<Tab className="border-b-2 border-primary text-foreground">
  Transacciones
</Tab>
```

### 3. Acento decorativo en cards branded

```tsx
// Borde superior de card destacada
<Card className="bg-card border border-border">
  <div className="h-1 bg-brand-400 rounded-t-lg" />
  {/* contenido */}
</Card>
```

### 4. Fondo de contenedor de ícono de acción

```tsx
// Ícono en contexto de acción principal
<div className="bg-primary/15 rounded-lg p-2">
  <SparklesIcon className="text-primary w-5 h-5" />
</div>
```

### 5. Focus ring / indicador de foco

```tsx
<input className="focus:ring-2 focus:ring-primary focus:ring-offset-2" />
```

---

## Dónde NO usar brand

| Caso | Por qué |
|---|---|
| Texto corrido sobre fondo claro | Contraste 1.8:1 — falla WCAG |
| Headings o títulos | No es color de texto |
| Fondo de sección completa | Demasiado dominante, pierde señal |
| Bordes de inputs en estado normal | Reservado para foco/activo |
| Iconos de estado (success, error) | Usar tokens semánticos de estado |
| Badges informativos | Usar tokens info/success/warning |

---

## Escala brand completa

```
brand-50:  #fdfee7  — casi blanco, muy sutil
brand-100: #f9fdc3  — tint muy claro
brand-200: #f4fb89  — tint claro
brand-300: #E6F993  — ← PRIMARY LIGHT MODE (CTA)
brand-400: #C3E433  — ← PRIMARY DARK MODE (CTA) / hover light
brand-500: #a3c414  — hover dark / decoración fuerte
brand-600: #A0C114  — bordes de énfasis
brand-700: #7a9410  — texto sobre brand (accesible)
brand-800: #5c6f0f  — texto oscuro sobre brand
brand-900: #4a5810  — muy oscuro
brand-950: #233502  — casi negro brand
```

### Regla de contraste con brand de fondo:
- Sobre `brand-300` → siempre `text-zinc-900` o `text-primary-foreground` (#02060C)
- Sobre `brand-400` → siempre `text-zinc-900` (#02060C)
- NUNCA `text-white` sobre brand-300/400 (contraste insuficiente)

---

## Pattern: Branded Card completa

```tsx
// Light mode
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
  <div className="h-1 bg-brand-400" />
  <div className="p-6">
    <h3 className="text-zinc-900 font-semibold">Título</h3>
    <p className="text-zinc-500 text-sm">Descripción secundaria</p>
    <button className="mt-4 bg-brand-300 text-zinc-900 hover:bg-brand-400 px-4 py-2 rounded-lg transition-colors">
      Acción
    </button>
  </div>
</div>

// Dark mode (usando tokens semánticos para que sea automático)
<div className="bg-card border border-border rounded-xl overflow-hidden">
  <div className="h-1 bg-primary" />
  <div className="p-6">
    <h3 className="text-foreground font-semibold">Título</h3>
    <p className="text-muted-foreground text-sm">Descripción secundaria</p>
    <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors">
      Acción
    </button>
  </div>
</div>
```
