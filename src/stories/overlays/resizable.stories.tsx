import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/overlays/resizable';
import { RESIZABLE_DIRECTION_OPTIONS } from '@/utils/story-variants';

const meta = {
  title: '5. Overlays/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Resizable provides a group of panels that users can resize by dragging handles between them, built on react-resizable-panels. Use it for split-pane layouts such as code editors, file browsers, or side-by-side comparisons. It supports horizontal and vertical directions with optional visible drag handles.',
      },
    },
  },
  argTypes: {
    direction: {
      description: 'The axis along which panels are laid out and resized.',
      control: 'radio',
      options: [...RESIZABLE_DIRECTION_OPTIONS],
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the panel group container.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'horizontal',
  },
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
