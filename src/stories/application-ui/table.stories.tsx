import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/application-ui/table';

const meta = {
  title: '2. Application UI/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Table provides a set of composable components for building data tables with consistent styling. Use it to display tabular data with headers, rows, and cells in a responsive, horizontally scrollable container. It supports striped rows and dense mode for compact layouts, with hover highlighting and dark theme support.',
      },
    },
  },
  argTypes: {
    striped: {
      description: 'When true, alternating rows receive a subtle background color for readability.',
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    dense: {
      description: 'When true, reduces row padding for a more compact table layout.',
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    className: {
      description: 'Additional CSS classes to apply to the table element.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 'INV-001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV-003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV-004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV-005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <tfoot>
        <TableRow>
          <TableCell colSpan={3} className="font-medium">Total</TableCell>
          <TableCell className="text-right font-medium">$1,750.00</TableCell>
        </TableRow>
      </tfoot>
    </Table>
  ),
};
