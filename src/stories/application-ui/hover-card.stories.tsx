import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../../components/application-ui/hover-card';
import { Button } from '../../components/application-ui/button';

const meta = {
  title: '2. Application UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'HoverCard displays a floating popover with supplementary content when the user hovers over a trigger element. Use it for user profile previews, link previews, or quick-info tooltips that require rich formatted content. Built on Radix UI with configurable open/close delays and accessible focus management.',
      },
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">HoverCard Title</h4>
          <p className="text-sm text-muted-foreground">
            This content appears when you hover over the trigger element.
          </p>
          <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground">
              Additional details can go here.
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
