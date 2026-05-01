import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/application-ui/avatar';
import { AVATAR_SIZE_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Renders a user profile image with an automatic fallback to initials when the image is unavailable.

### When to use
- User identity anywhere in the UI: navbars, tables, comment threads, chat
- Entity representation: company logos, workspace icons
- Group of users with \`AvatarStack\` (stack multiple avatars with negative margin)

### When NOT to use
- For logos that need precise aspect ratio → use an \`<img>\` tag directly
- For decorative icons → use Lucide icons or \`<div>\` with background

### Sizes
| Prop | px | Use case |
|------|----|---------|
| \`xs\` | 24px | Inline in text, table cell indicators |
| \`sm\` | 32px | Compact lists, table rows |
| \`md\` | 40px | Default — cards, form labels |
| \`lg\` | 48px | Profile sections, page headers |
| \`xl\` | 64px | Detailed user profile |
| \`2xl\` | 96px | Account settings hero |

### Fallback variants
- \`default\` — primary brand color background
- \`muted\` — muted/zinc background, less prominent
- \`gradient\` — generated gradient, useful for distinguishing users

### Token reference
| Token | Used for |
|-------|---------|
| \`bg-primary\` | default fallback bg |
| \`text-primary-foreground\` | default fallback text |
| \`bg-muted\` | muted fallback bg |
| \`text-muted-foreground\` | muted fallback text |
| \`rounded-full\` | circular crop |
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [...AVATAR_SIZE_OPTIONS],
      description: 'Controls the diameter of the avatar.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback variant="default">AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback variant="muted">CD</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback variant="gradient">EF</AvatarFallback>
      </Avatar>
    </div>
  ),
};

/** All sizes with fallback initials — reference for size selection. */
export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="space-y-6 p-4">
      <div>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">With image</p>
        <div className="flex items-end gap-4">
          {AVATAR_SIZE_OPTIONS.map((size) => (
            <div key={size} className="flex flex-col items-center gap-1.5">
              <Avatar size={size}>
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>{size.toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{size}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">Fallback variants</p>
        <div className="flex items-end gap-4">
          {(['default', 'muted', 'gradient'] as const).map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-1.5">
              <Avatar size="lg">
                <AvatarFallback variant={variant}>AB</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{variant}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
