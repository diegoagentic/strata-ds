import type { Meta, StoryObj } from '@storybook/react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import {
  Feature,
  FeatureDescription,
  FeatureGrid,
  FeatureIcon,
  FeatureSection,
  FeatureTitle,
} from '@/components/application-ui/feature-section';

const meta = {
  title: '2. Application UI/FeatureSection',
  component: FeatureSection,
  tags: ['autodocs'],
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FeatureSection>
      <FeatureGrid>
        <Feature>
          <FeatureIcon>
            <Sparkles className="size-5 text-white" />
          </FeatureIcon>
          <FeatureTitle>Fast onboarding</FeatureTitle>
          <FeatureDescription>Start creating quotes and orders in minutes with guided setup.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <ShieldCheck className="size-5 text-white" />
          </FeatureIcon>
          <FeatureTitle>Reliable approvals</FeatureTitle>
          <FeatureDescription>Centralized review workflows ensure every order follows policy.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Zap className="size-5 text-white" />
          </FeatureIcon>
          <FeatureTitle>Automated handoff</FeatureTitle>
          <FeatureDescription>Convert approved quotes into draft orders with one click.</FeatureDescription>
        </Feature>
      </FeatureGrid>
    </FeatureSection>
  ),
};
