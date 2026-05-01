import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/forms/checkbox';

const meta = {
  title: '4. Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox renders a toggleable check input for binary choices. Use it in forms to let users select one or more options from a set, or to confirm agreement to terms. Supports checked, unchecked, indeterminate, and disabled states with full keyboard and screen-reader accessibility.',
      },
    },
  },
  argTypes: {
    defaultChecked: {
      control: 'boolean',
      description: 'Sets the initial checked state of the uncontrolled checkbox.',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox, preventing user interaction.',
      table: { category: 'Behavior' },
    },
  },
} satisfies Meta<typeof Checkbox>;

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
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};
