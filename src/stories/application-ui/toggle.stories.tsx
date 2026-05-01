import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../../components/application-ui/toggle';
import { BoldIcon } from 'lucide-react';
import { TOGGLE_VARIANT_OPTIONS, TOGGLE_SIZE_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Toggle is a two-state button that can be switched on or off, built on Radix UI Toggle. Use it for binary options like enabling bold text or toggling a filter. It supports default and outline variants, three size options (sm, default, lg), and provides visual feedback for the active state.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'The visual style variant of the toggle button.',
      control: 'radio',
      options: [...TOGGLE_VARIANT_OPTIONS],
      table: { category: 'Appearance' },
    },
    size: {
      description: 'The size of the toggle button.',
      control: 'radio',
      options: [...TOGGLE_SIZE_OPTIONS],
      table: { category: 'Appearance' },
    },
    pressed: {
      description: 'The controlled pressed/active state of the toggle.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    disabled: {
      description: 'When true, prevents user interaction with the toggle.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <BoldIcon className="size-4" />,
    'aria-label': 'Toggle bold',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: <BoldIcon className="size-4" />,
    'aria-label': 'Toggle bold',
  },
};
