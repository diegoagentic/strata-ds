import { Check, X, Home, Users, FolderOpen, Settings, Bell, Search, Menu, MoreVertical, Plus, ChevronRight } from 'lucide-react';

export function AppShellsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Application Shells
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Complete page layouts with navigation patterns: sidebar, multi-column, and stacked configurations.
        </p>
      </div>

      {/* Sidebar Layout */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Sidebar Layout
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Classic application layout with fixed sidebar navigation and main content area.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-800 dark:border-zinc-600 rounded-md overflow-hidden">
          <div className="h-[600px] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
              {/* Logo */}
              <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
                    <span className="text-zinc-50 font-bold text-sm">ST</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-50">Strata</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-3 py-4">
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-md text-sm">
                    <Home className="w-5 h-5" />
                    Dashboard
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50 font-medium rounded-md text-sm transition-colors">
                    <Users className="w-5 h-5" />
                    Team
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50 font-medium rounded-md text-sm transition-colors">
                    <FolderOpen className="w-5 h-5" />
                    Projects
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50 font-medium rounded-md text-sm transition-colors">
                    <Settings className="w-5 h-5" />
                    Settings
                  </button>
                </div>
              </nav>

              {/* User Profile */}
              <div className="px-3 py-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-colors">
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                      Sarah Chen
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      View profile
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col bg-zinc-50 dark:bg-zinc-950">
              {/* Header */}
              <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    Dashboard
                  </h1>
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                    <button className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full"></span>
                    </button>
                  </div>
                </div>
              </header>

              {/* Content */}
              <div className="flex-1 p-6 overflow-auto">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-4">
                    <div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                      Total Users
                    </div>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      1,234
                    </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-4">
                    <div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                      Revenue
                    </div>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      $45.2K
                    </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-4">
                    <div className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                      Growth
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
                      +12.5%
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
                  <h2 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                    Recent Activity
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-zinc-600 dark:text-zinc-400">New user registered</span>
                      <span className="text-zinc-400 dark:text-zinc-500 ml-auto">2m ago</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-zinc-600 dark:text-zinc-400">Payment received</span>
                      <span className="text-zinc-400 dark:text-zinc-500 ml-auto">5m ago</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-zinc-600 dark:text-zinc-400">Update available</span>
                      <span className="text-zinc-400 dark:text-zinc-500 ml-auto">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Multi-Column Layout */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Multi-Column Layout
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Three-column layout with primary navigation, content list, and detail panel.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <div className="h-[600px] flex">
            {/* Left Sidebar - Navigation */}
            <aside className="w-20 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col items-center py-6 gap-4">
              <div className="w-10 h-10 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center mb-4">
                <span className="text-zinc-50 font-bold text-sm">ST</span>
              </div>
              
              <button className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-md flex items-center justify-center">
                <Home className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md flex items-center justify-center transition-colors">
                <Users className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md flex items-center justify-center transition-colors">
                <FolderOpen className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md flex items-center justify-center transition-colors mt-auto">
                <Settings className="w-5 h-5" />
              </button>
            </aside>

            {/* Middle Column - List */}
            <div className="w-80 bg-zinc-50 dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
              <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-zinc-900 dark:text-zinc-50">Messages</h2>
                  <button className="w-8 h-8 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-auto">
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
                            Sarah Chen
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">2m</div>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
                          Hey! Did you see the new designs?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-950 px-4 py-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
                            Michael R.
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">1h</div>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 truncate">
                          Meeting at 3pm today
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-950 px-4 py-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
                            Emma T.
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">3h</div>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500 truncate">
                          Thanks for your help!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detail */}
            <main className="flex-1 bg-white dark:bg-zinc-900 flex flex-col">
              <div className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                        Sarah Chen
                      </div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-500">
                        Active now
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6 overflow-auto">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex-shrink-0"></div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-2 max-w-sm">
                      <p className="text-sm text-zinc-900 dark:text-zinc-50">
                        Hey! Did you see the new designs?
                      </p>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">2:34 PM</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-zinc-900 dark:bg-zinc-700 rounded-lg px-4 py-2 max-w-sm">
                      <p className="text-sm text-zinc-50">
                        Yes! They look amazing 🎉
                      </p>
                      <span className="text-xs text-zinc-300 dark:text-zinc-400">2:35 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-800 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm"
                  />
                  <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stacked Layout */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Stacked Layout
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Vertical stacked layout with top navigation and full-width content.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <div className="h-[600px] flex flex-col">
            {/* Top Navigation */}
            <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  {/* Logo & Nav */}
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
                        <span className="text-zinc-50 font-bold text-sm">AV</span>
                      </div>
                      <span className="font-bold text-zinc-900 dark:text-zinc-50">Avanto</span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                      <a href="#" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Dashboard
                      </a>
                      <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        Projects
                      </a>
                      <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        Team
                      </a>
                      <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        Reports
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                    <button className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <Bell className="w-5 h-5" />
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full"></span>
                    </button>
                    <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full cursor-pointer"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden px-6 pb-4">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-md">
                  <Menu className="w-5 h-5" />
                  Menu
                </button>
              </div>
            </nav>

            {/* Page Header */}
            <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                    Projects
                  </h1>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Manage and track all your active projects
                  </p>
                </div>
                <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Project
                </button>
              </div>
            </div>

            {/* Content */}
            <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 p-6 overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                        Website Redesign
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                      Complete redesign of the company website with new branding
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>12 tasks</span>
                      <span>Due: Dec 31</span>
                    </div>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-950 px-6 py-3 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                        Mobile App
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold">
                        In Progress
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                      iOS and Android app development for Q1 launch
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>28 tasks</span>
                      <span>Due: Jan 15</span>
                    </div>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-950 px-6 py-3 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                        Marketing Campaign
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold">
                        Planning
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                      Q1 2025 marketing strategy and content planning
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>8 tasks</span>
                      <span>Due: Feb 1</span>
                    </div>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-950 px-6 py-3 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Usage Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
                Do's
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use Sidebar layout for admin dashboards and complex apps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use Multi-column for messaging and detail-heavy interfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use Stacked layout for marketing sites and simple apps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep navigation consistent across all pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Provide mobile-responsive alternatives</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                Don'ts
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't mix different shell patterns in one application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid hiding critical navigation in collapsed states</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make sidebars too wide (&gt;280px)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid cramming too many columns on mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't nest layouts more than 2 levels deep</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}