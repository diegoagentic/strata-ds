import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Radio Component - Token-Based Design
 * 
 * Radio button for single selection from options.
 */

const radioVariants = cva(
    [
        'aspect-square h-[var(--radio-height)] w-[var(--radio-width)] rounded-full',
        'border border-[var(--radio-border)]',
        'text-[var(--color-text-inverse)]',
        'ring-offset-[var(--color-background-primary)]',
        'focus:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--radio-ring-focus)] focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-[var(--radio-background)]',
        'data-[state=checked]:border-[var(--radio-border-checked)]',
    ].join(' ')
);

export interface RadioProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof radioVariants> { }

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className, checked, ...props }, ref) => {
        return (
            <div className="relative inline-flex items-center">
                <input
                    type="radio"
                    className={cn(radioVariants(), className)}
                    ref={ref}
                    checked={checked}
                    data-state={checked ? 'checked' : 'unchecked'}
                    {...props}
                />
                {checked && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="h-2 w-2 rounded-full bg-[var(--color-text-inverse)]" />
                    </div>
                )}
            </div>
        );
    }
);

Radio.displayName = 'Radio';

// RadioGroup for managing multiple radios
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    onValueChange?: (value: string) => void;
    name?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ className, value, onValueChange, name, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="radiogroup"
                className={cn('grid gap-2', className)}
                {...props}
            >
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, {
                            name,
                            checked: child.props.value === value,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                                if (e.target.checked) {
                                    onValueChange?.(child.props.value);
                                }
                            },
                        });
                    }
                    return child;
                })}
            </div>
        );
    }
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup, radioVariants };
