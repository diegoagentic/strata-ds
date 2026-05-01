import type { Meta, StoryObj } from '@storybook/react';
import { ListToolbar } from '../../components/application-ui/list-toolbar';
import { fn } from '@storybook/test';

const meta = {
  title: '2. Application UI/ListToolbar',
  component: ListToolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A reusable toolbar for list and catalog views that provides optional search, filter dropdown, sort dropdown, and a primary action button. All sections are independently optional, making it flexible for different page layouts. Supports a children slot for custom toolbar additions.',
      },
    },
  },
  argTypes: {
    search: {
      description: 'Configuration object for the search input including value, onChange handler, and placeholder text.',
      table: { category: 'Behavior' },
    },
    filter: {
      description: 'Configuration object for the filter dropdown including options, selected value, and onChange handler.',
      table: { category: 'Behavior' },
    },
    sort: {
      description: 'Configuration object for the sort dropdown including options, selected value, and onChange handler.',
      table: { category: 'Behavior' },
    },
    primaryAction: {
      description: 'Configuration for the primary action button with label, onClick handler, and optional icon.',
      table: { category: 'Behavior' },
    },
  },
} satisfies Meta<typeof ListToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    search: {
      value: '',
      onSearchChange: fn(),
      placeholder: 'Search products...',
    },
    filter: {
      options: [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
      value: 'all',
      onValueChange: fn(),
    },
    sort: {
      options: [
        { value: 'name-asc', label: 'Name A-Z' },
        { value: 'name-desc', label: 'Name Z-A' },
        { value: 'date', label: 'Date' },
      ],
      value: 'name-asc',
      onValueChange: fn(),
    },
    primaryAction: {
      label: 'Add Product',
      onClick: fn(),
    },
  },
};

export const SearchOnly: Story = {
  args: {
    search: {
      value: '',
      onSearchChange: fn(),
      placeholder: 'Search orders...',
    },
  },
};

export const WithoutPrimaryAction: Story = {
  args: {
    search: {
      value: '',
      onSearchChange: fn(),
      placeholder: 'Search...',
    },
    filter: {
      options: [
        { value: 'all', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' },
      ],
      value: 'all',
      onValueChange: fn(),
    },
  },
};
