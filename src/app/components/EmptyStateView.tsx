import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateActions } from '../../components/catalyst/empty-state';
import { Button } from '../../components/catalyst/button';
import { CopyButton } from './CopyButton';
import { FolderPlus, Search, ShoppingCart } from 'lucide-react';

export function EmptyStateView() {
    return (
        <div>
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                        Empty State
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Placeholders for when content is missing, usually with a call to action.
                    </p>
                </div>
            </div>

            {/* Examples */}
            <div className="grid grid-cols-1 gap-10">

                {/* Basic Empty State */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        New Project
                    </h2>
                    <div className="rounded-lg p-6 bg-white dark:bg-zinc-900">
                        <EmptyState>
                            <EmptyStateIcon>
                                <FolderPlus className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                            </EmptyStateIcon>
                            <EmptyStateTitle>No projects found</EmptyStateTitle>
                            <EmptyStateDescription>
                                Get started by creating a new project.
                            </EmptyStateDescription>
                            <EmptyStateActions>
                                <Button>Create Project</Button>
                            </EmptyStateActions>
                        </EmptyState>
                    </div>
                    <div className="mt-4">
                        <CopyButton
                            formats={[{
                                label: 'React', value: `<EmptyState>
  <EmptyStateIcon>
    <FolderPlus />
  </EmptyStateIcon>
  <EmptyStateTitle>No projects found</EmptyStateTitle>
  <EmptyStateDescription>
    Get started by creating a new project.
  </EmptyStateDescription>
  <EmptyStateActions>
    <Button>Create Project</Button>
  </EmptyStateActions>
</EmptyState>` }]}
                        />
                    </div>
                </section>

                {/* With Different Visual */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Empty Cart
                    </h2>
                    <div className="rounded-lg p-6 bg-white dark:bg-zinc-900">
                        <EmptyState className="border-zinc-200 dark:border-zinc-800">
                            <EmptyStateIcon className="bg-info-light dark:bg-info/10">
                                <ShoppingCart className="h-6 w-6 text-info" />
                            </EmptyStateIcon>
                            <EmptyStateTitle>Your cart is empty</EmptyStateTitle>
                            <EmptyStateDescription>
                                Looks like you haven't added anything to your cart yet.
                            </EmptyStateDescription>
                            <EmptyStateActions>
                                <Button color="blue">Start Shopping</Button>
                            </EmptyStateActions>
                        </EmptyState>
                    </div>
                </section>

                {/* Usage Guidelines */}
                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        Usage Guidelines
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-success-light dark:bg-success/10 border border-success/20 dark:border-success/30 rounded-md p-6">
                            <h3 className="text-lg font-semibold text-success dark:text-success-light mb-2">Do's</h3>
                            <ul className="list-disc list-inside text-sm text-success dark:text-success-light space-y-1">
                                <li>Clearly explain why the state is empty (e.g., "No projects found").</li>
                                <li>Provide a clear path forward (e.g., "Create Project").</li>
                            </ul>
                        </div>
                        <div className="bg-error-light dark:bg-error/10 border border-error/20 dark:border-error/30 rounded-md p-6">
                            <h3 className="text-lg font-semibold text-error dark:text-error-light mb-2">Don'ts</h3>
                            <ul className="list-disc list-inside text-sm text-error dark:text-error-light space-y-1">
                                <li>Don't leave the user at a dead end.</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
