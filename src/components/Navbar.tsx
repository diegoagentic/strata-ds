import { Menu, MenuButton, MenuItem, MenuItems, Transition, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Fragment } from 'react'
import {
    Home, Box, ClipboardList, TrendingUp,
    LayoutGrid, Sun, Moon, ChevronDown,
    User, FileText, BarChart3, AlertCircle,
    Calendar, MoreHorizontal, LogOut, Briefcase
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`relative flex items-center justify-center h-9 px-3 rounded-full transition-all duration-300 group overflow-hidden ${active ? 'bg-black/5 dark:bg-white/10 text-info' : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500 dark:text-zinc-400'}`}>
            <span className="relative z-10">{icon}</span>
            <span className={`ml-2 text-sm font-medium whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out ${active ? 'max-w-xs opacity-100' : ''}`}>
                {label}
            </span>
        </button>
    )
}

interface NavbarProps {
    onLogout: () => void;
    activeTab?: 'Overview' | 'Inventory' | 'Production' | 'Orders';
    onNavigateToWorkspace: () => void;
}

export default function Navbar({ onLogout, activeTab = 'Overview', onNavigateToWorkspace }: NavbarProps) {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center p-2 rounded-full gap-2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-lg">

                {/* Logo */}
                <div className="px-4">
                    <img src="/logo-on-light.jpg" alt="Strata" className="h-5 w-auto block dark:hidden" />
                    <img src="/logo-on-dark.jpg" alt="Strata" className="h-5 w-auto hidden dark:block" />
                </div>

                <div className="h-6 w-px bg-zinc-200 dark:bg-white/10 mx-1"></div>

                {/* Navigation Items */}
                <div className="flex items-center gap-1">
                    <NavItem icon={<Home className="w-4 h-4" />} label="Overview" active={activeTab === 'Overview'} />
                    <NavItem icon={<Box className="w-4 h-4" />} label="Inventory" active={activeTab === 'Inventory'} />
                    <NavItem icon={<TrendingUp className="w-4 h-4" />} label="Production" active={activeTab === 'Production'} />
                    <NavItem icon={<ClipboardList className="w-4 h-4" />} label="Orders" active={activeTab === 'Orders'} />
                </div>

                <div className="h-6 w-px bg-zinc-200 dark:bg-white/10 mx-1"></div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 pr-2">
                    <Popover className="relative">
                        <PopoverButton className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors outline-none">
                            <LayoutGrid className="w-4 h-4" />
                        </PopoverButton>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[400px] p-4 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl z-[100] overflow-hidden">
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: <Briefcase className="w-8 h-8" />, label: "My Work Space", color: "text-info", bg: "bg-info-light dark:bg-info/10", isHighlighted: true, onClick: onNavigateToWorkspace },
                                        { icon: <Home className="w-8 h-8" />, label: "Portal", color: "text-info", bg: "bg-info-light dark:bg-info-light0/10" },
                                        { icon: <User className="w-8 h-8" />, label: "CRM", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-500/10" },
                                        { icon: <FileText className="w-8 h-8" />, label: "Invoice", color: "text-success", bg: "bg-success-light dark:bg-success/10" },
                                        { icon: <Box className="w-8 h-8" />, label: "Inventory", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-500/10" },
                                        { icon: <BarChart3 className="w-8 h-8" />, label: "Analytics", color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-500/10" },
                                        { icon: <AlertCircle className="w-8 h-8" />, label: "Support", color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-500/10" },
                                        { icon: <LayoutGrid className="w-8 h-8" />, label: "Board", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
                                        { icon: <Calendar className="w-8 h-8" />, label: "Calendar", color: "text-error", bg: "bg-error-light dark:bg-error/10" },
                                        { icon: <MoreHorizontal className="w-8 h-8" />, label: "More", color: "text-zinc-600 dark:text-zinc-400", bg: "bg-zinc-100 dark:bg-zinc-800" },
                                    ].map((app, i) => (
                                        <button
                                            key={i}
                                            // @ts-ignore
                                            onClick={app.onClick}
                                            className={`flex flex-col items-center gap-3 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-all group ${
                                                // @ts-ignore
                                                app.isHighlighted ? 'ring-2 ring-blue-500/20 bg-info-light/50 dark:bg-info/10' : ''
                                                }`}>
                                            <div className={`p-3 rounded-2xl ${app.bg} ${app.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                                {app.icon}
                                            </div>
                                            <span className={`text-xs font-semibold group-hover:text-zinc-900 dark:group-hover:text-white ${
                                                // @ts-ignore
                                                app.isHighlighted ? 'text-info dark:text-info-light' : 'text-zinc-700 dark:text-zinc-200'
                                                }`}>{app.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    <div className="relative group">
                        <button className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                JD
                            </div>
                            <div className="text-left hidden md:block">
                                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white">Jhon Doe</p>
                                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Admin</p>
                            </div>
                            <ChevronDown className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                        </button>
                        {/* User Dropdown */}
                        <div className="absolute top-full right-0 mt-2 w-48 py-1 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                            <div className="px-4 py-2 border-b border-zinc-200 dark:border-white/10">
                                <p className="text-sm font-medium">Jhon Doe</p>
                                <p className="text-xs text-zinc-500">Admin</p>
                            </div>
                            <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-error hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2">
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
