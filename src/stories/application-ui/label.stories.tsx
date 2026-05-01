import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components/application-ui/label';

const meta = {
  title: '2. Application UI/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Label renders accessible text labels for form controls, built on Radix UI Label primitive. Use it to associate descriptive text with inputs, selects, and other form elements. It applies consistent typography styling and supports all standard HTML label attributes.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The label text or content to display.',
      control: 'text',
      table: { category: 'Content' },
    },
    htmlFor: {
      description: 'The id of the form element the label is associated with.',
      control: 'text',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const Required: Story = {
  render: () => (
    <Label>
      Email address <span className="text-red-500">*</span>
    </Label>
  ),
};
