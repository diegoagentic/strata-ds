import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Package } from 'lucide-react';
import { SharedCatalogCard } from '../../components/application-ui/shared-catalog-card';

const meta = {
  title: '2. Application UI/SharedCatalogCard',
  component: SharedCatalogCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Catalog-style card with header (title, item count), catalog type, owner, last synced, status badge, and footer actions (sync, history, delete, primary action).',
      },
    },
  },
  argTypes: {
    onSync: { action: 'synced' },
    onViewHistory: { action: 'viewHistory' },
    onDelete: { action: 'delete' },
    onPrimaryAction: { action: 'primaryAction' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-4 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SharedCatalogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: 'Spring 2025 Collection',
  itemsCount: 42,
  catalogType: 'Collections',
  owner: 'Jane Smith',
  lastSyncedText: 'Synced 2 hours ago',
  onSync: fn(),
  onViewHistory: fn(),
  onDelete: fn(),
  onPrimaryAction: fn(),
  onClick: fn(),
};

/** Default card with fallback header color and primary action. */
export const Default: Story = {
  args: {
    ...defaultArgs,
    primaryActionLabel: 'Create Quote',
  },
};

const catalogGridCards = [
  { ...defaultArgs, title: 'Spring 2025', itemsCount: 42, statusBadge: { label: 'Active', variant: 'Active' as const } },
  { ...defaultArgs, title: 'Summer Collection', itemsCount: 18, statusBadge: { label: 'Inactive', variant: 'Inactive' as const } },
  { ...defaultArgs, title: 'Legacy Catalogs', itemsCount: '120', statusBadge: { label: 'Archived', variant: 'Archived' as const } },
  { ...defaultArgs, title: 'Office Furniture', itemsCount: 56 },
  { ...defaultArgs, title: 'Outdoor Living', itemsCount: 33 },
  { ...defaultArgs, title: 'Lighting', itemsCount: 89 },
  { ...defaultArgs, title: 'Textiles', itemsCount: 24 },
  { ...defaultArgs, title: 'Accessories', itemsCount: 67 },
  { ...defaultArgs, title: 'New Arrivals', itemsCount: 12 },
];

/** Nine cards in a 3×3 grid. */
export const Grid3x3: Story = {
  render: (args) => (
    <>
      {catalogGridCards.map((card, i) => (
        <SharedCatalogCard
          key={i}
          {...args}
          {...card}
          primaryActionLabel={'Create Quote'}
        />
      ))}
    </>
  ),
  args: defaultArgs,
};

/** Card with a background image in the header. */
export const WithBackgroundImage: Story = {
  args: {
    ...defaultArgs,
    backgroundImageUrl: 'https://picsum.photos/400/128?random=1',
    primaryActionLabel: 'Create Quote',
  },
};

/** Status badge: Active. */
export const StatusActive: Story = {
  args: {
    ...defaultArgs,
    statusBadge: { label: 'Active', variant: 'Active' },
    primaryActionLabel: 'Create Quote',
  },
};

/** Status badge: Inactive. */
export const StatusInactive: Story = {
  args: {
    ...defaultArgs,
    statusBadge: { label: 'Inactive', variant: 'Inactive' },
    primaryActionLabel: 'Create Quote',
  },
};

/** Status badge: Archived. */
export const StatusArchived: Story = {
  args: {
    ...defaultArgs,
    statusBadge: { label: 'Archived', variant: 'Archived' },
    primaryActionLabel: 'Create Quote',
  },
};

/** Custom catalog type icon (Package instead of Calendar). */
export const CustomCatalogTypeIcon: Story = {
  args: {
    ...defaultArgs,
    catalogType: 'Products',
    catalogTypeIcon: Package,
    primaryActionLabel: 'Create Quote',
  },
};

/** Sync button shows spinning icon. */
export const SyncInProgress: Story = {
  args: {
    ...defaultArgs,
    syncInProgress: true,
    primaryActionLabel: 'Create Quote',
  },
};

/** Custom primary action label. */
export const CustomPrimaryAction: Story = {
  args: {
    ...defaultArgs,
    primaryActionLabel: 'Open Catalog',
  },
};

/** Card with custom body only (no catalog rows, no footer). */
export const WithAlternateBody: Story = {
  args: {
    ...defaultArgs,
    title: 'Custom Content Card',
    alternateBody: (
      <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
        Custom content goes here.
      </div>
    ),
  },
};
