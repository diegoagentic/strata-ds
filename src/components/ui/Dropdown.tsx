import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Dropdown Component - Token-Based Design
 * 
 * Dropdown menu for actions and navigation.
 */

const dropdownVariants = cva(
    [
        'absolute z-50 min-w-[8rem]',
        'rounded-[var(--borderRadius-md)]',
        'border border-[var(--color-border-default)]',
        'bg-[var(--color-surface-overlay)]',
        'p-1',
        'shadow-md',
        'animate-in fade-in-0 zoom-in-95',
    ].join(' '),
    {
        variants: {
            align: {
                start: 'left-0',
                center: 'left-1/2 -translate-x-1/2',
                end: 'right-0',
            },
        },
        defaultVariants: {
            align: 'start',
        },
    }
);

const dropdownItemVariants = cva(
    [
        'relative flex cursor-pointer select-none items-center',
        'rounded-sm px-2 py-1.5',
        'text-sm',
        'outline-none',
        'transition-colors',
        'focus:bg-[var(--color-background-secondary)]',
        'focus:text-[var(--color-text-primary)]',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ].join(' ')
);

export interface DropdownProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger: React.ReactNode;
}

export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
    ({ className, align, open = false, onOpenChange, trigger, children, ...props }, ref) => {
        const dropdownRef = React.useRef<HTMLDivElement>(null);

        React.useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    onOpenChange?.(false);
                }
            };

            if (open) {
                document.addEventListener('mousedown', handleClickOutside);
            }

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [open, onOpenChange]);

        return (
            <div ref={dropdownRef} className="relative inline-block">
                <div onClick={() => onOpenChange?.(!open)}>{trigger}</div>
                {open && (
                    <div
                        ref={ref}
                        className={cn(dropdownVariants({ align }), 'mt-2', className)}
                        {...props}
                    >
                        {children}
                    </div>
                )}
            </div>
        );
    }
);

Dropdown.displayName = 'Dropdown';

const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
    ({ className, disabled, ...props }, ref) => (
        <div
            ref={ref}
            data-disabled={disabled}
            className={cn(dropdownItemVariants(), className)}
            {...props}
        />
    )
);

DropdownItem.displayName = 'DropdownItem';

const DropdownSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('-mx-1 my-1 h-px bg-[var(--color-border-default)]', className)}
            {...props}
        />
    )
);

DropdownSeparator.displayName = 'DropdownSeparator';

export { Dropdown, DropdownItem, DropdownSeparator, dropdownVariants };
