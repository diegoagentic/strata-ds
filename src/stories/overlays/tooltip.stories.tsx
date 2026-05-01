import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '../../components/overlays/tooltip';

const meta = {
  title: '5. Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip displays a brief informational message when the user hovers over or focuses a trigger element, built on Radix UI Tooltip. Use it to provide additional context for icons, truncated text, or abbreviated labels. It features an arrow indicator, animated entrance/exit, and automatic positioning relative to the trigger.',
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="rounded-md border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm font-medium">
          Hover me
        </button>
      </TooltipTrigger>
      <TooltipContent>
        This is a tooltip
      </TooltipContent>
    </Tooltip>
  ),
};
