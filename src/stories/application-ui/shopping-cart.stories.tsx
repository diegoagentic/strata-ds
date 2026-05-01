import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from '@/components/application-ui/button';
import { ShoppingCart } from '@/components/application-ui/shopping-cart';

const items = [
  {
    id: 1,
    name: 'Task Chair Pro',
    href: '#',
    color: 'Graphite',
    price: '$329',
    quantity: 2,
    imageSrc: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Task chair',
  },
  {
    id: 2,
    name: 'Standing Desk XL',
    href: '#',
    color: 'Oak',
    price: '$899',
    quantity: 1,
    imageSrc: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300&q=80',
    imageAlt: 'Standing desk',
  },
];

const meta = {
  title: '2. Application UI/ShoppingCart',
  component: ShoppingCart,
  tags: ['autodocs'],
} satisfies Meta<typeof ShoppingCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="min-h-[70vh] p-6">
        <Button onClick={() => setOpen(true)}>Open Cart</Button>
        <ShoppingCart open={open} onClose={setOpen} items={items} />
      </div>
    );
  },
};
