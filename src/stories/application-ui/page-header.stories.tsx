import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from '../../components/application-ui/page-header';

const meta = {
  title: '2. Application UI/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A page-level header that renders a large bold heading and an optional muted subheading. Use it at the top of any page or section to establish hierarchy. The heading and subheading accept ReactNode, so you can pass JSX for rich content.',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'The primary page heading. Accepts text or ReactNode.',
      table: { category: 'Content' },
    },
    subheading: {
      control: 'text',
      description: 'An optional secondary description displayed below the heading in a muted style.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Dashboard',
  },
};

export const WithBreadcrumb: Story = {
  args: {
    heading: 'Product Details',
    subheading: 'View and manage product information',
  },
};

export const WithActions: Story = {
  args: {
    heading: 'Inventory',
    subheading: 'Manage your products and stock levels',
  },
  render: (args) => (
    <div className="flex items-start justify-between">
      <PageHeader heading={args.heading} subheading={args.subheading} />
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-zinc-300 rounded-lg text-sm font-medium">
          Export
        </button>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
          Add Product
        </button>
      </div>
    </div>
  ),
};
