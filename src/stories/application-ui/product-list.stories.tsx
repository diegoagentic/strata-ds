import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard, ProductGrid } from '@/components/application-ui/product-list';

const products = [
  {
    id: 1,
    name: 'Task Chair Pro',
    href: '#',
    price: '$329',
    imageSrc: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Black ergonomic task chair',
    category: 'Seating',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: 'Standing Desk XL',
    href: '#',
    price: '$899',
    imageSrc: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Wood standing desk',
    category: 'Desks',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 3,
    name: 'Acoustic Divider',
    href: '#',
    price: '$199',
    imageSrc: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Felt office divider',
    category: 'Accessories',
    inStock: false,
  },
];

const meta = {
  title: '2. Application UI/ProductList',
  component: ProductGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  ),
};
