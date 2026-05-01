# Agent memory: application-ui stories

## Critical lessons

- 2026-03-19: `parameters.themes.disable` in `@storybook/addon-themes` only hides the **manager** theme switcher; `withThemeByClassName` in `.storybook/preview.ts` still toggles `dark` on `<html>`. That runs **after** `ThemeProvider`’s effect, so React theme state could disagree with the DOM (wrong logo / toggle). Fix: `StorybookDomThemeBridge` + `setTheme` on context, syncing from `document.documentElement.classList` (MutationObserver + double `requestAnimationFrame` for first paint).
- 2026-03-20: For multi-step container components (like create-order flows), stories should mount the full wrapper component and drive behavior with realistic mock datasets instead of creating stories for every internal step subcomponent.
