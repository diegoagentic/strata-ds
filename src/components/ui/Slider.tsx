import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Slider Component - Token-Based Design
 * 
 * Range input slider for selecting values.
 */

const sliderVariants = cva(
    [
        'relative flex w-full touch-none select-none items-center',
    ].join(' ')
);

const sliderTrackVariants = cva(
    [
        'relative h-2 w-full grow overflow-hidden',
        'rounded-full',
        'bg-[var(--color-background-secondary)]',
    ].join(' ')
);

const sliderRangeVariants = cva(
    [
        'absolute h-full',
        'bg-[var(--color-interactive-default)]',
    ].join(' ')
);

const sliderThumbVariants = cva(
    [
        'block h-5 w-5 rounded-full',
        'border-2 border-[var(--color-interactive-default)]',
        'bg-[var(--color-background-primary)]',
        'ring-offset-[var(--color-background-primary)]',
        'transition-colors',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
    ].join(' ')
);

export interface SliderProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onValueChange?: (value: number) => void;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
    ({
        className,
        value: controlledValue,
        defaultValue = 0,
        min = 0,
        max = 100,
        step = 1,
        onValueChange,
        disabled,
        ...props
    }, ref) => {
        const [internalValue, setInternalValue] = React.useState(defaultValue);
        const value = controlledValue ?? internalValue;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = Number(e.target.value);
            setInternalValue(newValue);
            onValueChange?.(newValue);
        };

        const percentage = ((value - min) / (max - min)) * 100;

        return (
            <div
                ref={ref}
                className={cn(sliderVariants(), className)}
                {...props}
            >
                <div className={sliderTrackVariants()}>
                    <div
                        className={sliderRangeVariants()}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />
                <div
                    className={sliderThumbVariants()}
                    style={{ left: `calc(${percentage}% - 10px)` }}
                />
            </div>
        );
    }
);

Slider.displayName = 'Slider';

export { Slider, sliderVariants };
