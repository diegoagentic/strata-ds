import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { TenantProvider } from '@/contexts/TenantContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Layout } from '../../components/application-ui/layout';
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

type LayoutStoryArgs = ComponentProps<typeof Layout> & {
  /** Story-only: toggles header action slot */
  showHeaderActions?: boolean;
};

const meta: Meta<LayoutStoryArgs> = {
  title: '2. Application UI/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Application shell: **Navbar** + **PageHeader** + scrollable main. Required callbacks: `onLogout`, `onNavigateToWorkspace`, `onNavigate`. Optional **activeTab**, **logoLight** / **logoDark**, **headerActions**, **headingClassName**, and Action Center props (`actionCenterActionConfigMap`, `onActionCenterActionExecute`, `actionCenterDataState`).',
      },
    },
  },
  argTypes: {
    heading: { control: 'text', table: { category: 'Content' } },
    subheading: { control: 'text', table: { category: 'Content' } },
    activeTab: {
      control: 'text',
      description: 'Highlights a nav item; URL-based matching also runs inside Navbar.',
      table: { category: 'Behavior' },
    },
    logoLight: { control: 'text', table: { category: 'Appearance' } },
    logoDark: { control: 'text', table: { category: 'Appearance' } },
    headingClassName: {
      control: 'text',
      description: 'Extra classes on the heading row wrapper (Tailwind).',
      table: { category: 'Appearance' },
    },
    showHeaderActions: {
      control: 'boolean',
      description: 'Story-only: render a sample primary button in the header.',
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
type Story = StoryObj<LayoutStoryArgs>;

const layoutNavItems = [
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

/** Full nav, header actions, heading row styling, custom logos, and rich main content. */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="bg-background p-4 py-8 rounded-lg min-h-[min(100vh,920px)] overflow-auto">
      <Layout
        heading="Inventory"
        subheading="Manage stock, catalogs, and pricing from one shell"
        headingClassName="border-b border-border pb-4"
        headerActions={
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Add product
          </button>
        }
        navItems={layoutNavItems}
        activeTab="Inventory"
        logoLight={customLogoLight}
        logoDark={customLogoDark}
        onLogout={() => undefined}
        onNavigateToWorkspace={() => undefined}
        onNavigate={() => undefined}
      >
        <div className="container mx-auto grid gap-4 lg:max-w-7xl lg:w-[80vw] lg:grid-cols-3">
          <div className="rounded-lg border border-dashed border-border p-6 lg:col-span-2">
            <p className="text-sm text-muted-foreground">Main column</p>
          </div>
          <div className="rounded-lg border border-dashed border-border p-6">
            <p className="text-sm text-muted-foreground">Sidebar</p>
          </div>
        </div>
      </Layout>
    </div>
  ),
};

/** Tune copy, logos, active tab, and optional header action from Controls. */
export const Playground: Story = {
  args: {
    heading: 'Dashboard',
    subheading: 'Welcome to your workspace',
    activeTab: 'Overview',
    logoLight: '',
    logoDark: '',
    headingClassName: '',
    showHeaderActions: false,
    onLogout: () => undefined,
    onNavigateToWorkspace: () => undefined,
    onNavigate: () => undefined,
  },
  render: ({
    showHeaderActions,
    heading,
    subheading,
    logoLight,
    logoDark,
    headingClassName,
    ...layoutArgs
  }) => (
    <div className="bg-background p-4 py-8 rounded-lg min-h-[min(100vh,720px)] overflow-auto">
      <Layout
        {...layoutArgs}
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
      >
        <div className="container mx-auto rounded-lg border border-dashed border-border p-6 lg:max-w-7xl lg:w-[80vw]">
          <p className="text-sm text-muted-foreground">Page content (children)</p>
        </div>
      </Layout>
    </div>
  ),
};
