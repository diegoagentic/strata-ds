import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * AspectRatio Component - Token-Based Design
 * 
 * Maintains aspect ratio for content.
 */

const aspectRatioVariants = cva(
    'relative w-full'
);

export interface AspectRatioProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aspectRatioVariants> {
    ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ className, ratio = 16 / 9, children, style, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(aspectRatioVariants(), className)}
                style={{
                    paddingBottom: `${100 / ratio}%`,
                    ...style,
                }}
                {...props}
            >
                <div className="absolute inset-0">{children}</div>
            </div>
        );
    }
);

AspectRatio.displayName = 'AspectRatio';

export { AspectRatio, aspectRatioVariants };
