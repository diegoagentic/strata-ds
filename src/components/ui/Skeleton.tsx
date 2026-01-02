import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Skeleton Component - Token-Based Design
 * 
 * Loading placeholder with pulse animation.
 */

const skeletonVariants = cva(
    [
        'animate-pulse rounded-[var(--borderRadius-md)]',
        'bg-[var(--color-background-secondary)]',
    ].join(' '),
    {
        variants: {
            variant: {
                default: '',
                circle: 'rounded-full',
                text: 'h-4 w-full',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> { }

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(skeletonVariants({ variant }), className)}
                {...props}
            />
        );
    }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton, skeletonVariants };
