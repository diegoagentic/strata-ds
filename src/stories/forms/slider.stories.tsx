import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../../components/forms/slider';

const meta = {
  title: '4. Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Slider provides a draggable range input for selecting numeric values, built on Radix UI Slider. Use it for volume controls, price ranges, or any continuous value selection. It supports single and multi-thumb configurations, customizable min/max/step, and both horizontal and vertical orientations.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: 'The initial value(s) of the slider thumbs as an array.',
      control: 'object',
      table: { category: 'Behavior' },
    },
    min: {
      description: 'The minimum allowed value.',
      control: 'number',
      table: { category: 'Behavior' },
    },
    max: {
      description: 'The maximum allowed value.',
      control: 'number',
      table: { category: 'Behavior' },
    },
    step: {
      description: 'The step increment between values.',
      control: 'number',
      table: { category: 'Behavior' },
    },
    disabled: {
      description: 'When true, prevents user interaction with the slider.',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the slider root.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[300px]',
  },
};
