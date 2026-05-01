import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/overlays/alert-dialog';
import { Button } from '../../components/application-ui/button';

const meta = {
  title: '5. Overlays/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AlertDialog presents a modal dialog that interrupts the user to confirm a critical action such as deleting data or discarding changes. Unlike a standard Dialog, it requires an explicit response before the user can continue. It is fully accessible and follows the WAI-ARIA alert dialog pattern.',
      },
    },
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
