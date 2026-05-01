import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard, PricingCost, PricingFeature, PricingFeatures, PricingPrice, PricingSection, PricingTitle } from '@/components/application-ui/pricing';
import { Button } from '@/components/application-ui/button';

const meta = {
  title: '2. Application UI/Pricing',
  component: PricingSection,
  tags: ['autodocs'],
} satisfies Meta<typeof PricingSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PricingSection>
      <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
        <PricingCard>
          <PricingTitle>Starter</PricingTitle>
          <PricingPrice>For new teams</PricingPrice>
          <PricingCost>$29</PricingCost>
          <PricingFeatures>
            <PricingFeature>Up to 5 users</PricingFeature>
            <PricingFeature>Basic reporting</PricingFeature>
          </PricingFeatures>
          <Button variant="secondary" className="mt-6 w-full">
            Choose Starter
          </Button>
        </PricingCard>
        <PricingCard featured>
          <PricingTitle featured>Growth</PricingTitle>
          <PricingPrice featured>Best for scaling operations</PricingPrice>
          <PricingCost featured>$99</PricingCost>
          <PricingFeatures>
            <PricingFeature featured>Unlimited users</PricingFeature>
            <PricingFeature featured>Advanced approvals</PricingFeature>
            <PricingFeature featured>Priority support</PricingFeature>
          </PricingFeatures>
          <Button className="mt-6 w-full">Choose Growth</Button>
        </PricingCard>
        <PricingCard>
          <PricingTitle>Enterprise</PricingTitle>
          <PricingPrice>For complex procurement teams</PricingPrice>
          <PricingCost>$249</PricingCost>
          <PricingFeatures>
            <PricingFeature>Custom integrations</PricingFeature>
            <PricingFeature>SSO + governance</PricingFeature>
            <PricingFeature>Dedicated success manager</PricingFeature>
          </PricingFeatures>
          <Button variant="secondary" className="mt-6 w-full">
            Contact sales
          </Button>
        </PricingCard>
      </div>
    </PricingSection>
  ),
};
