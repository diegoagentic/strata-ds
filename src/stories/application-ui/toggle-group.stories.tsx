import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '../../components/application-ui/toggle-group';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import {
  TOGGLE_GROUP_TYPE_OPTIONS,
  TOGGLE_GROUP_VARIANT_OPTIONS,
  TOGGLE_GROUP_SIZE_OPTIONS,
} from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ToggleGroup renders a set of toggle buttons that can operate in single-select or multi-select mode, built on Radix UI ToggleGroup. Use it for toolbar-style controls such as text formatting options (bold, italic, underline). It inherits variant and size styling from the Toggle component and supports outline and default visual variants.',
      },
    },
  },
  argTypes: {
    type: {
      description: 'Whether a single or multiple items can be toggled at once.',
      control: 'radio',
      options: [...TOGGLE_GROUP_TYPE_OPTIONS],
      table: { category: 'Behavior' },
    },
    variant: {
      description: 'The visual style variant applied to all items in the group.',
      control: 'radio',
      options: [...TOGGLE_GROUP_VARIANT_OPTIONS],
      table: { category: 'Appearance' },
    },
    size: {
      description: 'The size of each toggle item.',
      control: 'radio',
      options: [...TOGGLE_GROUP_SIZE_OPTIONS],
      table: { category: 'Appearance' },
    },
    disabled: {
      description: 'When true, prevents interaction with all toggle items.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the group container.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
