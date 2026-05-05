import * as React from "react"
import { cn } from '@/utils';
import { Label } from '../application-ui/label';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

export function Field({ className, children, ...props }: FieldProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)} {...props}>
            {children}
        </div>
    )
}

export interface FieldLabelProps extends React.ComponentProps<typeof Label> {
    optional?: boolean
}

export function FieldLabel({ className, optional, children, ...props }: FieldLabelProps) {
    return (
        <Label className={cn("flex w-full items-center justify-between", className)} {...props}>
            <span>{children}</span>
            {optional && <span className="text-muted-foreground font-normal text-xs">Optional</span>}
        </Label>
    )
}

export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function FieldDescription({ className, ...props }: FieldDescriptionProps) {
    return (
        <p
            className={cn("text-xs text-muted-foreground", className)}
            {...props}
        />
    )
}

export type FieldErrorProps = React.HTMLAttributes<HTMLParagraphElement>;

export function FieldError({ className, ...props }: FieldErrorProps) {
    return (
        <p
            className={cn("text-xs font-medium text-destructive", className)}
            {...props}
        />
    )
}
