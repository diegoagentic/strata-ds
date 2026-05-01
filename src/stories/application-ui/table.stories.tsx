import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/application-ui/table';

const meta = {
  title: '2. Application UI/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Composable table components for data display. Horizontally scrollable container with hover highlighting and dark theme support.

### When to use
- Displaying structured records with 3+ columns (invoices, orders, users, products)
- Comparing values across rows
- With **striped** when rows contain dense numeric data
- With **dense** when vertical space is at a premium (sidebar panels, dashboards)

### When NOT to use
- For 1–2 column data → use \`DescriptionList\`
- For key-value pairs → use \`DescriptionList\`
- For card grids → use \`Card\` with grid layout

### Composition
\`\`\`tsx
<Table striped dense>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Value</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`

### Token reference
| Token | Used for |
|-------|---------|
| \`border-border\` | table and cell borders |
| \`bg-muted/50\` | striped row alternate |
| \`hover:bg-muted/50\` | row hover |
| \`text-foreground\` | cell text |
| \`text-muted-foreground\` | header text |
        `,
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

function SampleTable({ striped, dense }: { striped?: boolean; dense?: boolean }) {
  return (
    <Table striped={striped} dense={dense}>
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
  );
}

export const Default: Story = {
  render: () => <SampleTable />,
};

/** Alternating row backgrounds improve readability for dense numeric data. */
export const Striped: Story = {
  render: () => <SampleTable striped />,
};

/** Reduced row padding for dashboard panels or sidebars with limited vertical space. */
export const Dense: Story = {
  render: () => <SampleTable dense />,
};

/** Both modifiers combined for maximum information density. */
export const StripedAndDense: Story = {
  name: 'Striped + Dense',
  render: () => <SampleTable striped dense />,
};
