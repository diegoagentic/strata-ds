import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarSection,
  SidebarLabel,
  SidebarItem,
} from '../../components/overlays/sidebar';

const meta = {
  title: '5. Overlays/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar provides a vertical navigation panel with header, body, and footer sections. Use it for application-level navigation with grouped sections, labels, and active-state highlighting via the current prop on SidebarItem. It supports collapsible layouts and adapts to light and dark themes.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 500, display: 'flex' }}>
        <Story />
        <div style={{ flex: 1, padding: 16 }}>Main content area</div>
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sidebar style={{ width: 256 }}>
      <SidebarHeader>
        <div className="p-4 font-semibold">My App</div>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarLabel>Navigation</SidebarLabel>
          <SidebarItem current>Dashboard</SidebarItem>
          <SidebarItem>Projects</SidebarItem>
          <SidebarItem>Tasks</SidebarItem>
          <SidebarItem>Reports</SidebarItem>
        </SidebarSection>
        <SidebarSection>
          <SidebarLabel>Settings</SidebarLabel>
          <SidebarItem>Profile</SidebarItem>
          <SidebarItem>Preferences</SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
        <div className="p-4 text-sm text-zinc-500">v1.0.0</div>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div style={{ display: 'flex', height: 500 }}>
        <Sidebar style={{ width: collapsed ? 64 : 256, transition: 'width 200ms' }}>
          <SidebarHeader>
            <div className="p-4">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
              >
                {collapsed ? '>>' : '<< Collapse'}
              </button>
            </div>
          </SidebarHeader>
          <SidebarBody>
            {!collapsed && (
              <SidebarSection>
                <SidebarLabel>Navigation</SidebarLabel>
                <SidebarItem current>Dashboard</SidebarItem>
                <SidebarItem>Projects</SidebarItem>
                <SidebarItem>Tasks</SidebarItem>
              </SidebarSection>
            )}
          </SidebarBody>
        </Sidebar>
        <div style={{ flex: 1, padding: 16 }}>Main content area</div>
      </div>
    );
  },
};
