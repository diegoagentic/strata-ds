import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { Toaster } from '@/components/overlays/sonner';
import { ThemeProvider } from '@/contexts/ThemeContext';

const meta = {
  title: '5. Overlays/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sonner (Toaster) provides a toast notification system powered by the sonner library with automatic theme integration. Use it to display brief, non-blocking feedback messages such as success confirmations, error alerts, or informational notices. Place the Toaster component once in your layout and trigger toasts imperatively via the toast() function.',
      },
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <div>
        <Toaster />
        <button
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          onClick={() => toast('This is a toast notification')}
        >
          Show Toast
        </button>
      </div>
    </ThemeProvider>
  ),
};
