import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Listbox, ListboxOption, ListboxLabel, ListboxDescription } from '../../components/forms/listbox';

const meta = {
  title: '4. Forms/Listbox',
  component: Listbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Listbox is a dropdown select component that presents a list of options for single selection. Use it when users need to choose from a predefined set of options without typing. Built on Headless UI, it features keyboard navigation, focus management, and supports labels and descriptions per option.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no option is selected.',
      table: { category: 'Content' },
    },
    autoFocus: {
      control: 'boolean',
      description: 'When true, the listbox button receives focus on mount.',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the listbox button.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const statuses = [
  { id: 1, label: 'Active', description: 'Currently in use' },
  { id: 2, label: 'Paused', description: 'Temporarily stopped' },
  { id: 3, label: 'Inactive', description: 'No longer in use' },
  { id: 4, label: 'Archived', description: 'Moved to archive' },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(statuses[0]);

    return (
      <div className="w-72">
        <Listbox
          value={selected}
          onChange={(value) => setSelected(value as (typeof statuses)[number])}
          placeholder="Select a status..."
        >
          {statuses.map((status) => (
            <ListboxOption key={status.id} value={status}>
              <ListboxLabel>{status.label}</ListboxLabel>
              <ListboxDescription>{status.description}</ListboxDescription>
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    );
  },
};

const priorities = [
  { id: 1, label: 'Low' },
  { id: 2, label: 'Medium' },
  { id: 3, label: 'High' },
  { id: 4, label: 'Critical' },
];

export const SimpleLabels: Story = {
  name: 'Simple Labels (No Descriptions)',
  render: () => {
    const [selected, setSelected] = useState(priorities[1]);

    return (
      <div className="w-72">
        <Listbox value={selected} onChange={(val) => setSelected(val as typeof priorities[number])} placeholder="Select priority...">
          {priorities.map((p) => (
            <ListboxOption key={p.id} value={p}>
              <ListboxLabel>{p.label}</ListboxLabel>
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    );
  },
};
