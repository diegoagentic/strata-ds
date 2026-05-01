import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/forms/select';

const meta = {
  title: '4. Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select provides a fully accessible dropdown selection control built on Radix UI Select. Use it for single-value selection from a list of options with support for grouped items, placeholders, disabled states, and custom trigger sizing. It features animated transitions, scroll buttons for long lists, and keyboard navigation.',
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'When true, prevents the user from interacting with the select.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    defaultValue: {
      description: 'The initially selected value (uncontrolled mode).',
      control: 'text',
      table: { category: 'Behavior' },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pick an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
