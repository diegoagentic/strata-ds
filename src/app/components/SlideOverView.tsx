import { SlideOver, SlideOverTitle, SlideOverDescription, SlideOverBody, SlideOverHeader } from '../../components/catalyst/slide-over';
import { Button } from '../../components/catalyst/button';
import { CopyButton } from './CopyButton';
import { useState } from 'react';

export function SlideOverView() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        SlideOver
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        A sliding panel component, ideal for carts, filters, and mobile navigation.
                    </p>
                </div>
            </div>

            {/* Examples */}
            <div className="grid grid-cols-1 gap-10">

                {/* Basic SlideOver */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Basic SlideOver
                    </h2>
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 bg-white dark:bg-zinc-900 flex justify-center">
                        <Button onClick={() => setOpen(true)}>Open SlideOver</Button>

                        <SlideOver open={open} onClose={setOpen}>
                            <SlideOverHeader onClose={() => setOpen(false)}>
                                <SlideOverTitle>Shopping Cart</SlideOverTitle>
                                <SlideOverDescription>Items in your cart.</SlideOverDescription>
                            </SlideOverHeader>
                            <SlideOverBody>
                                <div className="space-y-4">
                                    <div className="h-24 rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-700" />
                                    <div className="h-24 rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-700" />
                                    <div className="h-24 rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-700" />
                                </div>
                            </SlideOverBody>
                        </SlideOver>
                    </div>
                    <div className="mt-4">
                        <CopyButton
                            formats={[{
                                label: 'React', value: `<SlideOver open={open} onClose={setOpen}>
  <SlideOverHeader onClose={() => setOpen(false)}>
    <SlideOverTitle>Shopping Cart</SlideOverTitle>
  </SlideOverHeader>
  <SlideOverBody>
    {/* Content */}
  </SlideOverBody>
</SlideOver>` }]}
                        />
                    </div>
                </section>

                {/* Usage Guidelines */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Usage Guidelines
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-success-light dark:bg-success/10 border border-success/20 dark:border-success/30 rounded-md p-6">
                            <h3 className="text-lg font-semibold text-success dark:text-success-light mb-2">Do's</h3>
                            <ul className="list-disc list-inside text-sm text-success dark:text-success-light space-y-1">
                                <li>Use for complex interactions that require context from the main view (carts, settings).</li>
                                <li>Always include a close button.</li>
                            </ul>
                        </div>
                        <div className="bg-error-light dark:bg-error/10 border border-error/20 dark:border-error/30 rounded-md p-6">
                            <h3 className="text-lg font-semibold text-error dark:text-error-light mb-2">Don'ts</h3>
                            <ul className="list-disc list-inside text-sm text-error dark:text-error-light space-y-1">
                                <li>Don't use for simple confirmations (use Dialog/Modal).</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
