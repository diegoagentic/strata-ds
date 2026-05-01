import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/data-visualization/accordion';

const meta = {
  title: '3. Data Visualization/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accordion displays collapsible content sections, allowing users to toggle the visibility of related content. Use it to organize lengthy content into manageable chunks such as FAQs or settings panels. Supports both single and multiple expansion modes with smooth animated transitions.',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth open and close transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section One</AccordionTrigger>
        <AccordionContent>
          Content for section one. Multiple sections can be open at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section Two</AccordionTrigger>
        <AccordionContent>
          Content for section two. Try opening this alongside section one.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section Three</AccordionTrigger>
        <AccordionContent>
          Content for section three. All sections can be expanded simultaneously.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
