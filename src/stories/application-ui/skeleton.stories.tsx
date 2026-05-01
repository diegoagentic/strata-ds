import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../components/application-ui/skeleton';

const meta = {
  title: '2. Application UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Skeleton renders an animated placeholder element that indicates content is loading. Use it to create loading states that mirror the eventual layout of text, images, or cards. It pulses with a subtle animation and can be sized via className to match any content shape.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'CSS classes to control the size and shape of the skeleton (e.g. height, width, rounded corners).',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-3">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  ),
};
