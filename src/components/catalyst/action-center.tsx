import { Popover, PopoverButton, PopoverPanel, Transition, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Bell, Search, AlertTriangle, MessageSquare, X, Package, CreditCard, Truck, Megaphone, ClipboardCheck } from 'lucide-react'
import { Button } from '../../components/catalyst/button'
import { Fragment } from 'react'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

// --- Atoms ---

export function ActionTrigger({ unreadCount, className, ...props }: ComponentPropsWithoutRef<typeof PopoverButton> & { unreadCount?: number }) {
    return (
        <PopoverButton
            {...props}
            className={clsx(
                className,
                "relative rounded-full p-2 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            )}
        >
            <Bell className="h-6 w-6" aria-hidden="true" />
            {unreadCount ? (
                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-950" />
            ) : null}
        </PopoverButton>
    )
}

// --- Molecules ---

export function NotificationItem({
    title,
    subtitle,
    meta,
    severity = 'low',
    tag,
    actionLabel,
    onAction,
}: {
    title: string
    subtitle: string
    meta: string
    severity?: 'high' | 'medium' | 'low'
    tag?: string
    actionLabel?: string
    onAction?: () => void
}) {
    const colors = {
        high: { border: 'bg-red-500', icon: 'text-red-500', badge: 'bg-red-500/10 text-red-500 border-red-500/20' },
        medium: { border: 'bg-amber-500', icon: 'text-amber-500', badge: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
        low: { border: 'bg-blue-500', icon: 'text-blue-500', badge: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
    }
    const color = colors[severity]

    return (
        <div className="group relative flex gap-4 p-4 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors border-b border-zinc-100 dark:border-white/5 last:border-0">
            {/* Severity Strip */}
            <div className={clsx("absolute left-0 top-4 bottom-4 w-1 rounded-r-full", color.border)} />

            <div className="flex-1 pl-2">
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <div className={clsx("flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border", color.badge)}>
                            <AlertTriangle className="w-3 h-3" />
                            {tag || severity}
                        </div>
                    </div>
                    {actionLabel && (
                        <Button onClick={onAction} className="!h-7 !px-3 !text-xs bg-cyan-500 hover:bg-cyan-400 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 border-none shadow-lg shadow-cyan-500/20">
                            {actionLabel}
                        </Button>
                    )}
                </div>

                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-0.5">{title}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{subtitle}</p>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500">{meta}</p>
            </div>
        </div>
    )
}

// --- Organisms & Templates ---

export function ActionPanel({ className }: { className?: string }) {
    return (
        <div className={clsx("w-full max-w-md flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-900/5 dark:bg-[#18181b] dark:ring-white/10", className)}>
            {/* Header */}
            <div className="p-4 pb-0 bg-white dark:bg-[#18181b] z-10 sticky top-0">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Action Center</h2>
                    <div className="flex gap-2 text-zinc-400">
                        <Search className="w-5 h-5 cursor-pointer hover:text-white transition" />
                        <X className="w-5 h-5 cursor-pointer hover:text-white transition" />
                    </div>
                </div>

                <TabGroup>
                    <TabList className="flex gap-1 overflow-x-auto pb-4 scrollbar-hide">
                        <Tab className={({ selected }) => clsx("flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap outline-none transition", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 opacity-70">
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                                <div className="bg-current rounded-[1px]" />
                            </div>
                            All
                            <span className="bg-zinc-700 px-1.5 py-0.5 rounded text-[10px]">10</span>
                        </Tab>
                        <Tab className={({ selected }) => clsx("relative p-2 rounded-lg outline-none transition group", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <AlertTriangle className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#18181b]">3</span>
                        </Tab>
                        <Tab className={({ selected }) => clsx("relative p-2 rounded-lg outline-none transition group", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <CreditCard className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#18181b]">2</span>
                        </Tab>
                        <Tab className={({ selected }) => clsx("relative p-2 rounded-lg outline-none transition group", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <ClipboardCheck className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#18181b]">2</span>
                        </Tab>
                        <Tab className={({ selected }) => clsx("relative p-2 rounded-lg outline-none transition group", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <Truck className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#18181b]">3</span>
                        </Tab>
                        <Tab className={({ selected }) => clsx("relative p-2 rounded-lg outline-none transition group", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <Megaphone className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#18181b]">1</span>
                        </Tab>
                        <Tab className={({ selected }) => clsx("relative p-2 rounded-lg outline-none transition group", selected ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50")}>
                            <MessageSquare className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-[#18181b]">1</span>
                        </Tab>
                    </TabList>
                </TabGroup>
            </div>

            {/* Sub-header metrics */}
            <div className="px-4 py-2 border-y border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/50 flex gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-500">
                <span>Pending: <span className="text-zinc-900 dark:text-zinc-300">142</span></span>
                <span>Low Stock: <span className="text-zinc-900 dark:text-zinc-300">15</span></span>
                <span className="text-red-500">Alert</span>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto max-h-[400px]">
                <NotificationItem
                    severity="high"
                    tag="Discrepancy"
                    title="Quantity Mismatch"
                    subtitle="Order vs Invoice: 24 → 22 units"
                    meta="#DSC-112 • 2 min ago"
                    actionLabel="Resolve →"
                />
                <NotificationItem
                    severity="high"
                    tag="Discrepancy"
                    title="Price Discrepancy"
                    subtitle="PO #4521 - $2,340 variance"
                    meta="#DSC-118 • 15 min ago"
                    actionLabel="Review →"
                />
                <NotificationItem
                    severity="medium"
                    tag="Medium"
                    title="SKU Mismatch"
                    subtitle="Wrong product code detected"
                    meta="#DSC-124 • 1 hour ago"
                    actionLabel="Fix →"
                />
                <NotificationItem
                    severity="low"
                    tag="Info"
                    title="System Update"
                    subtitle="Maintenance scheduled for 2am"
                    meta="SYS-001 • 4 hours ago"
                />
            </div>

            {/* Footer */}
            <div className="p-3 bg-zinc-50 dark:bg-[#18181b] border-t border-zinc-100 dark:border-white/5 flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-medium">12 actions</span>
                <span className="flex items-center gap-1.5 text-red-500 font-bold">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    7 urgent
                </span>
            </div>
        </div>
    )
}

export function ActionCenter({ className }: { className?: string }) {
    return (
        <Popover className={clsx(className, "relative")}>
            <ActionTrigger unreadCount={3} />
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="absolute right-0 z-50 mt-5 w-screen max-w-max px-4 sm:px-0">
                    <ActionPanel />
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}
