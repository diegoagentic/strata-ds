import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Heart, Star } from 'lucide-react';
import {
  SearchableMultiSelect,
  type SearchableMultiSelectOption,
  type SearchableMultiSelectOptComponentProps,
} from '@/components/forms/searchable-multi-select';

const SAMPLE_OPTIONS: SearchableMultiSelectOption[] = [
  { id: '1', label: 'Apple' },
  { id: '2', label: 'Banana' },
  { id: '3', label: 'Cherry' },
  { id: '4', label: 'Date' },
  { id: '5', label: 'Elderberry' },
  { id: '6', label: 'Fig' },
  { id: '7', label: 'Grape' },
  { id: '8', label: 'Honeydew' },
];

const SAMPLE_OPTION_EMOJIS: unknown[] = [
  { emoji: '🍎' },
  { emoji: '🍌' },
  { emoji: '🍒' },
  { emoji: '📅' },
  { emoji: '🫐' },
  { emoji: '🌰' },
  { emoji: '🍇' },
  { emoji: '🍈' },
];

const MANY_OPTIONS: SearchableMultiSelectOption[] = Array.from(
  { length: 24 },
  (_, i) => ({
    id: `opt-${i + 1}`,
    label: `Option ${i + 1}`,
  }),
);

function FruitOptionRow(
  props: SearchableMultiSelectOptComponentProps & { emoji?: string },
): React.ReactElement {
  const { option, emoji } = props;
  return (
    <>
      <span className="text-base shrink-0" aria-hidden>
        {emoji ?? '•'}
      </span>
      <span className="font-medium">{option.label}</span>
    </>
  );
}

function SearchableMultiSelectWithState(
  props: Omit<React.ComponentProps<typeof SearchableMultiSelect>, 'value' | 'onChange'> & {
    initialValue?: SearchableMultiSelectOption[];
  },
) {
  const { initialValue = [], ...rest } = props;
  const [value, setValue] = React.useState<SearchableMultiSelectOption[]>(initialValue);
  return (
    <SearchableMultiSelect
      {...rest}
      value={value}
      onChange={setValue}
    />
  );
}

const meta = {
  title: '4. Forms/SearchableMultiSelect',
  component: SearchableMultiSelectWithState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A searchable multi-select with a popover list. Supports filtering by typing, adding custom options when there is no match, an optional `icon` on selected tags, and an optional `optComponent` (+ `optComponentProps`) for custom row content inside the same option `button` as the default. Theme controls the appearance of selected chips.',
      },
    },
  },
  argTypes: {
    options: {
      description: 'Available options to choose from.',
      table: { category: 'Data' },
    },
    initialValue: {
      description: 'Initial selected options (used by the stateful wrapper in stories).',
      table: { category: 'Data' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder for the search input.',
      table: { category: 'Content' },
    },
    icon: {
      description: 'Optional icon node shown before each selected tag label.',
      table: { category: 'Appearance' },
    },
    optComponent: {
      description:
        'Optional component for option row inner content; rendered inside the same `button` as the default row (receives `option`).',
      table: { category: 'Customization' },
    },
    optComponentProps: {
      description:
        'Per-option extra props aligned by index with `options` (objects are spread onto `optComponent`).',
      table: { category: 'Customization' },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the root container.',
      table: { category: 'Style' },
    },
  },
  decorators: [
    (Story, context) => (
      <div className="p-4 max-w-md">
        <Story args={context.args} />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchableMultiSelectWithState>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default searchable multi-select with light theme and no selection. */
export const Default: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    placeholder: 'Search...',
  },
};

/** Some options are pre-selected. */
export const WithPreSelectedValues: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    initialValue: [SAMPLE_OPTIONS[0], SAMPLE_OPTIONS[2], SAMPLE_OPTIONS[4]],
    placeholder: 'Search...',
  },
};

/** Selected tags show a custom icon (heart). */
export const WithTagIcon: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    icon: <Heart className="fill-current" />,
    initialValue: [SAMPLE_OPTIONS[0], SAMPLE_OPTIONS[1]],
    placeholder: 'Search...',
  },
};

/** Selected tags show a star icon. */
export const WithStarIcon: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    icon: <Star className="fill-current" />,
    initialValue: [SAMPLE_OPTIONS[3], SAMPLE_OPTIONS[5]],
    placeholder: 'Search...',
  },
};

/** Custom placeholder text. */
export const CustomPlaceholder: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    placeholder: 'Choose fruits...',
  },
};

/** Long list with scrollable dropdown; type to filter and add custom when no match. */
export const ManyOptions: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: MANY_OPTIONS,
    placeholder: 'Search or add custom...',
  },
};

/** Custom option row content via `optComponent` (replaces inner plus + label; same outer `button` as default). */
export const CustomOptionRows: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    optComponent: FruitOptionRow,
    placeholder: 'Pick a fruit...',
  },
};

/**
 * `optComponentProps` supplies per-option props by index (same order as `options`).
 * Here each row gets an `emoji` prop consumed by `FruitOptionRow`.
 */
export const CustomOptionRowsWithProps: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    optComponent: FruitOptionRow,
    optComponentProps: SAMPLE_OPTION_EMOJIS,
    initialValue: [SAMPLE_OPTIONS[0]],
    placeholder: 'Search fruits...',
  },
};

/** Combines tag icon and custom option rows with per-option props. */
export const IconAndCustomOptions: Story = {
  render: (args) => <SearchableMultiSelectWithState {...args} />,
  args: {
    options: SAMPLE_OPTIONS,
    icon: <Heart className="fill-current" />,
    optComponent: FruitOptionRow,
    optComponentProps: SAMPLE_OPTION_EMOJIS,
    initialValue: [SAMPLE_OPTIONS[2], SAMPLE_OPTIONS[4]],
    placeholder: 'Search...',
  },
};
