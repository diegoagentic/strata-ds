import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarSection, NavbarSpacer, NavbarItem } from '../../components/application-ui/navbar';

const meta = {
  title: '2. Application UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Navbar provides a horizontal navigation bar for top-level page navigation. Use it to organize navigation items into sections with flexible spacing. It supports active state highlighting on NavbarItem via the current prop and adapts to light and dark themes.',
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarSection>
        <NavbarItem current>Home</NavbarItem>
        <NavbarItem>Products</NavbarItem>
        <NavbarItem>Settings</NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <NavbarItem>Profile</NavbarItem>
      </NavbarSection>
    </Navbar>
  ),
};
