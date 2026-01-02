import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="group"
                className={cn(
                    "inline-flex -space-x-px rounded-md shadow-sm",
                    // Reset rounded corners for inner buttons
                    "[&>button:first-child]:rounded-r-none",
                    "[&>button:last-child]:rounded-l-none",
                    "[&>button:not(:first-child):not(:last-child)]:rounded-none",
                    // Ensure focus rings and borders sit above siblings
                    "[&>button:focus-visible]:relative [&>button:focus-visible]:z-10",
                    "[&>button:hover]:relative [&>button:hover]:z-10",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ButtonGroup.displayName = "ButtonGroup";
