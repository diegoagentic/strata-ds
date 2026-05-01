import type { Meta, StoryObj } from '@storybook/react';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Input } from '../../components/forms/input';

const meta = {
  title: '4. Forms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `A styled text input with optional label, prefix/suffix icon slots, and automatic password visibility toggle.

### When to use
- Single-line text data: names, emails, URLs, numbers
- Search boxes with prefix icon (\`MagnifyingGlassIcon\`)
- Password fields (visibility toggle auto-added when \`type="password"\`)
- Form fields — always wrap with \`<Field>\` for label + error message

### When NOT to use
- Multi-line text → use \`<Textarea>\`
- Constrained option selection → use \`<Select>\` or \`<Combobox>\`
- Date picking → use \`<DatePicker>\`

### Slots
- **prefix** — icon or node on the left (e.g. search icon, currency symbol)
- **suffix** — icon or node on the right (e.g. chevron, clear button)
- When \`type="password"\`, suffix is replaced by the show/hide toggle

### Validation
Set \`aria-invalid={true}\` to apply destructive border and ring.
Always pair with \`<Field>\` which manages \`aria-describedby\` for screen readers.

### Token reference
| Token | Used for |
|-------|---------|
| \`border-input\` | default border |
| \`bg-background\` | input background |
| \`text-foreground\` | input text |
| \`text-muted-foreground\` | placeholder text |
| \`ring-ring/50\` | focus ring |
| \`border-destructive\` | aria-invalid border |
| \`ring-destructive/20\` | aria-invalid focus ring |`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Optional label rendered above the input.',
      table: { category: 'Content' },
    },
    prefix: {
      description: 'Icon or content on the left (e.g. Search icon).',
      table: { category: 'Content' },
    },
    suffix: {
      description: 'Icon or content on the right (e.g. chevron, clear). Ignored when type is "password" (toggle is shown instead).',
      table: { category: 'Content' },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'Native input type. When "password", a show/hide toggle is added automatically.',
      table: { category: 'Behavior' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder when the input is empty.',
      table: { category: 'Content' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
      table: { category: 'Behavior' },
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Marks the input as invalid (error styling).',
      table: { category: 'Accessibility' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Plain input with no label, prefix, or suffix. */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/** Input with a label above it. */
export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

/** Input with a prefix slot (e.g. search icon on the left). */
export const WithPrefix: Story = {
  args: {
    placeholder: 'Search...',
    prefix: <MagnifyingGlassIcon className="size-4" />,
    type: 'search',
  },
};

/** Input with a suffix slot (e.g. chevron or shortcut hint on the right). */
export const WithSuffix: Story = {
  args: {
    placeholder: 'Select an option',
    suffix: <ChevronDownIcon className="size-4" />,
  },
};

/** Input with both prefix and suffix. */
export const WithPrefixAndSuffix: Story = {
  args: {
    placeholder: 'Search and clear',
    prefix: <MagnifyingGlassIcon className="size-4" />,
    suffix: <XMarkIcon className="size-4" />,
  },
};

/** Password input with automatic show/hide toggle (eye icon). */
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

/** Disabled input (not focusable, reduced opacity). */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

/** Invalid/error state using aria-invalid (destructive border and ring). */
export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    'aria-invalid': true,
    defaultValue: 'invalid-email',
  },
};
