import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { DatePicker } from '@/components/forms/date-picker';

const meta = {
  title: '4. Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    placeholder: 'Select date',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('2026-03-20');
    return (
      <div className="w-80">
        <DatePicker {...args} value={value} onChange={setValue} aria-label="Requested delivery date" />
      </div>
    );
  },
};

export const Empty: Story = {
  args: {
    value: '',
  },
};
