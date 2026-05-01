import type { Meta, StoryObj } from '@storybook/react';
import { Text, Strong } from '../../components/application-ui/text';

const meta = {
  title: '2. Application UI/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text renders body paragraph text with consistent typography styling across the design system. Use it for descriptive content, form help text, or any body copy. Pair it with the Strong sub-component to emphasize important words within the text.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The text content to display.',
      control: 'text',
      table: { category: 'Content' },
    },
    className: {
      description: 'Additional CSS classes to apply to the paragraph element.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Text>This is a paragraph of text rendered with the Text component.</Text>
      <Text>
        You can use <Strong>Strong</Strong> to emphasize important words.
      </Text>
    </div>
  ),
};
