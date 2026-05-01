import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/application-ui/button';
import { SectionCard, SectionCardBody, SectionCardFooter, SectionCardHeader } from '@/components/application-ui/section-card';

const meta = {
  title: '2. Application UI/SectionCard',
  component: SectionCard,
  tags: ['autodocs'],
  args: {
    surface: 'default',
    density: 'default',
    interactive: 'none',
  },
} satisfies Meta<typeof SectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <SectionCard {...args}>
      <SectionCardHeader divider="bottom">
        <h3 className="text-lg font-semibold">Order Summary</h3>
      </SectionCardHeader>
      <SectionCardBody>
        <p className="text-sm text-muted-foreground">12 items ready for review before submission.</p>
      </SectionCardBody>
      <SectionCardFooter divider="top">
        <Button size="sm">Review</Button>
      </SectionCardFooter>
    </SectionCard>
  ),
};

export const GlassSurface: Story = {
  args: {
    surface: 'glass',
    density: 'comfortable',
    interactive: 'hover',
  },
  render: Default.render,
};
