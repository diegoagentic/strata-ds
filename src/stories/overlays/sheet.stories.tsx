import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../../components/overlays/sheet';
import { Button } from '../../components/application-ui/button';

const meta = {
  title: '5. Overlays/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sheet is a slide-in panel overlay built on Radix UI Dialog, often used for mobile navigation, settings panels, or detail views. Use it to display supplementary content that slides in from any edge of the screen. It supports four side variants (top, right, bottom, left) with animated transitions and an overlay backdrop.',
      },
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet content.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Sheet body content goes here.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const SideVariants: Story = {
  name: 'Side Variants',
  render: () => (
    <div className="flex gap-2">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>{side} Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};
