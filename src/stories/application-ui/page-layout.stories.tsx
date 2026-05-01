import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { TenantProvider } from '@/contexts/TenantContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageLayout } from '../../components/application-ui/page-layout';
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

type PageLayoutStoryArgs = ComponentProps<typeof PageLayout> & {
  showHeaderActions?: boolean;
};

const meta: Meta<PageLayoutStoryArgs> = {
  title: '2. Application UI/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Route-aware wrapper around **Layout**: uses `useNavigate` so `onNavigate` targets resolve to `navItems` paths. **navItems** default to `[]`; each item needs a **path**. Optional **activeTab**, logos, **headingClassName**, Action Center props, and **onLogout** / **onNavigateToWorkspace** (default no-ops).',
      },
    },
  },
  argTypes: {
    heading: { control: 'text', table: { category: 'Content' } },
    subheading: { control: 'text', table: { category: 'Content' } },
    activeTab: {
      control: 'text',
      description: 'Nav highlight; Navbar still matches URL when omitted.',
      table: { category: 'Behavior' },
    },
    logoLight: { control: 'text', table: { category: 'Appearance' } },
    logoDark: { control: 'text', table: { category: 'Appearance' } },
    headingClassName: { control: 'text', table: { category: 'Appearance' } },
    showHeaderActions: {
      control: 'boolean',
      description: 'Story-only: sample button in PageHeader row.',
      table: { category: 'Content' },
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
};

export default meta;
type Story = StoryObj<PageLayoutStoryArgs>;

const pageNavItems = [
  { label: 'Overview', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
  { label: 'Inventory', icon: <Squares2X2Icon className="w-5 h-5" />, path: '/inventory' },
  { label: 'Catalogs', icon: <DocumentTextIcon className="w-5 h-5" />, path: '/catalogs' },
  { label: 'MAC', icon: <WrenchScrewdriverIcon className="w-5 h-5" />, path: '/mac' },
  { label: 'Transactions', icon: <CreditCardIcon className="w-5 h-5" />, path: '/transactions' },
  { label: 'CRM', icon: <BriefcaseIcon className="w-5 h-5" />, path: '/crm' },
  { label: 'Pricing', icon: <BanknotesIcon className="w-5 h-5" />, path: '/pricing' },
];

const customLogoLight =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="28"><text x="2" y="20" font-size="12" font-weight="700" fill="#18181b">Logo L</text></svg>',
  );
const customLogoDark =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="28"><text x="2" y="20" font-size="12" font-weight="700" fill="#fafafa">Logo D</text></svg>',
  );

/** Full shell with navigation, header row, custom logos, and routed-style content. */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="bg-background p-4 py-8 rounded-lg min-h-[min(100vh,920px)] overflow-auto">
      <PageLayout
        heading="Catalogs"
        subheading="Browse and maintain product catalogs"
        headingClassName="border-b border-border pb-4"
        headerActions={
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            New catalog
          </button>
        }
        navItems={pageNavItems}
        activeTab="Catalogs"
        logoLight={customLogoLight}
        logoDark={customLogoDark}
        onLogout={() => undefined}
        onNavigateToWorkspace={() => undefined}
      >
        <div className="container mx-auto grid gap-4 lg:max-w-7xl lg:w-[80vw] lg:grid-cols-3">
          <div className="rounded-lg border border-dashed border-border p-6 lg:col-span-2">
            <p className="text-sm text-muted-foreground">
              Children render below the header. PageLayout wires <code className="text-xs">onNavigate</code> to{' '}
              <code className="text-xs">useNavigate</code> and path labels.
            </p>
          </div>
          <div className="rounded-lg border border-dashed border-border p-6">
            <p className="text-sm text-muted-foreground">Aside</p>
          </div>
        </div>
      </PageLayout>
    </div>
  ),
};

/** Edit heading copy, logos, active tab, and header action from Controls. */
export const Playground: Story = {
  args: {
    heading: 'Dashboard',
    subheading: 'Workspace overview',
    activeTab: 'Overview',
    logoLight: '',
    logoDark: '',
    headingClassName: '',
    showHeaderActions: false,
    onLogout: () => undefined,
    onNavigateToWorkspace: () => undefined,
  },
  render: ({
    showHeaderActions,
    heading,
    subheading,
    logoLight,
    logoDark,
    headingClassName,
    onLogout,
    onNavigateToWorkspace,
    ...rest
  }) => (
    <div className="bg-background p-4 py-8 rounded-lg min-h-[min(100vh,720px)] overflow-auto">
      <PageLayout
        heading={heading}
        subheading={subheading}
        headingClassName={headingClassName?.trim() || undefined}
        logoLight={logoLight?.trim() ? logoLight : undefined}
        logoDark={logoDark?.trim() ? logoDark : undefined}
        headerActions={
          showHeaderActions ? (
            <button
              type="button"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Action
            </button>
          ) : undefined
        }
        navItems={[
          { label: 'Overview', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
          { label: 'Inventory', icon: <Squares2X2Icon className="w-5 h-5" />, path: '/inventory' },
          { label: 'Catalogs', icon: <DocumentTextIcon className="w-5 h-5" />, path: '/catalogs' },
        ]}
        onLogout={onLogout}
        onNavigateToWorkspace={onNavigateToWorkspace}
        {...rest}
      >
        <div className="container mx-auto rounded-lg border border-dashed border-border p-6 lg:max-w-7xl lg:w-[80vw]">
          <p className="text-sm text-muted-foreground">Page content</p>
        </div>
      </PageLayout>
    </div>
  ),
};
