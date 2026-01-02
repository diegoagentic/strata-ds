import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

/**
 * Select Component - Token-Based Design
 * 
 * Dropdown select input using design tokens.
 */

const selectVariants = cva(
    [
        'flex h-10 w-full items-center justify-between',
        'rounded-[var(--input-border-radius)]',
        'border-[var(--input-border-width)] border-[var(--input-border)]',
        'bg-[var(--input-background)] text-[var(--input-text)]',
        'px-[var(--input-padding-x)] py-[var(--input-padding-y)]',
        'text-[var(--input-font-size)]',
        'focus:outline-none focus:ring-2',
        'focus:ring-[var(--input-border-focus)] focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'disabled:bg-[var(--input-background-disabled)]',
        'hover:border-[var(--input-border-hover)]',
        'transition-colors',
        'appearance-none',
        'cursor-pointer',
    ].join(' ')
);

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> { }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className="relative">
                <select
                    className={cn(selectVariants(), 'pr-10', className)}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
            </div>
        );
    }
);

Select.displayName = 'Select';

export { Select, selectVariants };
