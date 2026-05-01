import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/forms/textarea';

const meta = {
  title: '4. Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Textarea provides a multi-line text input with consistent form styling and validation support. Use it for comments, descriptions, or any input requiring more than a single line. It features auto-sizing via field-sizing-content, focus ring styling, placeholder support, and disabled/invalid states.',
      },
    },
  },
  argTypes: {
    placeholder: {
      description: 'Hint text displayed when the textarea is empty.',
      control: 'text',
      table: { category: 'Content' },
    },
    disabled: {
      description: 'When true, prevents user interaction with the textarea.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    value: {
      description: 'The controlled value of the textarea.',
      control: 'text',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};
