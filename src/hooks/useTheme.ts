import { useThemeContext } from '../contexts/ThemeContext';
import type { ThemeContextValue } from '../contexts/ThemeContext';

/**
 * Use theme from ThemeProvider. Must be used within a ThemeProvider.
 * Wrap your app with ThemeProvider to ensure theme changes propagate correctly.
 */
export function useTheme(): ThemeContextValue {
  return useThemeContext();
}
