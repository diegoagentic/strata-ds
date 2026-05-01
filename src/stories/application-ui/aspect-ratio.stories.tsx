import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '../../components/application-ui/aspect-ratio';

const meta = {
  title: '2. Application UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AspectRatio enforces a consistent width-to-height ratio on its child content. Use it to maintain proportional dimensions for images, videos, or embedded media regardless of the container width. The ratio prop accepts any numeric value (e.g. 16/9, 4/3, 1).',
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired width-to-height ratio (e.g. 16/9).',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
          16:9 Aspect Ratio
        </div>
      </AspectRatio>
    </div>
  ),
};
