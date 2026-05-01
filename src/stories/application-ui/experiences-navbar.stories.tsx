import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { TenantProvider } from '@/contexts/TenantContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ExperiencesNavbar } from '../../components/application-ui/experiences-navbar';
import { StorybookDomThemeBridge } from './storybook-dom-theme-bridge';
import {
  HomeIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CreditCardIcon,
  BriefcaseIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

const meta = {
  title: '2. Application UI/ExperiencesNavbar',
  component: ExperiencesNavbar,
  tags: ['autodocs'],
  parameters: {
    themes: { disable: true },
    docs: {
      description: {
        component:
          'Sticky pill **Navbar**: Strata logos (PNG defaults or `logoLight` / `logoDark` URLs), tenant menu, centered nav (`NavItemProps` + paths), Action Center, app grid popover, theme toggle, user menu. **activeTab** can be set explicitly or inferred from `react-router` `pathname`. Requires **ThemeProvider**, **TenantProvider**, and **MemoryRouter**.',
      },
    },
  },
  argTypes: {
    navItems: { table: { disable: true }, control: false },
    activeTab: {
      control: 'text',
      description: 'Active nav label; omit to derive from current URL.',
      table: { category: 'Behavior' },
    },
    logoLight: {
      control: 'text',
      description: 'Image URL for light theme (falls back to bundled brand PNG).',
      table: { category: 'Appearance' },
    },
    logoDark: {
      control: 'text',
      description: 'Image URL for dark theme (falls back to bundled brand PNG).',
      table: { category: 'Appearance' },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ThemeProvider>
          <StorybookDomThemeBridge />
          <TenantProvider>
            <Story />
          </TenantProvider>
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
  args: {
    onLogout: () => undefined,
    onNavigateToWorkspace: () => undefined,
    onNavigate: () => undefined,
  },
} satisfies Meta<typeof ExperiencesNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const fullNavItems = [
  { label: 'Overview', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
  { label: 'Inventory', icon: <Squares2X2Icon className="w-5 h-5" />, path: '/inventory' },
  { label: 'Catalogs', icon: <DocumentTextIcon className="w-5 h-5" />, path: '/catalogs' },
  { label: 'MAC', icon: <WrenchScrewdriverIcon className="w-5 h-5" />, path: '/mac' },
  { label: 'Transactions', icon: <CreditCardIcon className="w-5 h-5" />, path: '/transactions' },
  { label: 'CRM', icon: <BriefcaseIcon className="w-5 h-5" />, path: '/crm' },
  { label: 'Pricing', icon: <BanknotesIcon className="w-5 h-5" />, path: '/pricing' },
] as const;

const customLogoLight =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32"><text x="4" y="22" font-family="system-ui" font-size="14" font-weight="700" fill="#18181b">Custom light</text></svg>',
  );
const customLogoDark =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="32"><text x="4" y="22" font-family="system-ui" font-size="14" font-weight="700" fill="#fafafa">Custom dark</text></svg>',
  );

/** All nav tabs, explicit active tab, and custom logo overrides. */
export const Showcase: Story = {
  args: {
    navItems: [...fullNavItems],
    activeTab: 'Inventory',
    onLogout: () => undefined,
    onNavigateToWorkspace: () => undefined,
    onNavigate: () => undefined,
  },
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-4 py-8 rounded-lg">
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Full tab strip + explicit activeTab</h3>
        <p className="text-sm text-muted-foreground">
          Every supported <code className="text-xs">NavTab</code> label with paths; Inventory is active.
        </p>
        <ExperiencesNavbar
          navItems={[...fullNavItems]}
          activeTab="Inventory"
          onLogout={() => undefined}
          onNavigateToWorkspace={() => undefined}
          onNavigate={() => undefined}
        />
      </section>
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Custom logoLight / logoDark</h3>
        <p className="text-sm text-muted-foreground">SVG data URLs override bundled PNG defaults.</p>
        <ExperiencesNavbar
          navItems={[
            { label: 'Overview', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
            { label: 'Catalogs', icon: <DocumentTextIcon className="w-5 h-5" />, path: '/catalogs' },
          ]}
          activeTab="Overview"
          logoLight={customLogoLight}
          logoDark={customLogoDark}
          onLogout={() => undefined}
          onNavigateToWorkspace={() => undefined}
          onNavigate={() => undefined}
        />
      </section>
    </div>
  ),
};

/** Adjust active tab and logo URLs from Controls (nav list is fixed for stable URLs). */
export const Playground: Story = {
  args: {
    navItems: [],
    activeTab: 'Overview',
    logoLight: '',
    logoDark: '',
    onLogout: () => undefined,
    onNavigateToWorkspace: () => undefined,
    onNavigate: () => undefined,
  },
  render: (args) => (
    <div className="bg-background p-4 py-8 rounded-lg">
      <ExperiencesNavbar
        {...args}
        navItems={[
          { label: 'Overview', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
          { label: 'Inventory', icon: <Squares2X2Icon className="w-5 h-5" />, path: '/inventory' },
          { label: 'Catalogs', icon: <DocumentTextIcon className="w-5 h-5" />, path: '/catalogs' },
        ]}
        logoLight={args.logoLight?.trim() ? args.logoLight : undefined}
        logoDark={args.logoDark?.trim() ? args.logoDark : undefined}
      />
    </div>
  ),
};
