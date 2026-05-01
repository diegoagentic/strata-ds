import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset, Legend, FieldGroup, Field, Label, Description, ErrorMessage } from '../../components/forms/fieldset';

const meta = {
  title: '4. Forms/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Fieldset provides a structured form layout system with support for legends, field groups, labels, descriptions, and error messages. Use it to organize form fields into logical sections with consistent spacing. Built on Headless UI, it leverages data-slot attributes for automatic layout coordination.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the fieldset container.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset>
      <Legend>Shipping Details</Legend>
      <p>Provide your shipping information below.</p>
      <FieldGroup>
        <Field>
          <Label>Full Name</Label>
          <Description>As it appears on your ID.</Description>
          <input
            type="text"
            data-slot="control"
            placeholder="Jane Smith"
            className="block w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-500"
          />
        </Field>
        <Field>
          <Label>Email Address</Label>
          <input
            type="email"
            data-slot="control"
            placeholder="jane@example.com"
            className="block w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-500"
          />
          <ErrorMessage>Please enter a valid email address.</ErrorMessage>
        </Field>
        <Field>
          <Label>Address</Label>
          <Description>Your full street address.</Description>
          <input
            type="text"
            data-slot="control"
            placeholder="123 Main St"
            className="block w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-500"
          />
        </Field>
      </FieldGroup>
    </Fieldset>
  ),
};

export const SingleField: Story = {
  name: 'Single Field',
  render: () => (
    <Fieldset>
      <Legend>Account Settings</Legend>
      <FieldGroup>
        <Field>
          <Label>Display Name</Label>
          <Description>This is the name other users will see.</Description>
          <input
            type="text"
            data-slot="control"
            placeholder="Your display name"
            className="block w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-500"
          />
        </Field>
      </FieldGroup>
    </Fieldset>
  ),
};

export const WithErrors: Story = {
  name: 'With Validation Errors',
  render: () => (
    <Fieldset>
      <Legend>Login</Legend>
      <FieldGroup>
        <Field>
          <Label>Username</Label>
          <input
            type="text"
            data-slot="control"
            defaultValue="ab"
            className="block w-full rounded-lg border border-red-300 dark:border-red-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white"
          />
          <ErrorMessage>Username must be at least 3 characters.</ErrorMessage>
        </Field>
        <Field>
          <Label>Password</Label>
          <input
            type="password"
            data-slot="control"
            className="block w-full rounded-lg border border-red-300 dark:border-red-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white"
          />
          <ErrorMessage>Password is required.</ErrorMessage>
        </Field>
      </FieldGroup>
    </Fieldset>
  ),
};
