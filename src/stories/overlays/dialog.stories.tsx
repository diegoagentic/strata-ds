import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../../components/overlays/dialog';
import { Button } from '@/components/application-ui/button';

const meta = {
  title: '5. Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Dialog presents content in a modal overlay that focuses user attention on a specific task or message. Use it for forms, confirmations, or detailed views that require user interaction before returning to the main content. Features a backdrop overlay, close button, and composable header, body, and footer sections.',
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="flex min-h-[320px] items-start justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog content.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Dialog body content goes here.
          </p>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

export const AlertStyle: Story = {
  args: {},
  render: () => (
    <div className="flex min-h-[280px] items-start justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Item</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the item.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};
