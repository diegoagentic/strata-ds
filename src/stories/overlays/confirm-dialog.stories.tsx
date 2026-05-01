import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/application-ui/button';
import { ConfirmDialog } from '@/components/overlays/confirm-dialog';

const meta = {
  title: '5. Overlays/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  args: {
    title: 'Delete order?',
    description: 'This action cannot be undone. The order and its related line items will be removed.',
    confirmLabel: 'Delete order',
    onConfirm: fn(),
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="min-h-[50vh] p-6">
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Open confirm dialog
        </Button>
        <ConfirmDialog
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            args.onConfirm();
            setOpen(false);
          }}
        />
      </div>
    );
  },
};
