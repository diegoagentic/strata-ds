import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Avatar Component - Token-Based Design
 * 
 * User profile image with fallback initials.
 */

const avatarVariants = cva(
    [
        'relative flex shrink-0 overflow-hidden rounded-[var(--avatar-border-radius)]',
        'bg-[var(--avatar-background)]',
        'text-[var(--avatar-text)]',
    ].join(' '),
    {
        variants: {
            size: {
                sm: 'h-8 w-8 text-xs',
                md: 'h-10 w-10 text-sm',
                lg: 'h-12 w-12 text-base',
                xl: 'h-16 w-16 text-lg',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);

export interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, size, src, alt, fallback, ...props }, ref) => {
        const [imageError, setImageError] = React.useState(false);

        return (
            <div
                ref={ref}
                className={cn(avatarVariants({ size }), className)}
                {...props}
            >
                {src && !imageError ? (
                    <img
                        src={src}
                        alt={alt || 'Avatar'}
                        className="aspect-square h-full w-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center font-semibold">
                        {fallback || '?'}
                    </div>
                )}
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';

export { Avatar, avatarVariants };
