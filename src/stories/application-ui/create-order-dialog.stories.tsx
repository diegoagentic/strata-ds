import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import * as React from 'react';
import { Button } from '@/components/application-ui/button';
import { CreateOrderDialog } from '@/components/application-ui/create-order/create-order-dialog';
import { FeedbackToastProvider } from '@/components/overlays/feedback-toast';

const approvedQuotes = [
  {
    quoteId: 'Q-1042',
    date: '2026-03-11',
    customer: 'Atlas Builders',
    project: 'North Campus',
    value: 14200,
    status: 'Approved',
  },
  {
    quoteId: 'Q-1047',
    date: '2026-03-15',
    customer: 'Summit Fitouts',
    project: 'Lobby Refresh',
    value: 8940,
    status: 'Approved',
  },
];

const importOrderAnalysis = {
  fileName: 'atlas-po.pdf',
  customerName: 'Atlas Builders',
  customerId: 'atlas-builders',
  projectReference: 'North Campus',
  poNumber: 'PO-7721',
  requestedDate: '2026-04-10',
  address: '210 Westlake Ave, Seattle, WA',
  lineItems: [
    { description: 'Task Chair', qty: 18, price: 329, total: 5922 },
    { description: 'Sit-Stand Desk', qty: 12, price: 899, total: 10788 },
  ],
  itemCount: 30,
  confidence: 'High',
};

const orderTemplates = [
  {
    id: 'tpl-a',
    name: 'Corporate Office Standard',
    category: 'Office',
    itemCount: 2,
    lastUsed: '2026-02-18',
    totalValue: 3880,
    projectReference: 'North Campus',
    customerId: 'atlas-builders',
    shippingAddress: '210 Westlake Ave, Seattle, WA',
    lineItems: [
      { description: 'Task Chair', qty: 10, unitPrice: 329 },
      { description: 'Desk Lamp', qty: 10, unitPrice: 59 },
    ],
  },
  {
    id: 'tpl-b',
    name: 'Retail Checkout Bundle',
    category: 'Retail',
    itemCount: 2,
    lastUsed: '2026-02-28',
    totalValue: 5457,
    projectReference: 'Lobby Refresh',
    customerId: 'summit-fitouts',
    shippingAddress: '88 Pine St, Portland, OR',
    lineItems: [
      { description: 'POS Counter', qty: 3, unitPrice: 1499 },
      { description: 'Queue Divider', qty: 8, unitPrice: 120 },
    ],
  },
];

const manualOrderCustomers = [
  { value: 'atlas-builders', label: 'Atlas Builders' },
  { value: 'summit-fitouts', label: 'Summit Fitouts' },
  { value: 'northstar-design', label: 'Northstar Design' },
];

const meta = {
  title: '2. Application UI/CreateOrderDialog',
  component: CreateOrderDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Full create-order flow dialog with quote conversion, template prefill, file import analysis, manual creation, and success feedback toasts.',
      },
    },
  },
} satisfies Meta<typeof CreateOrderDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractiveFlow: Story = {
  args: {
    onOpenChange: fn(),
    onConfirmCreate: fn(),
    onConfirmManualCreate: fn(),
    approvedQuotes,
    importOrderAnalysis,
    orderTemplates,
    manualOrderCustomers,
    theme: 'light',
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <FeedbackToastProvider>
        <div className="flex min-h-[80vh] items-center justify-center rounded-xl border border-dashed border-border p-6">
          <Button onClick={() => setOpen(true)}>Open Create Order Dialog</Button>
        </div>
        <CreateOrderDialog
          {...args}
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            args.onOpenChange(next);
          }}
        />
      </FeedbackToastProvider>
    );
  },
};

export const DarkTheme: Story = {
  ...InteractiveFlow,
  args: {
    ...InteractiveFlow.args,
    theme: 'dark',
  },
};
