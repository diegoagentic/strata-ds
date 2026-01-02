import * as React from 'react';

/**
 * ThemeProvider Component
 * 
 * Provides easy theme customization by injecting CSS custom properties.
 * Allows consumers to override design tokens at any level of the component tree.
 */

export interface ThemeConfig {
    [key: string]: string | number;
}

export interface ThemeProviderProps {
    theme?: ThemeConfig;
    children: React.ReactNode;
    className?: string;
}

export function ThemeProvider({ theme, children, className }: ThemeProviderProps) {
    const style = React.useMemo(() => {
        if (!theme) return undefined;

        // Convert theme object to CSS custom properties
        const cssVars: Record<string, string> = {};
        Object.entries(theme).forEach(([key, value]) => {
            // Add -- prefix if not present
            const cssKey = key.startsWith('--') ? key : `--${key}`;
            cssVars[cssKey] = String(value);
        });

        return cssVars as React.CSSProperties;
    }, [theme]);

    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
}

/**
 * useTheme Hook
 * 
 * Access current theme values programmatically
 */
export function useTheme() {
    const getTokenValue = React.useCallback((tokenName: string) => {
        const cssVarName = tokenName.startsWith('--') ? tokenName : `--${tokenName}`;
        return getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim();
    }, []);

    const setTokenValue = React.useCallback((tokenName: string, value: string) => {
        const cssVarName = tokenName.startsWith('--') ? tokenName : `--${tokenName}`;
        document.documentElement.style.setProperty(cssVarName, value);
    }, []);

    return {
        getTokenValue,
        setTokenValue,
    };
}
