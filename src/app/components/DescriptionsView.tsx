import { Check, X, Copy } from 'lucide-react';

export function DescriptionsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Description Lists
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Structured lists for displaying key-value pairs, metadata, and detailed information.
        </p>
      </div>

      {/* Simple Description List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Description List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic key-value pairs in a vertical layout.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                Full Name
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400">
                Sarah Chen
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                Email Address
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400">
                sarah.chen@company.com
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                Role
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400">
                Product Designer
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                Department
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400">
                Design Team
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Horizontal Description List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Horizontal Description List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Two-column layout with labels on the left and values on the right.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <dl className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Project Name
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                Website Redesign 2024
              </dd>
            </div>

            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Status
              </dt>
              <dd className="text-sm col-span-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                  Active
                </span>
              </dd>
            </div>

            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Start Date
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                December 1, 2024
              </dd>
            </div>

            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Due Date
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                December 31, 2024
              </dd>
            </div>

            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Team Members
              </dt>
              <dd className="text-sm col-span-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">+5</span>
                  </div>
                </div>
              </dd>
            </div>

            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Description
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                Complete redesign of the company website with new branding, improved UX, and modern tech stack. Includes homepage, product pages, and blog.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Description List with Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Description List with Actions
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Interactive descriptions with copy buttons and editable values.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <dl className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex-1">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  API Key
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                  ak_live_1234567890abcdefghijklmnop
                </dd>
              </div>
              <button className="px-3 py-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>

            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex-1">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Webhook URL
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 font-mono truncate">
                  https://api.company.com/webhooks/abc123
                </dd>
              </div>
              <button className="px-3 py-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>

            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex-1">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Organization ID
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                  org_2mNxK8L9pQ3rS4tV
                </dd>
              </div>
              <button className="px-3 py-1.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </dl>
        </div>
      </div>

      {/* Compact Description List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Compact Description List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Dense layout for displaying multiple metadata fields efficiently.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Created
              </dt>
              <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Dec 15, 2024
              </dd>
            </div>

            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Updated
              </dt>
              <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Dec 17, 2024
              </dd>
            </div>

            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Version
              </dt>
              <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                v2.1.0
              </dd>
            </div>

            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                License
              </dt>
              <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                MIT
              </dd>
            </div>

            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Size
              </dt>
              <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                2.4 MB
              </dd>
            </div>

            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Downloads
              </dt>
              <dd className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                12.5K
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Grouped Description List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Grouped Description List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Organized into logical sections with headers.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          {/* Personal Information */}
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Personal Information
            </h3>
            <dl className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Full Name
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  Sarah Chen
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Email
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  sarah.chen@company.com
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Phone
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  +1 (555) 123-4567
                </dd>
              </div>
            </dl>
          </div>

          {/* Professional Details */}
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Professional Details
            </h3>
            <dl className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Job Title
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  Senior Product Designer
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Department
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  Design Team
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Start Date
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  January 15, 2020
                </dd>
              </div>
            </dl>
          </div>

          {/* Account Settings */}
          <div className="px-6 py-5">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Account Settings
            </h3>
            <dl className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Account Type
                </dt>
                <dd className="text-sm col-span-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 text-xs font-semibold">
                    Premium
                  </span>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  2FA Enabled
                </dt>
                <dd className="text-sm col-span-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                    Yes
                  </span>
                </dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Last Login
                </dt>
                <dd className="text-sm text-zinc-600 dark:text-zinc-400 col-span-2">
                  Dec 17, 2024 at 10:32 AM
                </dd>
              </div>
            </dl>
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
                <span>Use clear, concise labels that users understand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Group related information into logical sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Add copy buttons for API keys and long strings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use compact layout for metadata-heavy displays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep consistent alignment and spacing</span>
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
                <span>Don't use technical jargon in labels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid cramming too much info into one list</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't truncate important values without showing full text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid mixing different description list styles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make labels longer than values</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
