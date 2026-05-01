import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../components/application-ui/progress';

const meta = {
  title: '2. Application UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Progress displays a horizontal bar indicating the completion status of a task or process, built on Radix UI Progress. Use it to show upload progress, loading states, or step-based workflows. The indicator animates smoothly as the value changes.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'The current progress value, from 0 to max (default max is 100).',
      control: { type: 'range', min: 0, max: 100, step: 1 },
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the track.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
  },
};
