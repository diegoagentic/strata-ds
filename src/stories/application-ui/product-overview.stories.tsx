import type { Meta, StoryObj } from '@storybook/react';
import {
  ProductDetails,
  ProductGallery,
  ProductLayout,
  ProductPrice,
  ProductTitle,
} from '@/components/application-ui/product-overview';
import { Button } from '@/components/application-ui/button';

const images = [
  {
    id: 1,
    name: 'Front view',
    src: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ergonomic office chair front view',
  },
  {
    id: 2,
    name: 'Angle view',
    src: 'https://images.unsplash.com/photo-1582582494700-7a49fddfdd9f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ergonomic office chair side angle',
  },
  {
    id: 3,
    name: 'Detail',
    src: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chair armrest detail',
  },
  {
    id: 4,
    name: 'Workspace',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chair in a modern workspace',
  },
];

const meta = {
  title: '2. Application UI/ProductOverview',
  component: ProductLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-6xl px-6">
      <ProductLayout>
        <ProductGallery images={images} />
        <ProductDetails>
          <ProductTitle>Task Chair Pro</ProductTitle>
          <ProductPrice>$329.00</ProductPrice>
          <p className="mt-6 text-sm text-muted-foreground">
            Mesh-backed ergonomic chair with adjustable lumbar support and 4D armrests.
          </p>
          <Button className="mt-8">Add to cart</Button>
        </ProductDetails>
      </ProductLayout>
    </div>
  ),
};
