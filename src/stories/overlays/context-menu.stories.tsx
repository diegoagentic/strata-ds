import type { Meta, StoryObj } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '../../components/overlays/context-menu';

const meta = {
  title: '5. Overlays/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ContextMenu displays a right-click menu with actions relevant to the trigger area. Use it to surface contextual operations such as edit, copy, delete, or custom actions without cluttering the main interface. Supports sub-menus, keyboard shortcuts, separators, and destructive item styling.',
      },
    },
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back <ContextMenuShortcut>Ctrl+[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Save Page As...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
