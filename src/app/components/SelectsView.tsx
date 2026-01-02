import { Check, X, ChevronDown, Search } from 'lucide-react';

export function SelectsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Select Menus
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Dropdown select components for single and multiple choice selections.
        </p>
      </div>

      {/* Simple Select */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Select
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic dropdown select with standard options.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Country
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>France</option>
              <option>Spain</option>
              <option>Italy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Role
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
              <option>Guest</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Time Zone
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <option>Pacific Time (PT)</option>
              <option>Mountain Time (MT)</option>
              <option>Central Time (CT)</option>
              <option>Eastern Time (ET)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Select with Groups */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Select with Option Groups
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Grouped options for better organization in long lists.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Account Type
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <optgroup label="Personal">
                <option>Free</option>
                <option>Plus</option>
                <option>Pro</option>
              </optgroup>
              <optgroup label="Business">
                <option>Team</option>
                <option>Enterprise</option>
                <option>Custom</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Font Family
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <optgroup label="Sans Serif">
                <option>Inter</option>
                <option>Helvetica</option>
                <option>Arial</option>
              </optgroup>
              <optgroup label="Serif">
                <option>Georgia</option>
                <option>Times New Roman</option>
                <option>Merriweather</option>
              </optgroup>
              <optgroup label="Monospace">
                <option>Fira Code</option>
                <option>Courier New</option>
                <option>Monaco</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* Custom Select Appearance */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Custom Select Dropdown
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Styled custom dropdown with visual options (static mockup).
        </p>
        
        <div className="max-w-2xl">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Choose a Theme
            </label>
            <button className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span>Ocean Blue</span>
              </div>
              <ChevronDown className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            </button>

            {/* Dropdown menu (shown for demo) */}
            <div className="mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden">
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  <span className="flex-1 text-left">Ocean Blue</span>
                  <Check className="w-4 h-4 text-zinc-900 dark:text-zinc-50" />
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  <div className="w-6 h-6 bg-emerald-600 rounded"></div>
                  <span className="flex-1 text-left">Forest Green</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  <span className="flex-1 text-left">Royal Purple</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  <div className="w-6 h-6 bg-amber-600 rounded"></div>
                  <span className="flex-1 text-left">Sunset Orange</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Select with Search */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Select with Search
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Searchable dropdown for long lists (static mockup).
        </p>
        
        <div className="max-w-2xl">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Select Country
            </label>
            <button className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 flex items-center justify-between">
              <span>United States</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            </button>

            {/* Dropdown with search */}
            <div className="mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden">
              <div className="p-2 border-b border-zinc-200 dark:border-zinc-800">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  <input
                    type="search"
                    placeholder="Search countries..."
                    className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                  />
                </div>
              </div>
              <div className="max-h-60 overflow-y-auto p-1">
                <button className="w-full text-left px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 flex items-center justify-between">
                  <span>United States</span>
                  <Check className="w-4 h-4" />
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  Canada
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  Mexico
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  United Kingdom
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  Germany
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md text-sm text-zinc-900 dark:text-zinc-50 transition-colors">
                  France
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Select */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Multi-Select
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Select multiple options with checkboxes (static mockup).
        </p>
        
        <div className="max-w-2xl">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Select Skills
            </label>
            <button className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-xs font-semibold">
                  React
                  <X className="w-3 h-3 cursor-pointer hover:text-red-600" />
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-xs font-semibold">
                  TypeScript
                  <X className="w-3 h-3 cursor-pointer hover:text-red-600" />
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">2 selected</span>
              </div>
              <ChevronDown className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            </button>

            {/* Multi-select dropdown */}
            <div className="mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden">
              <div className="max-h-60 overflow-y-auto p-1">
                <label className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <span className="text-sm text-zinc-900 dark:text-zinc-50">React</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <span className="text-sm text-zinc-900 dark:text-zinc-50">TypeScript</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <span className="text-sm text-zinc-900 dark:text-zinc-50">Node.js</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <span className="text-sm text-zinc-900 dark:text-zinc-50">Python</span>
                </label>
                <label className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <span className="text-sm text-zinc-900 dark:text-zinc-50">Go</span>
                </label>
              </div>
              <div className="p-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                <button className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 font-semibold">
                  Clear All
                </button>
                <button className="px-3 py-1.5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-xs font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Select with Validation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Select with Validation
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Select fields with error and success states.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Valid Selection
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border-2 border-emerald-500 dark:border-emerald-500 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-2 flex items-center gap-1">
              <Check className="w-3 h-3" />
              Selection confirmed
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Required Field
            </label>
            <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border-2 border-red-500 dark:border-red-500 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-no-repeat bg-right pr-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ef4444' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center' }}>
              <option value="">Select an option...</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <p className="text-xs text-red-600 dark:text-red-500 mt-2 flex items-center gap-1">
              <X className="w-3 h-3" />
              Please select an option
            </p>
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
                <span>Use select for 4-15 options; radio for &lt;4, search for &gt;15</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Include clear default/placeholder options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Group related options with optgroup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Add search for lists with 20+ items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Sort options alphabetically or by frequency</span>
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
                <span>Don't use select for binary choices (use toggle/switch)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid very long option labels (&gt;50 chars)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't nest optgroups more than 1 level</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid using "Select..." as the only option</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't auto-submit on selection change</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
