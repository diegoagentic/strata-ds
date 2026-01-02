import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { ChevronRight } from 'lucide-react';

/**
 * Breadcrumb Component - Token-Based Design
 * 
 * Navigation breadcrumbs for showing current location in hierarchy.
 */

const breadcrumbVariants = cva(
    'flex items-center text-sm text-[var(--color-text-secondary)]'
);

const breadcrumbItemVariants = cva(
    'inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)] transition-colors'
);

const breadcrumbSeparatorVariants = cva(
    'mx-2 text-[var(--color-text-tertiary)]'
);

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> { }

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
    href?: string;
    isCurrentPage?: boolean;
}

export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLLIElement> { }

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
    ({ className, ...props }, ref) => (
        <nav
            ref={ref}
            aria-label="Breadcrumb"
            className={cn(breadcrumbVariants(), className)}
            {...props}
        />
    )
);

Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.OlHTMLAttributes<HTMLOListElement>>(
    ({ className, ...props }, ref) => (
        <ol
            ref={ref}
            className={cn('flex items-center gap-0', className)}
            {...props}
        />
    )
);

BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
    ({ className, href, isCurrentPage, children, ...props }, ref) => {
        const content = href ? (
            <a href={href} className={cn(breadcrumbItemVariants(), className)}>
                {children}
            </a>
        ) : (
            <span className={cn(breadcrumbItemVariants(), className)}>{children}</span>
        );

        return (
            <li
                ref={ref}
                aria-current={isCurrentPage ? 'page' : undefined}
                className={cn(isCurrentPage && 'text-[var(--color-text-primary)] font-medium')}
                {...props}
            >
                {content}
            </li>
        );
    }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
    ({ className, children, ...props }, ref) => (
        <li
            ref={ref}
            role="presentation"
            aria-hidden="true"
            className={cn(breadcrumbSeparatorVariants(), className)}
            {...props}
        >
            {children || <ChevronRight className="h-4 w-4" />}
        </li>
    )
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator };
