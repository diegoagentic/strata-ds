import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '../../components/overlays/popover';

const meta = {
  title: '5. Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Popover displays rich content in a floating panel anchored to a trigger element, built on Radix UI Popover. Use it for contextual forms, settings panels, or any content that should appear on demand without navigating away. It supports configurable alignment, side offset, and animated open/close transitions.',
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="rounded-md border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm font-medium">
          Open Popover
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Dimensions</h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Set the dimensions for the layer.
          </p>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm" htmlFor="width">Width</label>
              <input id="width" defaultValue="100%" className="col-span-2 h-8 rounded-md border px-3 text-sm" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm" htmlFor="height">Height</label>
              <input id="height" defaultValue="25px" className="col-span-2 h-8 rounded-md border px-3 text-sm" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
