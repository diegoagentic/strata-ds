import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../../components/forms/switch';

const meta = {
  title: '4. Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Switch provides a toggle control for binary on/off states, built on Radix UI Switch. Use it for settings that take effect immediately, such as enabling notifications or toggling dark mode. It supports checked, unchecked, and disabled states with smooth thumb animation and focus ring styling.',
      },
    },
  },
  argTypes: {
    defaultChecked: {
      description: 'Whether the switch is initially in the checked state (uncontrolled).',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    checked: {
      description: 'The controlled checked state of the switch.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    disabled: {
      description: 'When true, prevents user interaction with the switch.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the switch root.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};
