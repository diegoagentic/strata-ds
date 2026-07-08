import { SlideOver, SlideOverTitle, SlideOverBody, SlideOverHeader } from '../overlays/slide-over'
import { Button } from './button';
import type { ComponentPropsWithoutRef } from 'react'

interface CartItem {
    id: number
    name: string
    href: string
    color: string
    price: string
    quantity: number
    imageSrc: string
    imageAlt: string
}

export function ShoppingCart({ open, onClose, items }: { open: boolean, onClose: (open: boolean) => void, items: CartItem[] } & ComponentPropsWithoutRef<'div'>) {
    const subtotal = items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''))
        return acc + price * item.quantity
    }, 0)

    return (
        <SlideOver open={open} onClose={onClose}>
            <SlideOverHeader onClose={() => onClose(false)}>
                <SlideOverTitle>Shopping Cart</SlideOverTitle>
            </SlideOverHeader>
            <SlideOverBody className="flex flex-col">
                <ul role="list" className="-my-6 divide-y divide-border flex-1 overflow-y-auto px-4 sm:px-6">
                    {items.map((product) => (
                        <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-foreground">
                                        <h3>
                                            <a href={product.href}>{product.name}</a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-muted-foreground">Qty {product.quantity}</p>

                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="font-medium text-status-info hover:text-status-info/80"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="border-t border-border px-4 py-6 sm:px-6 mt-6 bg-card">
                    <div className="flex justify-between text-base font-medium text-foreground">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <Button className="w-full flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm" variant="default">
                            Checkout
                        </Button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
                        <p>
                            or{' '}
                            <button
                                type="button"
                                className="font-medium text-status-info hover:text-status-info/80"
                                onClick={() => onClose(false)}
                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </SlideOverBody>
        </SlideOver>
    )
}
