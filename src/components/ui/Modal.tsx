import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

/**
 * Modal Component - Token-Based Design
 * 
 * Accessible modal dialog with overlay.
 * Uses design tokens for background, shadow, and overlay styling.
 */

const modalVariants = cva(
    [
        'fixed z-50',
        'bg-[var(--modal-background)]',
        'rounded-[var(--modal-border-radius)]',
        'p-[var(--modal-padding)]',
        'shadow-[var(--modal-shadow)]',
        'border border-[var(--color-border-default)]',
    ].join(' '),
    {
        variants: {
            size: {
                sm: 'max-w-sm',
                md: 'max-w-md',
                lg: 'max-w-lg',
                xl: 'max-w-xl',
                full: 'max-w-full mx-4',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);

export interface ModalProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
    open?: boolean;
    onClose?: () => void;
    showCloseButton?: boolean;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
    ({ className, size, open = false, onClose, showCloseButton = true, children, ...props }, ref) => {
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
                {/* Overlay */}
                <div
                    className="fixed inset-0 z-40 bg-[var(--modal-overlay)]"
                    onClick={onClose}
                    aria-hidden="true"
                />

                {/* Modal */}
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        ref={ref}
                        className={cn(modalVariants({ size, className }))}
                        role="dialog"
                        aria-modal="true"
                        {...props}
                    >
                        {showCloseButton && onClose && (
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            </>
        );
    }
);

Modal.displayName = 'Modal';

// Modal sub-components
const ModalHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
        {...props}
    />
));
ModalHeader.displayName = 'ModalHeader';

const ModalTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        {...props}
    />
));
ModalTitle.displayName = 'ModalTitle';

const ModalDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-[var(--color-text-secondary)]', className)}
        {...props}
    />
));
ModalDescription.displayName = 'ModalDescription';

const ModalContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('py-4', className)} {...props} />
));
ModalContent.displayName = 'ModalContent';

const ModalFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
        {...props}
    />
));
ModalFooter.displayName = 'ModalFooter';

export {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalContent,
    ModalFooter,
    modalVariants,
};
