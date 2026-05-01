import type { Meta, StoryObj } from '@storybook/react';
import { Home, Search, Bell, Settings, User } from 'lucide-react';
import { NavbarFloating } from '../../components/application-ui/navbar-floating';
import { Button } from '../../components/application-ui/button';

const meta = {
  title: '2. Application UI/NavbarFloating',
  component: NavbarFloating,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Floating pill navbar fixed at the top of the viewport. P1-native component — not in P2.

### When to use
- Landing pages and demo screens where a traditional top bar feels heavy
- Floating navigation over hero images or full-bleed backgrounds
- Demo 2026 header pattern

### When NOT to use
- Production app shells → use \`Layout\` (Navbar + PageHeader)
- When you need a full nav with tabs/dropdowns → use \`Navbar\`

### Composition
NavbarFloating is a thin wrapper. Place \`Button\` or icon nodes as children:
\`\`\`tsx
<NavbarFloating>
  <Button variant="ghost" size="icon" asChild>
    <a href="/">
      <Home className="size-4" />
    </a>
  </Button>
  <div className="flex-1" />
  <Button variant="default" shape="pill" size="sm">Get started</Button>
</NavbarFloating>
\`\`\`

### Token reference
| Token | Used for |
|-------|---------|
| \`bg-card/80\` | translucent glass background |
| \`backdrop-blur-xl\` | blur effect on content behind |
| \`border-border\` | pill border |
| \`rounded-full\` | pill shape |
| \`shadow-lg\` | floating elevation |
| \`z-50\` | stacking above page content |
        `,
      },
    },
  },
} satisfies Meta<typeof NavbarFloating>;

export default meta;
type Story = StoryObj<typeof meta>;

/** NavbarFloating positioned within a demo container (not truly fixed in Storybook canvas). */
export const Default: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="relative h-64 bg-gradient-to-br from-background to-muted rounded-xl overflow-hidden">
      <div className="absolute inset-x-0 top-6 flex justify-center px-4">
        <NavbarFloating className="relative top-0 left-0 translate-x-0 min-w-0 w-full max-w-xl">
          <Button variant="ghost" size="icon" aria-label="Home">
            <Home className="size-4" />
          </Button>
          <span className="text-sm font-semibold text-foreground px-2">Strata DS</span>
          <div className="flex-1" />
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="size-4" />
          </Button>
          <Button variant="default" shape="pill" size="sm">Get started</Button>
        </NavbarFloating>
      </div>
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground text-sm">Page content behind the navbar</p>
      </div>
    </div>
  ),
};

/** Icon-only variant for minimal navigation. */
export const IconOnly: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="relative h-48 bg-gradient-to-br from-background to-muted rounded-xl overflow-hidden">
      <div className="absolute inset-x-0 top-6 flex justify-center px-4">
        <NavbarFloating className="relative top-0 left-0 translate-x-0 min-w-0">
          <Button variant="ghost" size="icon" aria-label="Home">
            <Home className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Profile">
            <User className="size-4" />
          </Button>
        </NavbarFloating>
      </div>
    </div>
  ),
};
