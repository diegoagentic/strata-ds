import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../../components/application-ui/separator';
import { SEPARATOR_ORIENTATION_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Separator renders a visual divider line between content sections, built on Radix UI Separator. Use it to create clear visual boundaries in layouts, menus, or toolbars. It supports both horizontal and vertical orientations and can be marked as decorative for accessibility.',
      },
    },
  },
  argTypes: {
    orientation: {
      description: 'The direction of the separator line.',
      control: 'radio',
      options: [...SEPARATOR_ORIENTATION_OPTIONS],
      table: { category: 'Appearance' },
    },
    decorative: {
      description: 'When true, the separator is purely visual and hidden from assistive technology.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Separator />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
};
