import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../../components/application-ui/link';

const meta = {
  title: '2. Application UI/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Link is a lightweight anchor wrapper that renders a standard HTML anchor element. Use it for navigation between pages or external URLs. It accepts all native anchor attributes including href, target, and rel.',
      },
    },
  },
  argTypes: {
    href: {
      description: 'The URL or path the link points to.',
      control: 'text',
      table: { category: 'Behavior' },
    },
    children: {
      description: 'The link text or content to display.',
      control: 'text',
      table: { category: 'Content' },
    },
    target: {
      description: 'Where to open the linked document (e.g. _blank for new tab).',
      control: 'text',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Click me',
  },
};
