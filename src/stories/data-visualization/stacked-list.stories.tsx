import type { Meta, StoryObj } from '@storybook/react';
import { StackedList, StackedListItem } from '../../components/data-visualization/stacked-list';

const meta = {
  title: '3. Data Visualization/StackedList',
  component: StackedList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'StackedList renders a vertical list of items separated by dividers, using semantic ul/li elements. Use it for displaying collections of records such as team members, recent activity, or search results. Each StackedListItem provides a flexible row layout with automatic spacing.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the list container.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof StackedList>;

export default meta;
type Story = StoryObj<typeof meta>;

const people = [
  { name: 'Leslie Alexander', email: 'leslie@example.com', role: 'Co-Founder / CEO' },
  { name: 'Michael Foster', email: 'michael@example.com', role: 'CTO' },
  { name: 'Dries Vincent', email: 'dries@example.com', role: 'Manager' },
  { name: 'Lindsay Walton', email: 'lindsay@example.com', role: 'Designer' },
];

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <StackedList>
        {people.map((person) => (
          <StackedListItem key={person.email}>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">
                {person.email}
              </p>
            </div>
            <div className="shrink-0">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {person.role}
              </span>
            </div>
          </StackedListItem>
        ))}
      </StackedList>
    </div>
  ),
};

export const SingleItem: Story = {
  name: 'Single Item',
  render: () => (
    <div className="w-[500px]">
      <StackedList>
        <StackedListItem>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              Only Item
            </p>
            <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">
              This list contains a single item.
            </p>
          </div>
        </StackedListItem>
      </StackedList>
    </div>
  ),
};

export const WithActions: Story = {
  name: 'With Action Buttons',
  render: () => (
    <div className="w-[500px]">
      <StackedList>
        {people.map((person) => (
          <StackedListItem key={person.email}>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">
                {person.email}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <button className="text-xs text-blue-600 hover:text-blue-500 font-medium">Edit</button>
              <button className="text-xs text-red-600 hover:text-red-500 font-medium">Remove</button>
            </div>
          </StackedListItem>
        ))}
      </StackedList>
    </div>
  ),
};
