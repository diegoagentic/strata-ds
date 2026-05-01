import type { Meta, StoryObj } from '@storybook/react';
import { CompanyGreeting } from '../../components/application-ui/company-greeting';

const meta = {
  title: '2. Application UI/CompanyGreeting',
  component: CompanyGreeting,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple greeting banner that displays a primary heading and a supporting subheading. Typically used at the top of a dashboard to welcome the user with their company name and a contextual summary line.',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'The primary greeting text, usually containing the company or user name.',
      table: { category: 'Content' },
    },
    subheading: {
      control: 'text',
      description: 'A secondary line of descriptive text displayed below the heading.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof CompanyGreeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Welcome back, Acme Corp',
    subheading: 'Here is what is happening with your business today.',
  },
};

export const ShortGreeting: Story = {
  args: {
    heading: 'Good morning!',
    subheading: 'You have 3 pending tasks.',
  },
};

export const LongContent: Story = {
  args: {
    heading: 'Welcome back, International Manufacturing Solutions Inc.',
    subheading:
      'Your weekly sales report is ready. Revenue is up 12% compared to last week and inventory levels are healthy across all warehouses.',
  },
};
