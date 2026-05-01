import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '../../components/application-ui/calendar';

const meta = {
  title: '2. Application UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Calendar provides a date-picking interface that displays a monthly grid of days. Use it for selecting single dates, date ranges, or multiple dates in forms and filters. Built on react-day-picker with full keyboard navigation and locale support.',
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Calendar />,
};

export const WithSelected: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    );
  },
};
