import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Textarea Component - Token-Based Design
 * 
 * Multi-line text input using design tokens.
 */

const textareaVariants = cva(
    [
        'flex min-h-[80px] w-full',
        'rounded-[var(--input-border-radius)]',
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
        'resize-y',
    ].join(' ')
);

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(textareaVariants(), className)}
                ref={ref}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
