import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../../components/overlays/alert';
import { ALERT_VARIANT_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '5. Overlays/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Alert displays a short, important message that attracts the user\'s attention without interrupting their workflow. Use it for inline feedback such as success confirmations, error notices, or informational tips. Supports multiple semantic variants including default, destructive, success, warning, info, and brand.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...ALERT_VARIANT_OPTIONS],
      description: 'The visual style indicating the alert severity or intent.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};
