import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Label Component - Token-Based Design
 * 
 * Form label with proper accessibility.
 */

const labelVariants = cva(
    [
        'text-sm font-medium leading-none',
        'text-[var(--color-text-primary)]',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ].join(' ')
);

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> { }

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => (
        <label
            ref={ref}
            className={cn(labelVariants(), className)}
            {...props}
        />
    )
);

Label.displayName = 'Label';

export { Label, labelVariants };
