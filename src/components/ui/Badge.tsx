import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Badge Component - Token-Based Design
 * 
 * Small status indicators with semantic variants.
 * Uses design tokens for consistent theming across variants.
 */

const badgeVariants = cva(
    [
        'inline-flex items-center',
        'rounded-[var(--badge-default-border-radius)]',
        'px-[var(--badge-default-padding-x)] py-[var(--badge-default-padding-y)]',
        'text-[var(--badge-default-font-size)]',
        'font-[var(--badge-default-font-weight)]',
        'transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
    ].join(' '),
    {
        variants: {
            variant: {
                default: [
                    'bg-[var(--badge-default-background)]',
                    'text-[var(--badge-default-text)]',
                    'border border-transparent',
                ].join(' '),
                success: [
                    'bg-[var(--badge-success-background)]',
                    'text-[var(--badge-success-text)]',
                    'border border-[var(--badge-success-border)]',
                ].join(' '),
                warning: [
                    'bg-[var(--badge-warning-background)]',
                    'text-[var(--badge-warning-text)]',
                    'border border-[var(--badge-warning-border)]',
                ].join(' '),
                error: [
                    'bg-[var(--badge-error-background)]',
                    'text-[var(--badge-error-text)]',
                    'border border-[var(--badge-error-border)]',
                ].join(' '),
                outline: [
                    'bg-transparent',
                    'text-[var(--color-text-primary)]',
                    'border border-[var(--color-border-default)]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
