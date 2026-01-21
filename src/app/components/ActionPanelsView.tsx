import ActionCenter from './notifications/ActionCenter';
import { CodeViewer } from './CodeViewer';

export function ActionPanelsView() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Action Center
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-4xl">
          A centralized hub for notifications, tasks, and communications. Ported from Catalyst and refined with Strata Brand foundations.
        </p>
      </div>

      {/* Demo Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Interactive Demo
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Click the bell icon to open the Action Center. Try filtering tabs, searching, or replying to the chat notification.
          </p>
        </div>

        <div className="p-24 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative min-h-[400px]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5"
            style={{ backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-zinc-500">Click to open</p>
            <div className="scale-150">
              <ActionCenter />
            </div>
          </div>
        </div>

        <CodeViewer
          react={`import ActionCenter from '@/components/notifications/ActionCenter';

export default function Header() {
  return (
    <header className="flex justify-end p-4">
      <ActionCenter />
    </header>
  );
}`}
          html={`<!-- Popover Structure -->
<div class="relative">
  <button class="p-2 rounded-full hover:bg-zinc-100">
    <svg class="w-5 h-5">...</svg>
    <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
  </button>
  
  <!-- Content Panel -->
  <div class="fixed top-[90px] right-8 w-[600px] bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl">
    ...
  </div>
</div>`}
          css={`.action-center-panel {
  backdrop-filter: blur(24px);
  max-height: 80vh;
}`}
          prompt="Generate a notification center with tabs, search, and action items."
        />
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Smart Filtering</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Tabs filter notifications by type (Payments, Approvals, Shipping) with real-time counts.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Embedded Chat</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Integrated chat view allowing users to reply directly without leaving the context.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Brand Integration</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Uses Strata's Zinc scale for structure and Volt Lime for primary interactive elements.
          </p>
        </div>
      </div>
    </div>
  );
}
