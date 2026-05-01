import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Grid2X2, List, Plus, SlidersHorizontal } from 'lucide-react';
import { SectionToolbar } from '@/components/application-ui/section-toolbar';

const meta = {
  title: '2. Application UI/SectionToolbar',
  component: SectionToolbar,
  tags: ['autodocs'],
} satisfies Meta<typeof SectionToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [search, setSearch] = React.useState('');
    const [filter, setFilter] = React.useState('all');
    const [sort, setSort] = React.useState('latest');
    const [view, setView] = React.useState('grid');

    return (
      <SectionToolbar
        search={{ value: search, onSearchChange: setSearch, placeholder: 'Search orders...' }}
        filters={{
          value: filter,
          onValueChange: setFilter,
          options: [
            { value: 'all', label: 'All statuses' },
            { value: 'pending', label: 'Pending' },
            { value: 'approved', label: 'Approved' },
          ],
          placeholder: 'Filter',
        }}
        sort={{
          value: sort,
          onValueChange: setSort,
          options: [
            { value: 'latest', label: 'Latest first' },
            { value: 'oldest', label: 'Oldest first' },
          ],
          placeholder: 'Sort',
        }}
        viewMode={{
          value: view,
          onValueChange: setView,
          options: [
            { value: 'grid', icon: <Grid2X2 className="size-4" />, ariaLabel: 'Grid view' },
            { value: 'list', icon: <List className="size-4" />, ariaLabel: 'List view' },
          ],
        }}
        actions={[
          { icon: <SlidersHorizontal className="size-4" />, ariaLabel: 'Open filters', label: 'Filters', onClick: () => {} },
        ]}
        primaryAction={{ label: 'New Order', icon: <Plus className="size-4" />, onClick: () => {} }}
      />
    );
  },
};
