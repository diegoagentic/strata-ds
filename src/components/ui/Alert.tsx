import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

/**
 * Alert Component - Token-Based Design
 * 
 * Contextual feedback messages with semantic variants.
 */

const alertVariants = cva(
    [
        'relative w-full rounded-[var(--alert-border-radius)]',
        'border p-[var(--alert-padding)]',
        '[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]',
        '[&>svg]:absolute [&>svg]:left-[var(--alert-padding)] [&>svg]:top-[var(--alert-padding)]',
        '[&>svg]:text-[var(--color-text-primary)]',
    ].join(' '),
    {
        variants: {
            variant: {
                default: [
                    'bg-[var(--alert-default-background)]',
                    'text-[var(--alert-default-text)]',
                    'border-[var(--alert-default-border)]',
                ].join(' '),
                success: [
                    'bg-[var(--alert-success-background)]',
                    'text-[var(--alert-success-text)]',
                    'border-[var(--alert-success-border)]',
                    '[&>svg]:text-[var(--alert-success-text)]',
                ].join(' '),
                warning: [
                    'bg-[var(--alert-warning-background)]',
                    'text-[var(--alert-warning-text)]',
                    'border-[var(--alert-warning-border)]',
                    '[&>svg]:text-[var(--alert-warning-text)]',
                ].join(' '),
                error: [
                    'bg-[var(--alert-error-background)]',
                    'text-[var(--alert-error-text)]',
                    'border-[var(--alert-error-border)]',
                    '[&>svg]:text-[var(--alert-error-text)]',
                ].join(' '),
                info: [
                    'bg-[var(--alert-info-background)]',
                    'text-[var(--alert-info-text)]',
                    'border-[var(--alert-info-border)]',
                    '[&>svg]:text-[var(--alert-info-text)]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const iconMap = {
    default: Info,
    success: CheckCircle2,
    warning: AlertTriangle,
    error: AlertCircle,
    info: Info,
};

export interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
    onClose?: () => void;
    showIcon?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = 'default', onClose, showIcon = true, children, ...props }, ref) => {
        const Icon = iconMap[variant || 'default'];

        return (
            <div
                ref={ref}
                role="alert"
                className={cn(alertVariants({ variant }), className)}
                {...props}
            >
                {showIcon && <Icon className="h-4 w-4" />}
                <div className="flex-1">{children}</div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        aria-label="Close"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>
        );
    }
);

Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
    />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };
