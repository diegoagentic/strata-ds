import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../../components/overlays/scroll-area';

const meta = {
  title: '5. Overlays/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ScrollArea provides a custom-styled scrollable container with themed scrollbars, built on Radix UI ScrollArea. Use it to constrain content within a fixed-size region with consistent cross-browser scrollbar styling. It supports both vertical and horizontal scrolling orientations.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the scroll area root.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="py-1 text-sm">
          Item {i + 1}
        </div>
      ))}
    </ScrollArea>
  ),
};
