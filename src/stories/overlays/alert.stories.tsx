import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle, AlertTriangle, XCircle, Info, Zap } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '../../components/overlays/alert';
import { ALERT_VARIANT_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '5. Overlays/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Alert displays a short, important message that attracts user attention without interrupting workflow.

### When to use
- **success** — operation completed, record saved, upload done
- **destructive** — error occurred, session expired, permission denied
- **warning** — pending action needed, expiring item, quota approaching
- **info** — neutral context, process running, feature tip
- **brand** — onboarding callouts, promotional content

### When NOT to use
- Don't use Alert for transient confirmations → use \`Sonner\` (toast)
- Don't use Alert inside a modal's main body → use \`AlertDialog\` instead
- Don't stack more than 2 alerts vertically

### Token reference
| Token | Used for |
|-------|---------|
| \`bg-status-success\` | Custom success surfaces outside CVA |
| \`bg-status-error\` | Custom error surfaces outside CVA |
| \`bg-status-warning\` | Custom warning surfaces outside CVA |
| \`bg-status-info\` | Custom info surfaces outside CVA |
| \`border-border\` | default variant border |
| \`text-foreground\` | default variant text |

### Anti-patterns
\`\`\`tsx
// ❌ Raw hex color for status
<Alert className="bg-[#16a34a] border-[#15803d]">...</Alert>

// ❌ Tailwind semantic color instead of DS token
<Alert className="bg-green-50 border-green-500">...</Alert>

// ✅ Correct — use variant prop
<Alert variant="success">...</Alert>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...ALERT_VARIANT_OPTIONS],
      description: 'The visual style indicating the alert severity or intent.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

/** All 6 variants shown together — reference for picking the right semantic. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Alert>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Neutral message without semantic weight.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTriangle className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This subscription expires in 3 days.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Could not save changes. Please try again.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info className="size-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Processing may take up to 2 minutes to complete.</AlertDescription>
      </Alert>
      <Alert variant="brand">
        <Zap className="size-4" />
        <AlertTitle>Brand</AlertTitle>
        <AlertDescription>New AI features are available in your workspace.</AlertDescription>
      </Alert>
    </div>
  ),
};

/** Alerts without icons — title + description only. */
export const WithoutIcons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Alert variant="success">
        <AlertTitle>Order confirmed</AlertTitle>
        <AlertDescription>Your order #INV-2024-089 has been placed and is being processed.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>You have used 90% of your 5GB storage quota.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>The system will be unavailable on Sunday from 2am–4am UTC.</AlertDescription>
      </Alert>
    </div>
  ),
};
