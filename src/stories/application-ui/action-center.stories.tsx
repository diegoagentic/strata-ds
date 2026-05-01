import type { Meta, StoryObj } from '@storybook/react';
import ActionCenter from '@/components/application-ui/action-center';

const meta = {
  title: '2. Application UI/ActionCenter',
  component: ActionCenter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ActionCenter is a notification hub that displays categorized alerts, discrepancies, payments, approvals, and live chat messages. Use it as the primary entry point for users to review and act on pending items. It features tabbed filtering, search, and an integrated chat view.',
      },
    },
  },
} satisfies Meta<typeof ActionCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  name: 'Pre-Opened',
  render: () => (
    <div className="flex items-center justify-center">
      <ActionCenter />
      <p className="ml-4 text-sm text-zinc-500">Click the bell icon to open the Action Center</p>
    </div>
  ),
};
