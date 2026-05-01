import { useEffect } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';

type Theme = 'light' | 'dark';

/**
 * Keeps ThemeProvider state in sync with `document.documentElement` after Storybook's
 * `withThemeByClassName` runs (its useEffect runs after nested providers).
 */
export function StorybookDomThemeBridge(): null {
  const { setTheme } = useThemeContext();

  useEffect(() => {
    const root = document.documentElement;
    const readDomTheme = (): Theme => (root.classList.contains('dark') ? 'dark' : 'light');

    const syncFromDom = (): void => {
      setTheme(readDomTheme());
    };

    const observer = new MutationObserver(syncFromDom);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(syncFromDom);
    });

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [setTheme]);

  return null;
}
