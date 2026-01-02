
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Button Component - Token-Based Design
 * 
 * Uses CSS custom properties from design tokens for easy theming.
 * All visual properties can be customized by overriding CSS variables.
 */

// CVA handles Layout + Backgrounds (via Generic Classes) + Border
// Text Color is handled via inline style enforcement
const buttonVariants = cva(
    // Base styles
    'inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
    {
        variants: {
            variant: {
                // Backgrounds use var(--btn-bg) mapped in the component
                primary: 'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] active:bg-[var(--btn-bg-active)] disabled:bg-[var(--btn-bg-disabled)]',
                secondary: 'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] active:bg-[var(--btn-bg-active)] border border-[var(--button-secondary-border)]',
                outline: 'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] hover:border-[var(--button-outline-border-hover)] border-2 border-[var(--button-outline-border)]',
                ghost: 'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)]',
                destructive: 'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)]',
            },
            size: {
                sm: 'h-[var(--button-sizes-sm-height)] px-[var(--button-sizes-sm-padding-x)] text-[var(--button-sizes-sm-font-size)] rounded-[var(--button-primary-border-radius)]',
                md: 'h-[var(--button-sizes-md-height)] px-[var(--button-sizes-md-padding-x)] text-[var(--button-sizes-md-font-size)] rounded-[var(--button-primary-border-radius)]',
                lg: 'h-[var(--button-sizes-lg-height)] px-[var(--button-sizes-lg-padding-x)] text-[var(--button-sizes-lg-font-size)] rounded-[var(--button-primary-border-radius)]',
                xl: 'h-[var(--button-sizes-xl-height)] px-[var(--button-sizes-xl-padding-x)] text-[var(--button-sizes-xl-font-size)] rounded-[var(--button-primary-border-radius)]',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size, style, disabled, ...props }, ref) => {

        // Map variant to specific tokens
        const variantStyles = React.useMemo(() => {
            const v = variant || 'primary';
            const styles: React.CSSProperties & Record<string, string> = {
                '--btn-text': `var(--button-${v}-text)`,
                '--btn-bg': `var(--button-${v}-background)`,
                '--btn-bg-hover': `var(--button-${v}-background-hover)`,
                '--btn-bg-active': `var(--button-${v}-background-active, var(--button-${v}-background))`,
            };

            if (v === 'primary') {
                styles['--btn-bg-disabled'] = `var(--button-primary-background-disabled)`;
                styles['--btn-text-disabled'] = `var(--button-primary-text-disabled)`;
            }

            return styles;
        }, [variant]);

        // Explicitly handle Text Color to bypass Tailwind issues
        let textColor = 'var(--btn-text)';
        if (disabled && variant === 'primary') {
            textColor = 'var(--btn-text-disabled)';
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                style={{
                    ...variantStyles,
                    color: textColor, // Force text color via inline style
                    ...style
                }}
                disabled={disabled}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
