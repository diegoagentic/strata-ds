import type { Meta, StoryObj } from '@storybook/react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '../../components/application-ui/command';

const meta = {
  title: '2. Application UI/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Command renders a searchable command palette similar to macOS Spotlight or VS Code Quick Open. Use it to provide fast, keyboard-driven access to actions, navigation, or search results. Supports grouped items, separators, empty states, and real-time filtering built on cmdk.',
      },
    },
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>New File</CommandItem>
          <CommandItem>New Folder</CommandItem>
          <CommandItem>Export</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
