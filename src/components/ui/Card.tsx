import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Card Component - Token-Based Design
 * 
 * Flexible container component with consistent styling.
 * Uses design tokens for background, border, padding, and shadow.
 */

const cardVariants = cva(
    [
        'rounded-[var(--card-border-radius)]',
        'border border-[var(--card-border)]',
        'bg-[var(--card-background)]',
        'text-[var(--color-text-primary)]',
        'shadow-[var(--card-shadow)]',
    ].join(' '),
    {
        variants: {
            padding: {
                none: 'p-0',
                sm: 'p-4',
                md: 'p-[var(--card-padding)]',
                lg: 'p-8',
            },
        },
        defaultVariants: {
            padding: 'md',
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, padding, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(cardVariants({ padding, className }))}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

// Card sub-components for better composition
const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5', className)}
        {...props}
    />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-[var(--color-text-secondary)]', className)}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center pt-0', className)}
        {...props}
    />
));
CardFooter.displayName = 'CardFooter';

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    cardVariants,
};
