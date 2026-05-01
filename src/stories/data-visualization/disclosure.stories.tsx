import type { Meta, StoryObj } from '@storybook/react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '../../components/data-visualization/disclosure';

const meta = {
  title: '3. Data Visualization/Disclosure',
  component: Disclosure,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Disclosure is an expandable/collapsible section component, ideal for FAQs, accordion panels, or progressive disclosure of content. Built on Headless UI, it provides smooth transitions and accessible keyboard toggling. Compose it with DisclosureButton and DisclosurePanel sub-components.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the disclosure wrapper.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Disclosure>
        <DisclosureButton>What is your refund policy?</DisclosureButton>
        <DisclosurePanel>
          If you are unhappy with your purchase, we offer a full refund within 30 days of
          your order. Please contact our support team to initiate a refund.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>Do you offer technical support?</DisclosureButton>
        <DisclosurePanel>
          Yes, we provide 24/7 technical support via email and live chat. Our team
          typically responds within 2 hours during business hours.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>Can I change my plan later?</DisclosureButton>
        <DisclosurePanel>
          Absolutely! You can upgrade or downgrade your plan at any time from your account
          settings. Changes take effect at the start of your next billing cycle.
        </DisclosurePanel>
      </Disclosure>
    </div>
  ),
};

export const SingleItem: Story = {
  name: 'Single Item',
  render: () => (
    <div className="w-96">
      <Disclosure>
        <DisclosureButton>Show additional details</DisclosureButton>
        <DisclosurePanel>
          Here are the additional details that were hidden by default. This pattern is
          useful when you want to keep the UI clean while still providing access to
          secondary information.
        </DisclosurePanel>
      </Disclosure>
    </div>
  ),
};
