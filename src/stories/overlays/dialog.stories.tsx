import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../../components/overlays/dialog';
import { Button } from '@/components/application-ui/button';

const meta = {
  title: '5. Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          `Modal overlay built on Radix UI Dialog. Focuses user attention for a task before returning to main content.

### When to use
- Multi-field forms that don't warrant a full page (create order, invite user)
- Detailed view of a record without full navigation
- Simple confirmations with 2 actions

### When NOT to use
- Destructive confirmations → use \`AlertDialog\` (better a11y semantics)
- Long scrolling forms (> 10 fields) → use a dedicated page or \`Sheet\`
- Notifications / status updates → use \`Sonner\` (toast) or \`Alert\`

### Composition
\`\`\`tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Supporting description</DialogDescription>
    </DialogHeader>
    {/* body content */}
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

### Token reference
| Token | Used for |
|-------|---------|
| \`bg-background\` | dialog panel bg |
| \`border-border\` | dialog border |
| \`bg-black/50\` | backdrop overlay |
| \`shadow-lg\` | dialog elevation |
| \`text-foreground\` | dialog text |
| \`text-muted-foreground\` | description text |`,
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="flex min-h-[320px] items-start justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog content.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Dialog body content goes here.
          </p>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

export const AlertStyle: Story = {
  args: {},
  render: () => (
    <div className="flex min-h-[280px] items-start justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Item</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the item.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};
