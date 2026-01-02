import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

/**
 * Dialog Component - Token-Based Design
 * 
 * Modal dialog for important interactions (similar to Modal but with different semantics).
 */

const dialogOverlayVariants = cva(
    [
        'fixed inset-0 z-50',
        'bg-[var(--dialog-overlay)]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ].join(' ')
);

const dialogContentVariants = cva(
    [
        'fixed left-[50%] top-[50%] z-50',
        'translate-x-[-50%] translate-y-[-50%]',
        'w-full max-w-lg',
        'gap-4 border border-[var(--dialog-border)]',
        'bg-[var(--dialog-background)]',
        'p-6',
        'shadow-lg',
        'duration-200',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        'rounded-[var(--dialog-border-radius)]',
    ].join(' ')
);

export interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    if (!open) return null;

    return (
        <>
            <div
                className={dialogOverlayVariants()}
                data-state={open ? 'open' : 'closed'}
                onClick={() => onOpenChange?.(false)}
            />
            {children}
        </>
    );
};

const DialogContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }
>(({ className, children, onClose, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(dialogContentVariants(), className)}
        data-state="open"
        {...props}
    >
        {children}
        {onClose && (
            <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </button>
        )}
    </div>
));

DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
        {...props}
    />
));

DialogHeader.displayName = 'DialogHeader';

const DialogTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        {...props}
    />
));

DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-[var(--color-text-secondary)]', className)}
        {...props}
    />
));

DialogDescription.displayName = 'DialogDescription';

const DialogFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
        {...props}
    />
));

DialogFooter.displayName = 'DialogFooter';

export {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
};
