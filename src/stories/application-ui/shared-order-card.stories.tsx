import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SharedOrderCard } from '../../components/application-ui/shared-order-card';

const meta = {
  title: '2. Application UI/SharedOrderCard',
  component: SharedOrderCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Order-style card in two variants: default (detailed with stages, project manager) and pipeline (compact with expandable details). Supports status badge, expand/collapse, and action handlers.',
      },
    },
  },
  argTypes: {
    onExpandToggle: { action: 'expandToggle' },
    onPrimaryAction: { action: 'primaryAction' },
    onSecondaryAction: { action: 'secondaryAction' },
    onDocumentClick: { action: 'documentClick' },
    onEditClick: { action: 'editClick' },
    onMoreClick: { action: 'moreClick' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-4 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SharedOrderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOrderArgs = {
  initials: 'JD',
  client: 'John Doe',
  orderId: 'ORD-2025-0042',
  amount: '$12,450.00',
  date: 'Mar 15, 2025',
  status: 'In Progress',
  onExpandToggle: fn(),
  onPrimaryAction: fn(),
  onSecondaryAction: fn(),
  onDocumentClick: fn(),
  onEditClick: fn(),
  onMoreClick: fn(),
  onClick: fn(),
};

/** Default variant: summary view. */
export const Default: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'default',
    statusBadge: 'in_progress',
  },
};

const orderGridCards = [
  { ...defaultOrderArgs, initials: 'JD', client: 'John Doe', orderId: 'ORD-001', amount: '$12,450', statusBadge: 'in_progress' as const },
  { ...defaultOrderArgs, initials: 'AR', client: 'Alex Rivera', orderId: 'ORD-002', amount: '$8,200', statusBadge: 'completed' as const },
  { ...defaultOrderArgs, initials: 'SK', client: 'Sam Kim', orderId: 'ORD-003', amount: '$22,100', statusBadge: 'pending' as const },
  { ...defaultOrderArgs, initials: 'MJ', client: 'Maria Jones', orderId: 'ORD-004', amount: '$5,600', statusBadge: 'active' as const },
  { ...defaultOrderArgs, initials: 'TC', client: 'Taylor Chen', orderId: 'ORD-005', amount: '$15,300', statusBadge: 'in_progress' as const },
  { ...defaultOrderArgs, initials: 'EW', client: 'Emma Wilson', orderId: 'ORD-006', amount: '$3,890', statusBadge: 'completed' as const },
  { ...defaultOrderArgs, initials: 'JB', client: 'James Brown', orderId: 'ORD-007', amount: '$19,750', statusBadge: 'pending' as const },
  { ...defaultOrderArgs, initials: 'LP', client: 'Lee Park', orderId: 'ORD-008', amount: '$7,440', statusBadge: 'error' as const },
  { ...defaultOrderArgs, initials: 'NG', client: 'Noah Garcia', orderId: 'ORD-009', amount: '$11,020', statusBadge: 'in_progress' as const },
];

/** Nine cards in a 3×3 grid (default variant). */
export const Grid3x3: Story = {
  render: (args) => (
    <>
      {orderGridCards.map((card, i) => (
        <SharedOrderCard key={i} {...args} {...card} variant="default" />
      ))}
    </>
  ),
  args: { ...defaultOrderArgs, variant: 'default' },
};

/** Default variant expanded with project manager and stages. */
export const DefaultExpanded: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'default',
    statusBadge: 'completed',
    isExpanded: true,
    projectManager: { name: 'Alex Rivera', role: 'Project Manager' },
    stages: [
      { key: '1', label: 'Quote', status: 'completed' },
      { key: '2', label: 'Order', status: 'current' },
      { key: '3', label: 'Delivery', status: 'pending' },
    ],
  },
};

/** Default expanded with action required message. */
export const DefaultWithActionRequired: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'default',
    statusBadge: 'pending',
    isExpanded: true,
    projectManager: { name: 'Alex Rivera', role: 'Project Manager' },
    stages: [
      { key: '1', label: 'Quote', status: 'completed' },
      { key: '2', label: 'Order', status: 'current' },
      { key: '3', label: 'Delivery', status: 'pending' },
    ],
    actionRequiredMessage: 'Customer signature required for delivery.',
  },
};

/** Pipeline variant: compact card. */
export const Pipeline: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'pipeline',
    statusBadge: 'in_progress',
  },
};

/** Pipeline variant expanded with project, location, items. */
export const PipelineExpanded: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'pipeline',
    statusBadge: 'pending',
    isExpanded: true,
    project: 'Office Build-out Phase 2',
    location: '123 Main St, Suite 400',
    itemsCount: '24',
  },
};

/** Card with active ring (e.g. selected in grid). */
export const Active: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'default',
    statusBadge: 'active',
    isActive: true,
  },
};

/** Status badge using alias "in-progress". */
export const StatusAliasInProgress: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'default',
    statusBadge: 'in-progress',
  },
};

/** Status badge: error. */
export const StatusError: Story = {
  args: {
    ...defaultOrderArgs,
    variant: 'default',
    statusBadge: 'error',
    status: 'Failed',
  },
};
