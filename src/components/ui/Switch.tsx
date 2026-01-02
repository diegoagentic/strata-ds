import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Switch Component - Token-Based Design
 * 
 * Toggle switch for binary states using design tokens.
 */

const switchVariants = cva(
    [
        'peer inline-flex h-[var(--switch-height)] w-[var(--switch-width)] shrink-0 cursor-pointer items-center',
        'rounded-full border-2 border-transparent',
        'transition-[var(--switch-transition)]',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--switch-ring-focus)] focus-visible:ring-offset-2',
        'focus-visible:ring-offset-[var(--color-background-primary)]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-[var(--switch-background-checked)]',
        'data-[state=unchecked]:bg-[var(--switch-background)]',
    ].join(' ')
);

const switchThumbVariants = cva(
    [
        'pointer-events-none block h-[var(--switch-thumb-size)] w-[var(--switch-thumb-size)] rounded-full',
        'bg-[var(--switch-thumb-background)]',
        'shadow-lg ring-0 transition-transform',
        'data-[state=checked]:translate-x-5',
        'data-[state=unchecked]:translate-x-0',
    ].join(' ')
);

export interface SwitchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof switchVariants> {
    onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className, checked, onCheckedChange, onChange, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            onCheckedChange?.(e.target.checked);
        };

        return (
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    ref={ref}
                    checked={checked}
                    onChange={handleChange}
                    {...props}
                />
                <div
                    className={cn(switchVariants(), className)}
                    data-state={checked ? 'checked' : 'unchecked'}
                >
                    <span
                        className={switchThumbVariants()}
                        data-state={checked ? 'checked' : 'unchecked'}
                    />
                </div>
            </label>
        );
    }
);

Switch.displayName = 'Switch';

export { Switch, switchVariants };
