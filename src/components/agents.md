# 🧠 Agent Memory: Components Folder

Tactical memory for app-level components in `src/components/`. Update when fixing bugs or adding conventions that apply only in this folder.

## 📌 Critical Lessons

- **2026-03-19:** Base UI primitives live under `src/components/application-ui`, `forms`, `overlays`, and `data-visualization`. `@/design-system/components/ui` re-exports them for backward compatibility; prefer `@/components/...` for new code. Catalyst stays under `@/design-system/components/catalyst/`. Do not duplicate primitives with raw one-off controls.
- **2025-03-13:** Icons: import from `lucide-react`, `@heroicons/react`, or `@tabler/icons-react` only. Keep icon usage consistent across components.

## 🛑 Known Issues

- (None yet. Document component-specific bugs and workarounds here.)

## 🏗️ Local Conventions

- **Scope:** This folder holds both **base UI primitives** (grouped by domain: `application-ui`, `forms`, `overlays`, `data-visualization`) and **application-level** composites (e.g. navbar, kpi-card). Catalyst/Hero patterns remain under `src/design-system/components/catalyst/`.
- **Stories:** Each component should have a co-located `*.stories.tsx` with default and variant stories; use argTypes for Storybook controls.
- **Text/colors:** Use semantic tokens (`text-foreground`, `text-muted-foreground`) from the design system; do not hardcode hex or Tailwind color names for text.

## 🔗 Dependencies

- **Design system:** Primitives are in this folder; `@/design-system/components/ui` re-exports for backward compatibility. Catalyst: `@/design-system/components/catalyst/`.
- **Context:** Theme and app context from `@/contexts/ThemeContext` when needed.
