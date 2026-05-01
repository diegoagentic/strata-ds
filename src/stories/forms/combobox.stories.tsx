import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox, ComboboxOption } from '../../components/forms/combobox';

const meta = {
  title: '4. Forms/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Combobox is a searchable select component that combines a text input with a dropdown list of options. Use it when users need to filter and select from a large set of choices. Built on Headless UI, it supports single and multiple selection modes with keyboard navigation.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed in the input when no value is selected.',
      table: { category: 'Content' },
    },
    multiple: {
      control: 'boolean',
      description: 'When true, allows selecting multiple options.',
      table: { category: 'Behavior' },
    },
    autoFocus: {
      control: 'boolean',
      description: 'When true, the input receives focus on mount.',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the combobox wrapper.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const people = [
  { id: 1, name: 'Leslie Alexander' },
  { id: 2, name: 'Michael Foster' },
  { id: 3, name: 'Dries Vincent' },
  { id: 4, name: 'Lindsay Walton' },
  { id: 5, name: 'Courtney Henry' },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<(typeof people)[number] | undefined>(undefined);
    const [query, setQuery] = useState('');

    const filtered =
      query === ''
        ? people
        : people.filter((person) =>
            person.name.toLowerCase().includes(query.toLowerCase()),
          );

    return (
      <div className="w-72">
        <Combobox
          value={selected}
          onChange={(val) => setSelected(val as (typeof people)[number] | undefined)}
          onClose={() => setQuery('')}
          placeholder="Select a person..."
          displayValue={(person: (typeof people)[number]) => person?.name ?? ''}
        >
          {filtered.map((person) => (
            <ComboboxOption key={person.id} value={person}>
              {person.name}
            </ComboboxOption>
          ))}
        </Combobox>
      </div>
    );
  },
};

const fruits = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Dragonfruit' },
  { id: 5, name: 'Elderberry' },
  { id: 6, name: 'Fig' },
  { id: 7, name: 'Grape' },
];

export const WithManyOptions: Story = {
  name: 'With Many Options',
  render: () => {
    const [selected, setSelected] = useState<(typeof fruits)[number] | undefined>(undefined);
    const [query, setQuery] = useState('');

    const filtered =
      query === ''
        ? fruits
        : fruits.filter((f) =>
            f.name.toLowerCase().includes(query.toLowerCase()),
          );

    return (
      <div className="w-72">
        <Combobox
          value={selected}
          onChange={(val) => setSelected(val as (typeof fruits)[number] | undefined)}
          onClose={() => setQuery('')}
          placeholder="Search fruits..."
          displayValue={(item: (typeof fruits)[number]) => item?.name ?? ''}
        >
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-sm text-zinc-500">No results found.</div>
          ) : (
            filtered.map((item) => (
              <ComboboxOption key={item.id} value={item}>
                {item.name}
              </ComboboxOption>
            ))
          )}
        </Combobox>
      </div>
    );
  },
};
