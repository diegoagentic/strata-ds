import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Check, X, Circle } from 'lucide-react';

/**
 * Toast Component - Token-Based Design
 * 
 * Temporary notification messages.
 */

const toastVariants = cva(
    [
        'fixed bottom-4 right-4 z-50',
        'flex items-center gap-3',
        'w-full max-w-sm',
        'rounded-[var(--borderRadius-lg)]',
        'border',
        'p-4',
        'shadow-lg',
        'transition-all',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-80 data-[state=open]:fade-in-0',
        'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full',
    ].join(' '),
    {
        variants: {
            variant: {
                default: [
                    'bg-[var(--color-background-primary)]',
                    'border-[var(--color-border-default)]',
                    'text-[var(--color-text-primary)]',
                ].join(' '),
                success: [
                    'bg-[var(--color-feedback-success-bg)]',
                    'border-[var(--color-feedback-success-border)]',
                    'text-[var(--color-feedback-success)]',
                ].join(' '),
                error: [
                    'bg-[var(--color-feedback-error-bg)]',
                    'border-[var(--color-feedback-error-border)]',
                    'text-[var(--color-feedback-error)]',
                ].join(' '),
                warning: [
                    'bg-[var(--color-feedback-warning-bg)]',
                    'border-[var(--color-feedback-warning-border)]',
                    'text-[var(--color-feedback-warning)]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const iconMap = {
    default: Circle,
    success: Check,
    error: X,
    warning: Circle,
};

export interface ToastProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    duration?: number;
    title?: string;
    description?: string;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
    ({
        className,
        variant = 'default',
        open = false,
        onOpenChange,
        duration = 5000,
        title,
        description,
        children,
        ...props
    }, ref) => {
        React.useEffect(() => {
            if (open && duration > 0) {
                const timer = setTimeout(() => {
                    onOpenChange?.(false);
                }, duration);

                return () => clearTimeout(timer);
            }
        }, [open, duration, onOpenChange]);

        if (!open) return null;

        const Icon = iconMap[variant || 'default'];

        return (
            <div
                ref={ref}
                role="alert"
                data-state={open ? 'open' : 'closed'}
                className={cn(toastVariants({ variant }), className)}
                {...props}
            >
                <Icon className="h-5 w-5 shrink-0" />
                <div className="flex-1">
                    {title && <div className="font-semibold">{title}</div>}
                    {description && (
                        <div className="text-sm opacity-90">{description}</div>
                    )}
                    {children}
                </div>
                <button
                    onClick={() => onOpenChange?.(false)}
                    className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        );
    }
);

Toast.displayName = 'Toast';

// Toast Provider for managing multiple toasts
export interface ToastProviderProps {
    children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    return <>{children}</>;
};

export { Toast, toastVariants };
