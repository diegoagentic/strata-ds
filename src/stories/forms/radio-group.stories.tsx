import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '../../components/forms/radio-group';
import { Label } from '../../components/application-ui/label';

const meta = {
  title: '4. Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'RadioGroup provides a set of mutually exclusive radio options built on Radix UI RadioGroup. Use it when the user must select exactly one option from a group. It supports default values, disabled states, keyboard navigation, and integrates with Label for accessible form patterns.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: 'The value of the radio item that should be checked initially.',
      control: 'text',
      table: { category: 'Behavior' },
    },
    disabled: {
      description: 'When true, prevents user interaction with all radio items.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the group container.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};
