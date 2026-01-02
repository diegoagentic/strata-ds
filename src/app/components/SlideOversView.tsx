import { Check, X, User, Mail, Phone, MapPin, Bell, Shield, CreditCard } from 'lucide-react';

export function SlideOversView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Slide-overs
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Sliding panel overlays that appear from the side for detailed views, forms, and navigation.
        </p>
      </div>

      {/* Simple Slide-over */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Slide-over
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic slide-over panel with header, content, and actions.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <div className="h-[500px] relative flex items-center justify-end">
            <div className="w-96 h-full bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-lg flex flex-col">
              <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Panel Title
                  </h3>
                  <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Quick description of the panel content
                </p>
              </div>
              
              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  This is a simple slide-over panel that appears from the right side of the screen. It's perfect for showing additional details or forms without leaving the current page.
                </p>
              </div>

              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
                <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Slide-over */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Profile Slide-over
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Detailed user profile view with avatar and contact information.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <div className="h-[600px] relative flex items-center justify-end">
            <div className="w-96 h-full bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-lg flex flex-col">
              {/* Header with Avatar */}
              <div className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    User Profile
                  </h3>
                  <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mb-3"></div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-50">
                    Sarah Chen
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Product Designer
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {/* Contact Information */}
                <div className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    Contact Information
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-zinc-400 dark:text-zinc-500 mt-0.5" />
                      <div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Email</div>
                        <div className="text-sm text-zinc-900 dark:text-zinc-50">sarah.chen@company.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-zinc-400 dark:text-zinc-500 mt-0.5" />
                      <div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Phone</div>
                        <div className="text-sm text-zinc-900 dark:text-zinc-50">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-zinc-400 dark:text-zinc-500 mt-0.5" />
                      <div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Location</div>
                        <div className="text-sm text-zinc-900 dark:text-zinc-50">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    About
                  </h5>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Product designer with 8 years of experience creating user-centered digital experiences. Passionate about design systems and accessibility.
                  </p>
                </div>

                {/* Team */}
                <div className="px-6 py-6">
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                    Team
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                      <span className="text-sm text-zinc-900 dark:text-zinc-50">Design Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                      <span className="text-sm text-zinc-900 dark:text-zinc-50">Product Team</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
                <button className="w-full px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Slide-over */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Settings Slide-over
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Multi-section settings panel with tabs and toggle options.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <div className="h-[600px] relative flex items-center justify-end">
            <div className="w-[480px] h-full bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-lg flex flex-col">
              <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Settings
                  </h3>
                  <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-6 py-3 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-4">
                  <button className="pb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50">
                    General
                  </button>
                  <button className="pb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                    Notifications
                  </button>
                  <button className="pb-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                    Security
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {/* Account Section */}
                <div className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-start gap-3 mb-4">
                    <User className="w-5 h-5 text-zinc-600 dark:text-zinc-400 mt-1" />
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                        Account Settings
                      </h5>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        Manage your account preferences
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                              Email Notifications
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">
                              Receive updates via email
                            </div>
                          </div>
                          <div className="w-11 h-6 bg-zinc-900 dark:bg-zinc-50 rounded-full relative">
                            <div className="w-5 h-5 bg-white dark:bg-zinc-900 rounded-full absolute right-0.5 top-0.5"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                              Marketing Updates
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">
                              News and product updates
                            </div>
                          </div>
                          <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full relative">
                            <div className="w-5 h-5 bg-white dark:bg-zinc-900 rounded-full absolute left-0.5 top-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notifications Section */}
                <div className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-zinc-600 dark:text-zinc-400 mt-1" />
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                        Push Notifications
                      </h5>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        Control browser notifications
                      </p>
                      
                      <div className="space-y-3">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mt-0.5 w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                          />
                          <div>
                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                              New Messages
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">
                              Get notified when you receive messages
                            </div>
                          </div>
                        </label>

                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="mt-0.5 w-4 h-4 border-zinc-300 dark:border-zinc-700 rounded"
                          />
                          <div>
                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                              Task Reminders
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">
                              Reminders for upcoming tasks
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy Section */}
                <div className="px-6 py-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-zinc-600 dark:text-zinc-400 mt-1" />
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                        Privacy & Security
                      </h5>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        Manage your privacy settings
                      </p>
                      
                      <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                            Change Password
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            Update your password
                          </div>
                        </button>

                        <button className="w-full text-left px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                            Two-Factor Auth
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            Enable 2FA for extra security
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
                <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                  Reset
                </button>
                <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                  Save Changes
                </button>
              </div>
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
                <span>Use slide-overs for detailed views without losing context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Include clear header with close button</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep width between 320-480px for optimal reading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Make content scrollable if it exceeds viewport</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use for forms, settings, and detail views</span>
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
                <span>Don't use for critical confirmations (use modals)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid making slide-overs too wide (&gt;50% screen)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't nest slide-overs within slide-overs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid blocking the entire screen on mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't forget to add backdrop overlay</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
