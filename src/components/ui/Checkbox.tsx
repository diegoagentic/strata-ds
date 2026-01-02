import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Check } from 'lucide-react';

/**
 * Checkbox Component - Token-Based Design
 * 
 * Accessible checkbox with custom styling using design tokens.
 */

const checkboxVariants = cva(
    [
        'peer h-[var(--checkbox-height)] w-[var(--checkbox-width)] shrink-0',
        'rounded-[var(--checkbox-border-radius)]',
        'border border-[var(--checkbox-border)]',
        'ring-offset-[var(--color-background-primary)]',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--checkbox-ring-focus)] focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-[var(--checkbox-background-checked)]',
        'data-[state=checked]:text-[var(--checkbox-text-checked)]',
        'data-[state=checked]:border-[var(--checkbox-border-checked)]',
    ].join(' ')
);

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof checkboxVariants> {
    onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, checked, onCheckedChange, onChange, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            onCheckedChange?.(e.target.checked);
        };

        return (
            <div className="relative inline-flex items-center">
                <input
                    type="checkbox"
                    className={cn(checkboxVariants(), className)}
                    ref={ref}
                    checked={checked}
                    onChange={handleChange}
                    data-state={checked ? 'checked' : 'unchecked'}
                    {...props}
                />
                {checked && (
                    <Check className="absolute h-3 w-3 pointer-events-none left-0.5 top-0.5 text-[var(--color-text-inverse)]" />
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };
