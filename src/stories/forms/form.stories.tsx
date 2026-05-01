import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../../components/forms/form';

const meta = {
  title: '4. Forms/Form',
  component: FormItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Form integrates react-hook-form with accessible form field primitives, providing automatic label association, validation messages, and description text. Use it to build validated forms with consistent structure and error handling. Composed of FormField, FormItem, FormLabel, FormControl, FormDescription, and FormMessage.',
      },
    },
  },
} satisfies Meta<typeof FormItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const form = useForm({
      defaultValues: { username: '' },
    });

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <input
                    placeholder="Enter username"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  },
};
