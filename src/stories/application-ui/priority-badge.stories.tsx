import type { Meta, StoryObj } from '@storybook/react';
import { AlertTriangle } from 'lucide-react';
import { PriorityBadge } from '@/components/application-ui/priority-badge';

const meta = {
  title: '2. Application UI/PriorityBadge',
  component: PriorityBadge,
  tags: ['autodocs'],
  args: {
    priority: 'medium',
  },
} satisfies Meta<typeof PriorityBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllPriorities: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <PriorityBadge priority="low" />
      <PriorityBadge priority="medium" />
      <PriorityBadge priority="high" />
      <PriorityBadge priority="critical" />
    </div>
  ),
};

export const PillNano: Story = {
  args: {
    priority: 'critical',
    size: 'nano',
    shape: 'pill',
    prefix: <AlertTriangle className="size-3" />,
  },
};
