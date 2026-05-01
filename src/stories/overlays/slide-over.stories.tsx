import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SlideOver, SlideOverTitle, SlideOverDescription, SlideOverBody, SlideOverHeader } from '../../components/overlays/slide-over';

const meta = {
  title: '5. Overlays/SlideOver',
  component: SlideOver,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SlideOver is a panel that slides in from the right edge of the viewport, overlaying the current page content. Use it for secondary workflows like editing details, viewing item properties, or displaying contextual information without navigating away. It features a backdrop overlay, smooth enter/leave transitions, and composable header/body sections.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the slide-over panel is visible.',
      table: { category: 'Behavior' },
    },
    className: {
      description: 'Additional CSS classes to apply to the dialog panel.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof SlideOver>;

export default meta;
type Story = StoryObj<typeof meta>;

const noopOnClose = (): void => {};

export const Default: Story = {
  args: {
    open: false,
    onClose: noopOnClose,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Open SlideOver
        </button>
        <SlideOver open={open} onClose={() => setOpen(false)}>
          <SlideOverHeader onClose={() => setOpen(false)}>
            <SlideOverTitle>Panel Title</SlideOverTitle>
            <SlideOverDescription>
              A description of the panel content goes here.
            </SlideOverDescription>
          </SlideOverHeader>
          <SlideOverBody>
            <div className="space-y-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                This is the body of the slide-over panel. You can put any content here,
                such as forms, details, or navigation.
              </p>
              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
                <p className="text-sm font-medium text-zinc-900 dark:text-white">
                  Example Content Block
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Additional details or interactive elements can be placed inside the
                  slide-over body.
                </p>
              </div>
            </div>
          </SlideOverBody>
        </SlideOver>
      </>
    );
  },
};

export const WithForm: Story = {
  name: 'With Form Content',
  args: {
    open: false,
    onClose: noopOnClose,
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Edit Profile
        </button>
        <SlideOver open={open} onClose={() => setOpen(false)}>
          <SlideOverHeader onClose={() => setOpen(false)}>
            <SlideOverTitle>Edit Profile</SlideOverTitle>
            <SlideOverDescription>
              Update your personal information below.
            </SlideOverDescription>
          </SlideOverHeader>
          <SlideOverBody>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white">Name</label>
                <input
                  type="text"
                  defaultValue="Jane Smith"
                  className="mt-1 block w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white">Email</label>
                <input
                  type="email"
                  defaultValue="jane@example.com"
                  className="mt-1 block w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-sm text-zinc-950 dark:text-white"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                >
                  Save
                </button>
              </div>
            </form>
          </SlideOverBody>
        </SlideOver>
      </>
    );
  },
};
