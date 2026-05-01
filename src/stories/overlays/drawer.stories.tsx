import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '../../components/overlays/drawer';
import { Button } from '../../components/application-ui/button';

const meta = {
  title: '5. Overlays/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Drawer slides a panel in from the bottom of the screen, ideal for mobile-friendly interactions and secondary content. Use it for action sheets, settings panels, or detail views that should not fully replace the current page. Built on vaul with swipe-to-dismiss gesture support and snap points.',
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a description of the drawer content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Drawer body content goes here.
          </p>
        </div>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
