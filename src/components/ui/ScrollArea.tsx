import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * ScrollArea Component - Token-Based Design
 * 
 * Custom scrollable area with styled scrollbars.
 */

const scrollAreaVariants = cva(
    'relative overflow-hidden'
);

const scrollAreaViewportVariants = cva(
    'h-full w-full rounded-[inherit]'
);

const scrollAreaScrollbarVariants = cva(
    [
        'flex touch-none select-none transition-colors',
        'hover:bg-[var(--color-background-secondary)]',
    ].join(' '),
    {
        variants: {
            orientation: {
                vertical: 'h-full w-2.5 border-l border-l-transparent p-[1px]',
                horizontal: 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            },
        },
        defaultVariants: {
            orientation: 'vertical',
        },
    }
);

const scrollAreaThumbVariants = cva(
    [
        'relative flex-1 rounded-full',
        'bg-[var(--color-border-default)]',
        'hover:bg-[var(--color-border-strong)]',
    ].join(' ')
);

export interface ScrollAreaProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollAreaVariants> { }

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(scrollAreaVariants(), className)}
                {...props}
            >
                <div className={scrollAreaViewportVariants()}>
                    <div style={{ minWidth: '100%', display: 'table' }}>
                        {children}
                    </div>
                </div>
                <div className={cn(scrollAreaScrollbarVariants({ orientation: 'vertical' }), 'absolute right-0 top-0')}>
                    <div className={scrollAreaThumbVariants()} />
                </div>
            </div>
        );
    }
);

ScrollArea.displayName = 'ScrollArea';

export { ScrollArea, scrollAreaVariants };
