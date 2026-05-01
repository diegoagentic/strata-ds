import type { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '../../components/overlays/dropdown-menu';

const meta = {
  title: '5. Overlays/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DropdownMenu displays a list of actions or options that appear when the user clicks a trigger button. Use it for overflow menus, settings actions, or any compact list of commands. Supports labels, separators, keyboard shortcuts, sub-menus, and destructive item styling.',
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-md border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm font-medium">
          Open Menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Edit
          <DropdownMenuShortcut>Ctrl+E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Duplicate
          <DropdownMenuShortcut>Ctrl+D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Archive</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Delete
          <DropdownMenuShortcut>Ctrl+Del</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
