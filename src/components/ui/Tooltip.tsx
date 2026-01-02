import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Tooltip Component - Token-Based Design
 * 
 * Simple tooltip for additional context.
 */

const tooltipVariants = cva(
    [
        'absolute z-50 px-[var(--tooltip-padding-x)] py-[var(--tooltip-padding-y)]',
        'text-[var(--tooltip-font-size)] font-medium',
        'bg-[var(--tooltip-background)]',
        'text-[var(--tooltip-text)]',
        'rounded-[var(--tooltip-border-radius)]',
        'shadow-md',
        'animate-in fade-in-0 zoom-in-95',
        'pointer-events-none',
    ].join(' '),
    {
        variants: {
            position: {
                top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
                bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
                left: 'right-full top-1/2 -translate-y-1/2 mr-2',
                right: 'left-full top-1/2 -translate-y-1/2 ml-2',
            },
        },
        defaultVariants: {
            position: 'top',
        },
    }
);

export interface TooltipProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof tooltipVariants> {
    content: React.ReactNode;
    children: React.ReactNode;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
    ({ className, position, content, children, ...props }, ref) => {
        const [isVisible, setIsVisible] = React.useState(false);

        return (
            <div
                ref={ref}
                className="relative inline-block"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                {...props}
            >
                {children}
                {isVisible && (
                    <div className={cn(tooltipVariants({ position }), className)}>
                        {content}
                    </div>
                )}
            </div>
        );
    }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip, tooltipVariants };
