import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Popover Component - Token-Based Design
 * 
 * Floating content container for contextual information.
 */

const popoverContentVariants = cva(
    [
        'absolute z-50',
        'w-72 rounded-[var(--popover-border-radius)]',
        'border border-[var(--popover-border)]',
        'bg-[var(--popover-background)]',
        'p-[var(--popover-padding)]',
        'text-[var(--color-text-primary)]',
        'shadow-[var(--popover-shadow)]',
        'outline-none',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ].join(' '),
    {
        variants: {
            side: {
                top: 'bottom-full mb-2',
                bottom: 'top-full mt-2',
                left: 'right-full mr-2',
                right: 'left-full ml-2',
            },
            align: {
                start: 'left-0',
                center: 'left-1/2 -translate-x-1/2',
                end: 'right-0',
            },
        },
        defaultVariants: {
            side: 'bottom',
            align: 'center',
        },
    }
);

export interface PopoverProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger: React.ReactNode;
    children: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
}

const Popover: React.FC<PopoverProps> = ({
    open = false,
    onOpenChange,
    trigger,
    children,
    side = 'bottom',
    align = 'center',
}) => {
    const popoverRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
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
        <div ref={popoverRef} className="relative inline-block">
            <div onClick={() => onOpenChange?.(!open)}>{trigger}</div>
            {open && (
                <div
                    className={cn(popoverContentVariants({ side, align }))}
                    data-state="open"
                >
                    {children}
                </div>
            )}
        </div>
    );
};

Popover.displayName = 'Popover';

export { Popover, popoverContentVariants };
