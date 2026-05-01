import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import * as React from 'react';
import { Button } from '../../components/application-ui/button';
import {
  FeedbackToast,
  FeedbackToastProvider,
  useFeedbackToast,
  type FeedbackToastVariant,
} from '../../components/overlays/feedback-toast';

const meta = {
  title: '5. Overlays/FeedbackToast',
  component: FeedbackToast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Toast for user feedback (success, error, warning). Use FeedbackToastProvider to wrap your app and useFeedbackToast() to show/hide toasts. Toasts auto-dismiss after a configurable duration (default 3s) and can be closed manually.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['success', 'error', 'warning'],
      description: 'Visual variant of the toast.',
      table: { category: 'Appearance' },
    },
    message: {
      control: 'text',
      description: 'Message text shown in the toast.',
      table: { category: 'Content' },
    },
    onClose: {
      action: 'close',
      description: 'Called when the user clicks the close button or toast is dismissed.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof FeedbackToast>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Success toast (default variant). */
export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Your changes have been saved.',
    onClose: fn(),
  },
};

/** Error toast. */
export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Something went wrong. Please try again.',
    onClose: fn(),
  },
};

/** Warning toast. */
export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Your session will expire in 5 minutes.',
    onClose: fn(),
  },
};

/** All variants side by side (presentation only). */
export const AllVariants: Story = {
  args: {
    message: '',
    onClose: fn(),
  },
  render: () => (
    <div className="flex flex-col gap-3 max-w-[393px]">
      <FeedbackToast
        variant="success"
        message="Success message."
        onClose={fn()}
      />
      <FeedbackToast
        variant="error"
        message="Error message."
        onClose={fn()}
      />
      <FeedbackToast
        variant="warning"
        message="Warning message."
        onClose={fn()}
      />
    </div>
  ),
};

/**
 * **Recommended usage:** Wrap your app (or a section) with `FeedbackToastProvider`,
 * then call `useFeedbackToast().show({ variant, message })` to display a toast.
 * Toasts render in a fixed bottom-right container, auto-dismiss after 3s (or custom duration),
 * and can be closed early via the close button.
 */
function TriggerDemo() {
  const { show } = useFeedbackToast();

  const trigger = (variant: FeedbackToastVariant, message: string, duration?: number) => () => {
    show({ variant, message, duration });
  };

  return (
    <div className="space-y-4 p-4">
      <p className="text-sm text-muted-foreground">
        Click a button to show a toast. It will auto-dismiss after 3 seconds or when you click the close button.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={trigger('success', 'Action completed successfully.')}
        >
          Show success
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={trigger('error', 'An error occurred. Please try again.')}
        >
          Show error
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700"
          onClick={trigger('warning', 'Your session will expire soon.')}
        >
          Show warning
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={trigger('success', 'This toast stays for 6 seconds.', 6000)}
        >
          Show toast (6s duration)
        </Button>
      </div>
    </div>
  );
}

/** Use FeedbackToastProvider and useFeedbackToast to trigger toasts from anywhere inside the tree. */
export const WithProviderAndTrigger: Story = {
  args: {
    message: '',
    onClose: fn(),
  },
  render: () => (
    <FeedbackToastProvider>
      <TriggerDemo />
    </FeedbackToastProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Wrap your app with FeedbackToastProvider, then use the useFeedbackToast() hook to call show({ variant, message, duration?). Toasts appear in the bottom-right and auto-dismiss or can be closed manually.',
      },
    },
  },
};
