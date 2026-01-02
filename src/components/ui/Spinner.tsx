import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

/**
 * Spinner Component - Token-Based Design
 * 
 * Loading spinner indicator.
 */

const spinnerVariants = cva(
    'animate-spin text-[var(--color-text-secondary)]',
    {
        variants: {
            size: {
                sm: 'h-4 w-4',
                md: 'h-6 w-6',
                lg: 'h-8 w-8',
                xl: 'h-12 w-12',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
    label?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size, label = 'Loading...', ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="status"
                aria-label={label}
                className={cn('inline-flex items-center justify-center', className)}
                {...props}
            >
                <Loader2 className={cn(spinnerVariants({ size }))} />
                <span className="sr-only">{label}</span>
            </div>
        );
    }
);

Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
