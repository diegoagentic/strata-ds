import { Check, X, HelpCircle, Upload } from 'lucide-react';

export function FormLayoutsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Form Layouts
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Structured form patterns for organizing inputs, labels, and validation feedback.
        </p>
      </div>

      {/* Stacked Form */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Stacked Form Layout
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Vertical layout with labels above inputs, ideal for narrow containers.
        </p>
        
        <div className="max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Bio
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
              />
              <label htmlFor="terms" className="text-sm text-zinc-600 dark:text-zinc-400">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Two-Column Form */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Two-Column Form Layout
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Grid layout for organizing related fields side-by-side.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Country
                </label>
                <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Street Address
              </label>
              <input
                type="text"
                placeholder="123 Main St"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="San Francisco"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  State
                </label>
                <input
                  type="text"
                  placeholder="CA"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  placeholder="94105"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Form with Validation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Form with Validation
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Forms with inline validation feedback and error states.
        </p>
        
        <div className="max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border-2 border-emerald-500 dark:border-emerald-500 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-2 flex items-center gap-1">
                <Check className="w-3 h-3" />
                Username is available
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="invalid-email"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border-2 border-red-500 dark:border-red-500 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <p className="text-xs text-red-600 dark:text-red-500 mt-2 flex items-center gap-1">
                <X className="w-3 h-3" />
                Please enter a valid email address
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <div className="mt-2 space-y-1">
                <p className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  At least 8 characters
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-500 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Contains a number
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                  <X className="w-3 h-3" />
                  Contains a special character
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Form with Help Text */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Form with Help Text
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Forms with contextual help and tooltips for better guidance.
        </p>
        
        <div className="max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <form className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Project Name
                </label>
                <button type="button" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <input
                type="text"
                placeholder="My Awesome Project"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                Choose a descriptive name for your project
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Repository URL
                </label>
                <button type="button" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md flex gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  Enter the full URL to your Git repository. We support GitHub, GitLab, and Bitbucket.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Deployment Environment
              </label>
              <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50">
                <option>Production</option>
                <option>Staging</option>
                <option>Development</option>
              </select>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                Select the environment where this project will be deployed
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Create Project
              </button>
            </div>
          </form>
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
                <span>Group related fields together logically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Provide clear labels and helper text</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Show validation feedback inline in real-time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use appropriate input types for better UX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Make required fields clearly marked</span>
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
                <span>Don't show all errors at once on submit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid vague placeholder text as labels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make forms too long without sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid auto-focusing first field on page load</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't disable submit button without explanation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
