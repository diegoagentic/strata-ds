import { Check, X, ChevronRight, MoreVertical, Mail, Phone, MapPin } from 'lucide-react';

export function StackedListsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Stacked Lists
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Vertical lists for displaying collections of similar items with consistent structure.
        </p>
      </div>

      {/* Simple List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic stacked list with dividers between items.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md overflow-hidden">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Project Alpha
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    Updated 2 hours ago
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Project Beta
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    Updated 5 hours ago
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Project Gamma
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    Updated 1 day ago
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* List with Avatars */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          List with Avatars
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          User or contact lists with profile images.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Sarah Chen
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                    Product Designer • Last active 5m ago
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 text-xs font-semibold">
                    Admin
                  </span>
                  <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Michael Rodriguez
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                    Frontend Developer • Last active 2h ago
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold">
                    Member
                  </span>
                  <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Emma Thompson
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                    Marketing Lead • Last active yesterday
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-xs font-semibold">
                    Member
                  </span>
                  <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* List with Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          List with Actions
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Interactive lists with primary and secondary actions.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Design System Update
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    Complete redesign of all components following new brand guidelines
                  </p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>Due: Dec 25, 2024</span>
                    <span>•</span>
                    <span>5 tasks remaining</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    View
                  </button>
                  <button className="px-3 py-1.5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      User Research Sprint
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    Conduct interviews with 15 users to validate new feature concepts
                  </p>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>Due: Dec 30, 2024</span>
                    <span>•</span>
                    <span>12 tasks remaining</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    View
                  </button>
                  <button className="px-3 py-1.5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Compact List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Compact List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Dense list layout for space-constrained interfaces.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <li className="px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold">
                    SC
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Sarah Chen
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      sarah@company.com
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
            <li className="px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold">
                    MR
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Michael Rodriguez
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      michael@company.com
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
            <li className="px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold">
                    ET
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Emma Thompson
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      emma@company.com
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* List with Icons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          List with Icons
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Lists featuring leading icons for visual categorization.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Email Address
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    contact@company.com
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Phone Number
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    +1 (555) 123-4567
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-950/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Office Location
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    123 Main St, San Francisco, CA 94105
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </div>
            </li>
          </ul>
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
                <span>Keep list items consistent in height and structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use hover states to indicate interactivity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Add dividers between items for clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use compact variant for dense data displays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Include chevron icons for navigable items</span>
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
                <span>Don't mix different list item heights randomly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid truncating critical information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use lists for more than ~20 items (paginate)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid placing too many actions per item (max 2-3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make entire rows clickable if there are buttons</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
