import { Users, MapPin, DollarSign, CheckCircle2, ChevronRight } from 'lucide-react';

export function PageHeadingsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Page Headings
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Complex header patterns with breadcrumbs, metadata, and action groups.
        </p>
      </div>

      {/* Example 1: Full Featured Header */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6 mb-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-4">
          <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
            Assets
          </a>
          <ChevronRight className="w-4 h-4 text-zinc-400" />
          <a href="#" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
            Seating
          </a>
          <ChevronRight className="w-4 h-4 text-zinc-400" />
          <span className="text-sm text-zinc-900 dark:text-zinc-50 font-semibold">
            Aeron Chair
          </span>
        </div>

        {/* Main Title and Actions Row */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Inventory Dashboard
          </h2>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              Edit
            </button>
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              View
            </button>
            <button className="px-4 py-2 bg-zinc-800 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
              Publish
            </button>
          </div>
        </div>

        {/* Meta Row */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-zinc-400" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Logistics Team
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Remote
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-zinc-400" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              $120k Value
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
              Synced
            </span>
          </div>
        </div>
      </div>

      {/* Example 2: Simple Header */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              Team Members
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <button className="px-4 py-2 bg-zinc-800 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
            Invite
          </button>
        </div>
      </div>

      {/* Example 3: With Stats */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Analytics Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-md p-4">
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
              Total Users
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              2,543
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              +12% from last month
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-md p-4">
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
              Revenue
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              $45,231
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              +8% from last month
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-md p-4">
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
              Active Projects
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              18
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              No change
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-md p-4">
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
              Satisfaction
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              98%
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
              +2% from last month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
