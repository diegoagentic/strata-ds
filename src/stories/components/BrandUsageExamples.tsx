import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Icons (Simulated for display purposes)
const IconPlaceholder = ({ className }: { className?: string }) => (
    <svg className={cn("w-5 h-5", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const Section = ({ title, children, description }: { title: string; children: React.ReactNode; description?: string }) => (
    <div className="space-y-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950">
        <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
            {description && <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>}
        </div>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

export const BrandUsageExamples = () => {
    return (
        <div className="space-y-8 py-6">

            {/* Interactive Elements */}
            <Section
                title="Interactive Elements"
                description="Brand colors are primarily used for hover states and active indicators to provide immediate feedback."
            >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Active Tab State */}
                    <div className="space-y-2">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Tab / Navigation Active</span>
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-brand-300 dark:bg-brand-500 text-zinc-900 shadow-sm transition-all">
                            <IconPlaceholder className="w-4 h-4" />
                            Active Tab
                        </button>
                    </div>

                    {/* Interactive Hover */}
                    <div className="space-y-2">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Action Hover State</span>
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-brand-300 dark:hover:bg-brand-600/50 hover:text-zinc-900 dark:hover:text-white transition-all border border-transparent hover:border-brand-400/30">
                            <IconPlaceholder className="w-4 h-4" />
                            Hover Me
                        </button>
                    </div>

                    {/* Quick Action Button */}
                    <div className="space-y-2">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Quick Action Item</span>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-lg hover:bg-brand-300 dark:hover:bg-brand-600/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors relative group">
                                <IconPlaceholder />
                            </button>
                            <button className="p-2 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800/30 transition-colors">
                                <IconPlaceholder />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Status Indicators */}
            <Section
                title="Status Indicators & Badges"
                description="Used to highlight specific states or important metrics."
            >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Status Badge */}
                    <div className="space-y-2">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Primary Status</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-600/20 dark:bg-brand-900/30 dark:text-brand-400 dark:ring-brand-500/30">
                            In Progress
                        </span>
                    </div>

                    {/* Performance Metric */}
                    <div className="space-y-2">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Performance Pill</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-400 text-white shadow-sm">
                            +12.5% Growth
                        </span>
                    </div>

                    {/* Brand Ring/Focus */}
                    <div className="space-y-2">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-tighter">Focus Ring</span>
                        <div className="w-full max-w-[120px] h-8 rounded-lg border border-brand-300 ring-4 ring-brand-100 dark:ring-brand-900/30 flex items-center justify-center text-xs text-brand-700 dark:text-brand-300">
                            Focused Item
                        </div>
                    </div>
                </div>
            </Section>

            {/* Surface & Backgrounds */}
            <Section
                title="Surfaces & Backgrounds"
                description="Subtle background applications to differentiate content areas."
            >
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Brand Card Background */}
                    <div className="p-4 rounded-xl bg-brand-50/50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-800/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-brand-100 dark:bg-brand-800/50 rounded-lg text-brand-600 dark:text-brand-400">
                                <IconPlaceholder />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-brand-900 dark:text-brand-100">Brand Surface</p>
                                <p className="text-xs text-brand-700/80 dark:text-brand-300/80">Subtle background tint</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Card */}
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-300 dark:hover:border-brand-500/50 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Hover Card</span>
                            {/* Accessibility: Avoid text-brand-600 on white. Use neutral text or brand background. */}
                            <IconPlaceholder className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                        </div>
                        <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-500 w-2/3 group-hover:bg-brand-600 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
};
