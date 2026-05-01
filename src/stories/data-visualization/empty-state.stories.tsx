import type { Meta, StoryObj } from '@storybook/react';
import { FolderOpen } from 'lucide-react';
import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateActions } from '../../components/data-visualization/empty-state';

const meta = {
  title: '3. Data Visualization/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'EmptyState is a placeholder component shown when a list, table, or section has no content to display. Use it to communicate the empty condition and guide users toward a next action. It supports an icon, title, description, and action buttons through composable sub-components.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the empty state container.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <EmptyState>
        <EmptyStateIcon>
          <FolderOpen className="h-6 w-6 text-zinc-400" />
        </EmptyStateIcon>
        <EmptyStateTitle>No projects found</EmptyStateTitle>
        <EmptyStateDescription>
          Get started by creating a new project or importing an existing one.
        </EmptyStateDescription>
        <EmptyStateActions>
          <button
            type="button"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            New Project
          </button>
        </EmptyStateActions>
      </EmptyState>
    </div>
  ),
};

export const WithoutAction: Story = {
  name: 'Without Action Button',
  render: () => (
    <div className="w-[600px]">
      <EmptyState>
        <EmptyStateIcon>
          <FolderOpen className="h-6 w-6 text-zinc-400" />
        </EmptyStateIcon>
        <EmptyStateTitle>No results</EmptyStateTitle>
        <EmptyStateDescription>
          Try adjusting your search or filter to find what you are looking for.
        </EmptyStateDescription>
      </EmptyState>
    </div>
  ),
};
