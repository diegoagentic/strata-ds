import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldLabel, FieldDescription, FieldError } from '../../components/forms/field';

const meta = {
  title: '4. Forms/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Field provides a consistent layout wrapper for form inputs, associating a label, description, and error message with a control. Use it to ensure accessible, well-structured form fields with proper label-input binding. Composed of FieldLabel, FieldDescription, and FieldError sub-components.',
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <input
        type="email"
        placeholder="you@example.com"
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
      />
      <FieldDescription>We will never share your email.</FieldDescription>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <input
        type="email"
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
      />
      <FieldError>This field is required.</FieldError>
    </Field>
  ),
};

export const Optional: Story = {
  render: () => (
    <Field>
      <FieldLabel optional>Nickname</FieldLabel>
      <input
        type="text"
        placeholder="Optional nickname"
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
      />
    </Field>
  ),
};
