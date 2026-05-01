import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TableEmptyState } from '../../components/application-ui/table-empty-state';

const meta = {
  title: '2. Application UI/TableEmptyState',
  component: TableEmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Empty state for tables: message and a "Clear filters" button. Use when a filtered table has no results.',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Message shown when the table is empty (e.g. after filtering).',
      table: { category: 'Content' },
    },
    onClearFilters: {
      action: 'clearFilters',
      description: 'Called when the user clicks "Clear filters".',
      table: { category: 'Actions' },
    },
  },
} satisfies Meta<typeof TableEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default empty state after applying filters. */
export const Default: Story = {
  args: {
    message: 'No results match your filters.',
    onClearFilters: fn(),
  },
};

/** Custom message. */
export const CustomMessage: Story = {
  args: {
    message: 'No orders found for this date range. Try adjusting your search.',
    onClearFilters: fn(),
  },
};
