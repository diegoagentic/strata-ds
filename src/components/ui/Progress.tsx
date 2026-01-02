import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Progress Component - Token-Based Design
 * 
 * Progress indicator for loading states.
 */

const progressVariants = cva(
    [
        'relative h-4 w-full overflow-hidden',
        'rounded-full',
        'bg-[var(--color-background-secondary)]',
    ].join(' ')
);

const progressIndicatorVariants = cva(
    [
        'h-full w-full flex-1',
        'bg-[var(--color-interactive-default)]',
        'transition-all',
    ].join(' ')
);

export interface ProgressProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
    value?: number;
    max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, max = 100, ...props }, ref) => {
        const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

        return (
            <div
                ref={ref}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={value}
                className={cn(progressVariants(), className)}
                {...props}
            >
                <div
                    className={progressIndicatorVariants()}
                    style={{ transform: `translateX(-${100 - percentage}%)` }}
                />
            </div>
        );
    }
);

Progress.displayName = 'Progress';

export { Progress, progressVariants };
