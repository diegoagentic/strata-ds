import * as React from "react"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode
}

export function Link({ className, ...props }: LinkProps) {
    return (
        <a
            {...props}
            className={className}
        />
    )
}
