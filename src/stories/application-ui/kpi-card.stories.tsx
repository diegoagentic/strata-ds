import type { Meta, StoryObj } from '@storybook/react';
import { KPICard } from '@/components/application-ui/kpi-card';
import { IconChartBar, IconUsers, IconShoppingCart } from '@tabler/icons-react';

const meta = {
  title: '2. Application UI/KPI Card',
  component: KPICard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A key performance indicator card that displays a metric value with an icon and optional trend metadata. Supports multiple densities (`default`, `compact`, `comfortable`, `summary`) and rich summary mode with sub-metrics, details rows, and actions.',
      },
    },
  },
  argTypes: {
    icon: {
      description: 'A ReactNode icon displayed alongside the metric.',
      table: { category: 'Content' },
    },
    label: {
      control: 'text',
      description: 'The label describing the KPI metric.',
      table: { category: 'Content' },
    },
    value: {
      control: 'number',
      description: 'The primary metric value as a number.',
      table: { category: 'Content' },
    },
    valueFormat: {
      control: { type: 'select' },
      options: ['number', 'currency', 'percent'],
      description: 'Formats the numeric value.',
      table: { category: 'Appearance' },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'compact', 'comfortable', 'summary'],
      description: 'Controls card layout density.',
      table: { category: 'Appearance' },
    },
    tone: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'warning', 'danger', 'brand', 'blue', 'green', 'amber', 'purple', 'red'],
      description: 'Controls icon and action color tone.',
      table: { category: 'Appearance' },
    },
  },
  args: {
    icon: <IconChartBar />,
    label: 'Total Revenue',
    value: 48352,
    valueFormat: 'currency',
    density: 'default',
  },
} satisfies Meta<typeof KPICard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IconChartBar />,
    label: 'Total Revenue',
    value: 48352,
    valueFormat: 'currency',
    tone: 'brand',
  },
};

export const WithTrend: Story = {
  args: {
    icon: <IconUsers />,
    label: 'Active Users',
    value: 1245,
    valueFormat: 'number',
    trend: { direction: 'up', value: '+12.5%' },
    subValue: 'vs last week',
    tone: 'blue',
  },
};

export const WithSubMetrics: Story = {
  args: {
    icon: <IconShoppingCart />,
    label: 'Orders',
    value: 342,
    valueFormat: 'number',
    density: 'summary',
    tone: 'green',
    trend: { direction: 'up', value: '+8.2%' },
    subMetrics: [
      { label: 'Completed', value: '298' },
      { label: 'Pending', value: '44' },
    ],
  },
};

export const SummaryLayout: Story = {
  args: {
    icon: <IconChartBar />,
    label: 'Monthly Sales',
    value: 128400,
    valueFormat: 'currency',
    density: 'summary',
    tone: 'amber',
    trend: { direction: 'down', value: '-3.1%' },
    subMetrics: [
      { label: 'Online', value: '$82,100' },
      { label: 'In-Store', value: '$46,300' },
    ],
    detailRows: [
      { label: 'Projection', value: '$132,000' },
      { label: 'Trend (30d)', value: '-3.1%' },
    ],
    detailsAction: {
      label: 'View Report',
      onClick: () => undefined,
    },
  },
};
