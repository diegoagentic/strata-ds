import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '../../components/application-ui/status-badge';
import type { StatusBadgeValue } from '../../components/application-ui/status-badge';

const STATUSES: StatusBadgeValue[] = [
  'active',
  'available',
  'in_progress',
  'pending',
  'completed',
  'maintenance',
  'warning',
  'error',
  'archived',
];

const meta = {
  title: '2. Application UI/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Status badge with semantic colors. Accepts canonical statuses (active, available, in_progress, etc.) and aliases (in-progress, in use, failed). Renders default label or children.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: STATUSES,
      description: 'Canonical status or alias; drives color and default label.',
      table: { category: 'Data' },
    },
    children: {
      control: 'text',
      description: 'Optional custom label (overrides default label for status).',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** All canonical statuses in a row. */
export const AllStatuses: Story = {
  args: { status: 'active' },
  render: () => (
    <div className="flex flex-wrap gap-2">
      {STATUSES.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  ),
};

/** Active status (default label). */
export const Active: Story = {
  args: { status: 'active' },
};

/** Available status. */
export const Available: Story = {
  args: { status: 'available' },
};

/** In progress status. */
export const InProgress: Story = {
  args: { status: 'in_progress' },
};

/** Pending status. */
export const Pending: Story = {
  args: { status: 'pending' },
};

/** Completed status. */
export const Completed: Story = {
  args: { status: 'completed' },
};

/** Maintenance status. */
export const Maintenance: Story = {
  args: { status: 'maintenance' },
};

/** Warning status. */
export const Warning: Story = {
  args: { status: 'warning' },
};

/** Error status. */
export const Error: Story = {
  args: { status: 'error' },
};

/** Archived status. */
export const Archived: Story = {
  args: { status: 'archived' },
};

/** Alias "in-progress" maps to in_progress styling. */
export const AliasInProgress: Story = {
  args: { status: 'in-progress' },
};

/** Alias "in use" maps to active styling. */
export const AliasInUse: Story = {
  args: { status: 'in use' },
};

/** Alias "failed" maps to error styling. */
export const AliasFailed: Story = {
  args: { status: 'failed' },
};

/** Custom label via children. */
export const CustomLabel: Story = {
  args: {
    status: 'in_progress',
    children: 'Processing order',
  },
};
