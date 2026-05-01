import type { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../components/application-ui/carousel';

const meta = {
  title: '2. Application UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Carousel presents a horizontally scrollable set of content slides with previous/next navigation controls. Use it for image galleries, feature highlights, or any paginated content that benefits from swipe-style browsing. Built on the embla-carousel engine for smooth, touch-friendly scrolling.',
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-card p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
