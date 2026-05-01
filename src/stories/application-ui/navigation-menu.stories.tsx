import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../../components/application-ui/navigation-menu';

const meta = {
  title: '2. Application UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'NavigationMenu is a fully accessible navigation component built on Radix UI NavigationMenu. Use it for site-wide navigation with optional dropdown content panels, animated transitions, and viewport-based rendering. It supports triggers, links, indicators, and nested content areas.',
      },
    },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
