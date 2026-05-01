import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Subheading } from '../../components/application-ui/heading';
import { HEADING_LEVEL_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Heading renders semantically correct heading elements (h1-h6) with consistent design-system typography. Use it to establish page and section hierarchy with appropriate font sizes and weights. Also exports a Subheading variant for secondary headings with muted foreground color.',
      },
    },
  },
  argTypes: {
    level: {
      control: 'select',
      options: [...HEADING_LEVEL_OPTIONS],
      description: 'The heading level (1-6) which determines the rendered HTML element and font size.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Subheading level={2}>Subheading Level 2</Subheading>
      <Subheading level={3}>Subheading Level 3</Subheading>
    </div>
  ),
};
