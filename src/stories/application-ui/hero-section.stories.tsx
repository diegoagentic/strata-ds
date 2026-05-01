import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/application-ui/button';
import { Hero, HeroButtons, HeroSubtitle, HeroTitle } from '@/components/application-ui/hero-section';

const meta = {
  title: '2. Application UI/HeroSection',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Hero>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <HeroTitle>Quote to order, without friction</HeroTitle>
        <HeroSubtitle>
          Keep sales and operations aligned with a single workspace for approvals, pricing, and order creation.
        </HeroSubtitle>
        <HeroButtons className="justify-center">
          <Button>Start now</Button>
          <Button variant="secondary">Book demo</Button>
        </HeroButtons>
      </div>
    </Hero>
  ),
};
