import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

/**
 * Pagination Component - Token-Based Design
 * 
 * Pagination controls for navigating through pages.
 */

const paginationVariants = cva(
    'flex items-center justify-center gap-1'
);

const paginationItemVariants = cva(
    [
        'inline-flex items-center justify-center',
        'h-9 min-w-[36px] px-3',
        'text-sm font-medium',
        'rounded-[var(--borderRadius-md)]',
        'transition-colors',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
    ].join(' '),
    {
        variants: {
            variant: {
                default: [
                    'hover:bg-[var(--color-background-secondary)]',
                    'text-[var(--color-text-primary)]',
                ].join(' '),
                active: [
                    'bg-[var(--color-interactive-default)]',
                    'text-[var(--color-text-inverse)]',
                    'hover:bg-[var(--color-interactive-hover)]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> { }

export interface PaginationItemProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationItemVariants> {
    isActive?: boolean;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
    ({ className, ...props }, ref) => (
        <nav
            ref={ref}
            role="navigation"
            aria-label="Pagination"
            className={cn(paginationVariants(), className)}
            {...props}
        />
    )
);

Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
    ({ className, ...props }, ref) => (
        <ul
            ref={ref}
            className={cn('flex items-center gap-1', className)}
            {...props}
        />
    )
);

PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
    ({ className, ...props }, ref) => (
        <li ref={ref} className={cn('', className)} {...props} />
    )
);

PaginationItem.displayName = 'PaginationItem';

const PaginationButton = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
    ({ className, variant, isActive, ...props }, ref) => (
        <button
            ref={ref}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
                paginationItemVariants({ variant: isActive ? 'active' : variant }),
                className
            )}
            {...props}
        />
    )
);

PaginationButton.displayName = 'PaginationButton';

const PaginationPrevious = React.forwardRef<HTMLButtonElement, Omit<PaginationItemProps, 'variant'>>(
    ({ className, ...props }, ref) => (
        <PaginationButton
            ref={ref}
            aria-label="Go to previous page"
            className={cn('gap-1 pl-2.5', className)}
            {...props}
        >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
        </PaginationButton>
    )
);

PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = React.forwardRef<HTMLButtonElement, Omit<PaginationItemProps, 'variant'>>(
    ({ className, ...props }, ref) => (
        <PaginationButton
            ref={ref}
            aria-label="Go to next page"
            className={cn('gap-1 pr-2.5', className)}
            {...props}
        >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
        </PaginationButton>
    )
);

PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ className, ...props }, ref) => (
        <span
            ref={ref}
            aria-hidden
            className={cn('flex h-9 w-9 items-center justify-center', className)}
            {...props}
        >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More pages</span>
        </span>
    )
);

PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationButton,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    paginationItemVariants,
};
