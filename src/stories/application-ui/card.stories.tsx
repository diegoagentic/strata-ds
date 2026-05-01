import type { Meta, StoryObj } from '@storybook/react';
import { MoreHorizontal } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/application-ui/card';
import { Button } from '../../components/application-ui/button';
import { CARD_VARIANT_OPTIONS } from '@/utils/story-variants';

const meta = {
  title: '2. Application UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Container for grouped content with composable sub-components and 4 surface variants.

**Variants:** default (card + shadow), flat (muted bg, no shadow), glass (backdrop-blur + translucent), brand (brand-tinted background).

### When to use
- Grouping related fields, stats, or content blocks
- Dashboard KPI panels (\`flat\` or \`default\`)
- Floating sidebars over images (\`glass\`)
- Onboarding / promotional blocks (\`brand\`)

### Composition
\`\`\`tsx
<Card variant="default">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Supporting text</CardDescription>
    <CardAction><Button size="icon" variant="ghost">…</Button></CardAction>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter className="justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
\`\`\`

### Token reference
| Token | Used for |
|-------|---------|
| \`bg-card\` | default variant background |
| \`border-border\` | card border |
| \`shadow-sm\` | default variant elevation |
| \`bg-muted\` | flat variant background |
| \`bg-card/80\` + \`backdrop-blur\` | glass variant |
| \`bg-brand-50\` | brand variant background |
| \`text-card-foreground\` | card text color |

### Anti-patterns
\`\`\`tsx
// ❌ Raw div replacing Card — no dark mode, no animation, no tokens
<div className="bg-white border rounded-lg p-4 shadow">…</div>

// ✅ Correct
<Card>…</Card>
\`\`\``,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...CARD_VARIANT_OPTIONS],
      description: 'Background and elevation treatment.',
      table: { category: 'Appearance' },
    },
    children: {
      control: 'text',
      description: 'Content inside the card (Playground wraps in a paragraph).',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** All variants, full composition, draggable header, and header action slot. */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-4 py-8 rounded-lg">
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Variants</h3>
        <p className="text-sm text-muted-foreground">
          Same inner layout; only the outer <code className="text-xs">variant</code> changes.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {CARD_VARIANT_OPTIONS.map((variant) => (
            <Card key={variant} variant={variant}>
              <CardContent className="pt-6">
                <p className="text-sm font-medium capitalize text-foreground">{variant}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Short supporting copy for this surface style.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Structured layout</h3>
        <p className="text-sm text-muted-foreground">
          Header (title + description), body, footer with actions.
        </p>
        <Card className="max-w-md">
          <CardHeader className="border-b border-border">
            <CardTitle>Order summary</CardTitle>
            <CardDescription>Review totals before submitting this purchase.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Subtotal, tax, and shipping appear here. Use CardContent for the main region between
              header and footer.
            </p>
          </CardContent>
          <CardFooter className="justify-end gap-2 border-t border-border">
            <Button variant="outline" size="sm">
              Back
            </Button>
            <Button size="sm">Continue</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">CardHeader · draggable</h3>
        <p className="text-sm text-muted-foreground">
          Pass <code className="text-xs">draggable</code> to show a grip control in{' '}
          <code className="text-xs">CardAction</code>.
        </p>
        <Card className="max-w-md">
          <CardHeader draggable>
            <CardTitle>Reorder panels</CardTitle>
            <CardDescription>Drag handle appears in the header action area.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Body content below the draggable header.</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">CardAction · custom control</h3>
        <p className="text-sm text-muted-foreground">
          Place actions beside the title block using <code className="text-xs">CardAction</code>.
        </p>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage alerts for this workspace.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MoreHorizontal className="size-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Main content area.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
};

/** Tweak variant and body copy via Controls. */
export const Playground: Story = {
  args: {
    variant: 'default',
    children: 'Edit this text in the Controls panel.',
  },
  render: ({ children, ...cardProps }) => (
    <Card {...cardProps} className="max-w-md">
      <CardContent className="pt-6">
        <p className="text-sm">{children}</p>
      </CardContent>
    </Card>
  ),
};
