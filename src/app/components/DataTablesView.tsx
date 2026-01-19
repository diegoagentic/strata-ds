import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Button } from "./ui/button"
import { CodeViewer } from './CodeViewer';

export function DataTablesView() {
  const tableData = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  const basicTableReact = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  // ...
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`;

  const basicTableHTML = `<!-- Table Component -->
<div class="relative w-full overflow-x-auto">
  <table class="w-full caption-bottom text-sm">
    <caption class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
      A list of your recent invoices.
    </caption>
    <thead class="[&_tr]:border-b border-zinc-200 dark:border-zinc-800">
      <tr class="border-b border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
        <th class="h-10 px-2 text-left align-middle font-medium text-zinc-950 dark:text-zinc-50 [&:has([role=checkbox])]:pr-0 w-[100px]">
          Invoice
        </th>
        <th class="h-10 px-2 text-left align-middle font-medium text-zinc-950 dark:text-zinc-50 [&:has([role=checkbox])]:pr-0">
          Status
        </th>
        <!-- ... -->
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
        <td class="p-2 align-middle font-medium">INV001</td>
        <td class="p-2 align-middle">Paid</td>
        <!-- ... -->
      </tr>
    </tbody>
  </table>
</div>`;

  const basicTableCSS = `@theme {
  --color-zinc-100: #f4f4f5;
  --color-zinc-200: #e4e4e7;
  --color-zinc-500: #71717a;
  --color-zinc-950: #09090b;
}

.table {
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
}

.table-header th {
  height: 2.5rem;
  padding: 0 0.5rem;
  text-align: left;
  font-weight: 500;
  color: var(--color-zinc-950);
}

.table-row {
  border-bottom: 1px solid var(--color-zinc-200);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.table-row:hover {
  background-color: rgb(244 244 245 / 0.5); /* zinc-100/50 */
}

.table-cell {
  padding: 0.5rem;
  vertical-align: middle;
}
`;

  const basicTablePrompt = `# AI PROMPT: Generate Table Component
## CONTEXT
Data display table.

## API
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`

## SPECS
- Border: Zinc-200
- Header: Text Zinc-950, Font Medium
- Row: Hover Zinc-100/50
- Cell: Padding p-2`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Table
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          A responsive table component.
        </p>
      </div>

      {/* Basic Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Basic Usage
        </h2>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <CodeViewer
            title="Table"
            react={basicTableReact}
            html={basicTableHTML}
            css={basicTableCSS}
            prompt={basicTablePrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              border: '1px solid Zinc-200',
              padding: '8px',
              headerHeight: '40px',
              rowHover: 'Zinc-100 / 50%',
            }}
          />
        </div>
      </div>

    </div>
  );
}
