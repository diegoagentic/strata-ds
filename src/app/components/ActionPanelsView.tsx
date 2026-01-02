import { Check, X, HelpCircle, Upload, Link as LinkIcon, Mail, Lock } from 'lucide-react';

export function ActionPanelsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Action Panels
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Form panels for creating, editing, and managing content with structured layouts and clear actions.
        </p>
      </div>

      {/* Simple Action Panel */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Action Panel
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic action panel with title, fields, and action buttons.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Create New Project
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Get started by filling in the information below to create your new project.
            </p>
          </div>
          
          <div className="px-6 py-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Enter project name"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Write a brief description"
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>

          <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              Create Project
            </button>
          </div>
        </div>
      </div>

      {/* Action Panel with Description */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Action Panel with Description
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Panel with descriptive text alongside each field for better context.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Personal Information
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Update your personal details and how you'd like to be contacted.
            </p>
          </div>
          
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="px-6 py-6 grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Full Name
                </label>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Your name as it appears on official documents.
                </p>
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>
            </div>

            <div className="px-6 py-6 grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Email Address
                </label>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  We'll send notifications to this email.
                </p>
              </div>
              <div className="col-span-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                  />
                </div>
              </div>
            </div>

            <div className="px-6 py-6 grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Bio
                </label>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Brief description for your profile.
                </p>
              </div>
              <div className="col-span-2">
                <textarea
                  rows={3}
                  placeholder="Tell us about yourself"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  Max 500 characters
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Action Panel with Sections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Action Panel with Sections
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Multi-section panel for organizing complex forms into logical groups.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Account Settings
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Manage your account preferences and security settings.
            </p>
          </div>
          
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {/* Section 1 - Profile */}
            <div className="px-6 py-6">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                Profile Settings
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                Update your public profile information
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your display name"
                    className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Profile Photo
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                    <button className="px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-sm font-semibold rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 - Security */}
            <div className="px-6 py-6">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                Security Settings
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                Manage password and authentication
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md">
                  <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <p className="text-xs text-blue-800 dark:text-blue-200">
                    Password must be at least 8 characters with numbers and symbols
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 - Notifications */}
            <div className="px-6 py-6">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                Notification Preferences
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                Choose how you want to be notified
              </p>
              
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Email Notifications
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      Receive updates via email
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Push Notifications
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      Get push notifications in your browser
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      SMS Notifications
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      Receive text messages for urgent updates
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <button className="px-4 py-2 text-sm font-semibold text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md transition-colors">
              Delete Account
            </button>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked Action Panel */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Stacked Action Panel
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Vertical stacked layout for focused single-task workflows.
        </p>
        
        <div className="max-w-2xl">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
            <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                Share Document
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Share this document with team members or external collaborators.
              </p>
            </div>
            
            <div className="px-6 py-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Share with
                </label>
                <input
                  type="text"
                  placeholder="Enter email addresses"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Access Level
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-zinc-300 dark:border-zinc-700 rounded-md cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <input
                      type="radio"
                      name="access"
                      defaultChecked
                      className="w-4 h-4 text-zinc-900"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Can View
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        Can view and comment on the document
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 border border-zinc-300 dark:border-zinc-700 rounded-md cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <input
                      type="radio"
                      name="access"
                      className="w-4 h-4 text-zinc-900"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Can Edit
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        Can view, comment, and make changes
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 border border-zinc-300 dark:border-zinc-700 rounded-md cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <input
                      type="radio"
                      name="access"
                      className="w-4 h-4 text-zinc-900"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Full Access
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        Can manage permissions and delete
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                  />
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    Notify recipients via email
                  </span>
                </label>
              </div>

              <div className="p-4 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">
                <div className="flex items-start gap-3">
                  <LinkIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                      Anyone with link
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      https://example.com/doc/abc123xyz789
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-xs font-semibold rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Share Document
              </button>
            </div>
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
                <span>Group related fields into logical sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Provide clear labels and helper text for fields</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use primary action button for the main task</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Always include a cancel/back option</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Show validation feedback inline</span>
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
                <span>Don't overload panels with too many fields (&gt;8)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid vague labels like "Submit" or "Continue"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't hide destructive actions (use red color)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid unclear section boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't disable buttons without explanation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
