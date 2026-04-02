import { Check, X, ChevronRight, MoreVertical, Mail, Phone, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { CodeViewer } from './CodeViewer';

export function StackedListsView() {
  const userListReact = `import { ChevronRight, MoreVertical } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const users = [
  { name: 'Sarah Chen', role: 'Product Designer', status: 'Active', color: 'emerald', lastActive: '5m ago' },
  { name: 'Michael Rodriguez', role: 'Frontend Developer', status: 'Member', color: 'zinc', lastActive: '2h ago' },
]

export function UserList() {
  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
      {users.map((user) => (
        <li key={user.name} className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer flex items-center gap-4">
          <Avatar size="lg">
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-zinc-900 dark:text-zinc-50">{user.name}</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{user.role} • Last active {user.lastActive}</div>
          </div>
          <Badge variant="soft" color={user.color as any}>{user.status}</Badge>
          <button className="p-1 text-zinc-400 hover:text-zinc-600"><MoreVertical className="size-5" /></button>
        </li>
      ))}
    </ul>
  )
}`;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Stacked Lists
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Vertical lists for displaying collections of similar items with consistent structure.
        </p>
      </div>

      {/* User List Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          User List with Avatars
        </h2>

        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 mb-6">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <Avatar size="lg">
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Sarah Chen
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                    Product Designer • Last active 5m ago
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="soft" color="emerald">
                    Active
                  </Badge>
                  <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
            <li className="px-6 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <Avatar size="lg">
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Michael Rodriguez
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                    Frontend Developer • Last active 2h ago
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="soft" color="zinc">
                    Member
                  </Badge>
                  <button className="p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <CodeViewer
          title="User Stacked List"
          react={userListReact}
          html={`<!-- Stacked List HTML -->`}
          css={`.list { border: 1px solid var(--zinc-200); }`}
          prompt="Generate a stacked list of users with avatars, names, roles, and status badges."
        />
      </section>

      {/* Guidelines */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div className="bg-success-light dark:bg-success/10 border border-success/20 dark:border-success/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-5 h-5 text-success" />
            <h3 className="text-lg font-semibold text-success dark:text-success-light">Do's</h3>
          </div>
          <ul className="space-y-2 text-sm text-success dark:text-success-light">
            <li>• Use consistent padding and structure across items.</li>
            <li>• Include hover states for interactive rows.</li>
            <li>• Add dividers to clearly separate content blocks.</li>
          </ul>
        </div>
        <div className="bg-error-light dark:bg-error/10 border border-error/20 dark:border-error/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-5 h-5 text-error" />
            <h3 className="text-lg font-semibold text-error dark:text-error-light">Don'ts</h3>
          </div>
          <ul className="space-y-2 text-sm text-error dark:text-error-light">
            <li>• Don't omit key metadata like status or timestamps.</li>
            <li>• Avoid deep nesting within list items.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
