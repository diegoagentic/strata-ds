import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Package } from 'lucide-react';
import { SharedInventoryCard } from '../../components/application-ui/shared-inventory-card';

const meta = {
  title: '2. Application UI/SharedInventoryCard',
  component: SharedInventoryCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Inventory-style card with image (or fallback), title, subtitle, location, value, optional status and priority badges, checkbox, and action button.',
      },
    },
  },
  argTypes: {
    onCheckboxChange: { action: 'checkboxChange' },
    onActionClick: { action: 'actionClick' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-4 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SharedInventoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: 'Oak Dining Table',
  subtitle: 'Furniture · Tables',
  location: 'Warehouse A, Bay 12',
  valueLabel: 'Value',
  value: '$1,250',
  onClick: fn(),
};

/** Default card with no image (fallback area only if icon/label provided). */
export const Default: Story = {
  args: defaultArgs,
};

const inventoryGridCards = [
  { ...defaultArgs, title: 'Oak Dining Table', subtitle: 'Furniture · Tables', value: '$1,250' },
  { ...defaultArgs, title: 'Desk Lamp', subtitle: 'Lighting', value: '$89' },
  { ...defaultArgs, title: 'Office Chair', subtitle: 'Furniture · Seating', value: '$450' },
  { ...defaultArgs, title: 'Bookshelf Unit', subtitle: 'Furniture · Storage', value: '$320' },
  { ...defaultArgs, title: 'Side Table', subtitle: 'Furniture · Tables', value: '$180' },
  { ...defaultArgs, title: 'Floor Rug', subtitle: 'Textiles', value: '$520' },
  { ...defaultArgs, title: 'Standing Desk', subtitle: 'Furniture · Desks', value: '$680' },
  { ...defaultArgs, title: 'Cabinet', subtitle: 'Furniture · Storage', value: '$410' },
  { ...defaultArgs, title: 'Pendant Light', subtitle: 'Lighting', value: '$155' },
];

/** Nine cards in a 3×3 grid. */
export const Grid3x3: Story = {
  render: (args) => (
    <>
      {inventoryGridCards.map((card, i) => (
        <SharedInventoryCard
          key={i}
          {...args}
          {...card}
          imageUrl={i % 3 === 0 ? undefined : `https://picsum.photos/400/176?random=${i + 10}`}
        />
      ))}
    </>
  ),
  args: defaultArgs,
};

/** Card with an image. */
export const WithImage: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=2',
  },
};

/** No image with custom fallback icon and label. */
export const NoImageWithFallback: Story = {
  args: {
    ...defaultArgs,
    imageFallbackIcon: Package,
    imageFallbackLabel: 'No image',
  },
};

/** Status badge on image (e.g. In Stock). */
export const WithStatusBadge: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=3',
    statusBadge: { label: 'In Stock', variant: 'green' },
  },
};

/** Priority badge in footer (e.g. High priority). */
export const WithPriorityBadge: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=4',
    priorityBadge: { label: 'High priority', variant: 'green', emoji: '🔥' },
  },
};

/** Checkbox visible for selection. */
export const WithCheckbox: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=5',
    showCheckbox: true,
    checked: false,
    onCheckboxChange: fn(),
  },
};

/** Checkbox checked. */
export const WithCheckboxChecked: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=6',
    showCheckbox: true,
    checked: true,
    onCheckboxChange: fn(),
  },
};

/** Three-dots action button (visible on hover). */
export const WithActionButton: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=7',
    showActionButton: true,
    onActionClick: fn(),
  },
};

/** All optional elements: image, status, priority, checkbox, action. */
export const Full: Story = {
  args: {
    ...defaultArgs,
    imageUrl: 'https://picsum.photos/400/176?random=8',
    statusBadge: { label: 'In Stock', variant: 'blue' },
    priorityBadge: { label: 'Rush', variant: 'yellow', emoji: '⚡' },
    showCheckbox: true,
    checked: false,
    showActionButton: true,
    onCheckboxChange: fn(),
    onActionClick: fn(),
  },
};
