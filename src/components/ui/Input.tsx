import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Input Component - Token-Based Design
 * 
 * Uses CSS custom properties from design tokens for easy theming.
 * Supports different states and full accessibility.
 */

const inputVariants = cva(
    [
        'flex w-full rounded-[var(--input-border-radius)]',
        'border-[var(--input-border-width)] border-[var(--input-border)]',
        'bg-[var(--input-background)] text-[var(--input-text)]',
        'px-[var(--input-padding-x)] py-[var(--input-padding-y)]',
        'text-[var(--input-font-size)]',
        'placeholder:text-[var(--input-placeholder)]',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--input-border-focus)] focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'disabled:bg-[var(--input-background-disabled)]',
        'hover:border-[var(--input-border-hover)]',
        'transition-colors',
    ].join(' '),
    {
        variants: {
            inputSize: {
                sm: 'h-8 text-xs',
                md: 'h-10 text-sm',
                lg: 'h-12 text-base',
            },
        },
        defaultVariants: {
            inputSize: 'md',
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, inputSize, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(inputVariants({ inputSize, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';

export { Input, inputVariants };
