import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../components/application-ui/divider';

const meta = {
  title: '2. Application UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Divider renders a horizontal rule to visually separate content sections. Use it between groups of related elements to improve scannability and create clear visual hierarchy. Supports a soft variant with reduced opacity for subtler separation.',
      },
    },
  },
  argTypes: {
    soft: {
      control: 'boolean',
      description: 'When true, renders a lighter, more subtle divider line.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const Soft: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider soft />
      <p className="text-sm">Content below</p>
    </div>
  ),
};
