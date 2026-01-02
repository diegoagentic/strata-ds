import { Check, X, MessageCircle, Heart, Share2, MoreVertical, Upload, UserPlus, CheckCircle } from 'lucide-react';

export function FeedsView() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Activity Feeds
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Timeline-based lists showing chronological activities, updates, and user interactions.
        </p>
      </div>

      {/* Simple Feed */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Feed
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic activity feed with timestamps and user actions.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Sarah Chen</span> created a new project{' '}
                    <span className="font-semibold">Website Redesign</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    2 minutes ago
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Michael Rodriguez</span> completed task{' '}
                    <span className="font-semibold">Design mockups</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    1 hour ago
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Emma Thompson</span> uploaded 3 files to{' '}
                    <span className="font-semibold">Assets folder</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    3 hours ago
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Alex Park</span> added a comment on{' '}
                    <span className="font-semibold">Homepage layout</span>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Yesterday at 4:32 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feed with Avatars */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Feed with Avatars
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Activity feed with user avatars and action icons.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900">
                    <Upload className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Sarah Chen</span> uploaded a new file
                  </p>
                  <div className="mt-2 p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/40 rounded flex items-center justify-center">
                        <Upload className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                          design-mockup-v2.fig
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          2.4 MB
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    15 minutes ago
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Michael Rodriguez</span> marked task as complete
                  </p>
                  <div className="mt-2 p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md">
                    <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">
                      Homepage wireframes
                    </div>
                    <div className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      All deliverables submitted and approved
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    1 hour ago
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900">
                    <UserPlus className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900 dark:text-zinc-50">
                    <span className="font-semibold">Emma Thompson</span> added{' '}
                    <span className="font-semibold">Alex Park</span> to the team
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    3 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Feed */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Social Feed
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Social-style feed with posts, likes, comments, and share actions.
        </p>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Sarah Chen
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      2 hours ago
                    </div>
                  </div>
                </div>
                <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="px-6 py-4">
              <p className="text-sm text-zinc-900 dark:text-zinc-50 mb-3">
                Just shipped the new design system documentation! 🎉 Check it out and let me know what you think. Excited to see how this will improve our workflow.
              </p>
              <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
            </div>

            <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-semibold">24</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">8</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Michael Rodriguez
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      5 hours ago
                    </div>
                  </div>
                </div>
                <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="px-6 py-4">
              <p className="text-sm text-zinc-900 dark:text-zinc-50">
                Quick reminder: Design review meeting tomorrow at 10am. Please have your latest mockups ready to present!
              </p>
            </div>

            <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-semibold">12</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">5</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">1</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Feed */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Timeline Feed
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Vertical timeline with connecting lines between events.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="space-y-6">
              <div className="relative flex gap-4">
                <div className="relative z-10 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Files Uploaded
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      10:30 AM
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Sarah uploaded 5 design files to the project
                  </p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="relative z-10 w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Task Completed
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      2:45 PM
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Michael marked "Design mockups" as complete
                  </p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="relative z-10 w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      New Comment
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      4:15 PM
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Emma added feedback on the homepage design
                  </p>
                </div>
              </div>

              <div className="relative flex gap-4">
                <div className="relative z-10 w-10 h-10 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      Team Member Added
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Yesterday
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Alex Park joined the design team
                  </p>
                </div>
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
                <span>Show most recent activities first (reverse chronological)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Include clear timestamps for each activity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use color coding for different activity types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep activity descriptions concise and scannable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Add pagination or "Load more" for long feeds</span>
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
                <span>Don't show overly technical details to end users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid loading all activities at once (performance)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use vague timestamps like "a while ago"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid mixing different feed styles in one view</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make feed items non-interactive if they link somewhere</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
