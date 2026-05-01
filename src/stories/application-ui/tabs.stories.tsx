import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/application-ui/tabs';
import {
  TABS_LIST_SIZE_OPTIONS,
  TABS_LIST_VARIANT_OPTIONS,
  TABS_ORIENTATION_OPTIONS,
} from '@/utils/story-variants';
import { cn } from '@/utils';

type TabsStoryArgs = ComponentProps<typeof Tabs> & {
  listSize?: (typeof TABS_LIST_SIZE_OPTIONS)[number];
  listVariant?: (typeof TABS_LIST_VARIANT_OPTIONS)[number];
};

const meta: Meta<TabsStoryArgs> = {
  title: '2. Application UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Radix Tabs with pill-style triggers. **Tabs** root: `defaultValue`, `orientation` (`horizontal` | `vertical`), optional controlled `value` / `onValueChange`, `activationMode`, `dir`, `className`. **TabsList** sets **size** (`default` | `sm`) and **variant** (`default` | bordered pill track, **muted** track, or **link** underline). **TabsTrigger** supports an optional **counter** slot (badge).',
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: 'Value of the tab selected on first render.',
      control: 'text',
      table: { category: 'Tabs root' },
    },
    orientation: {
      description: 'Layout of the tab list (vertical stacks list above / beside content).',
      control: 'radio',
      options: [...TABS_ORIENTATION_OPTIONS],
      table: { category: 'Tabs root' },
    },
    activationMode: {
      description: 'Radix: automatic (focus moves on hover) vs manual (arrow keys).',
      control: 'radio',
      options: ['automatic', 'manual'],
      table: { category: 'Tabs root' },
    },
    className: {
      description: 'Classes on the Tabs root.',
      control: 'text',
      table: { category: 'Tabs root' },
    },
    listSize: {
      description: 'TabsList trigger density (context for all triggers in the list).',
      control: 'select',
      options: [...TABS_LIST_SIZE_OPTIONS],
      table: { category: 'TabsList' },
    },
    listVariant: {
      description: 'TabsList visual style (pill track, muted, or link underline).',
      control: 'select',
      options: [...TABS_LIST_VARIANT_OPTIONS],
      table: { category: 'TabsList' },
    },
  },
};

export default meta;
type Story = StoryObj<TabsStoryArgs>;

const demoPanels = (
  <>
    <TabsContent value="t1">
      <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">First panel</div>
    </TabsContent>
    <TabsContent value="t2">
      <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">Second panel</div>
    </TabsContent>
    <TabsContent value="t3">
      <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">Third panel</div>
    </TabsContent>
  </>
);

/** Every TabsList variant, sizes, vertical layout, counters, and disabled trigger. */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-12 bg-background p-4 py-8 rounded-lg">
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">TabsList · variant</h3>
        <p className="text-sm text-muted-foreground">
          <strong>default</strong> — bordered track; <strong>muted</strong> — soft track; <strong>link</strong> — underline
          tabs (no pill chrome).
        </p>
        <div className="mt-4 flex flex-col gap-8">
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">default</p>
            <Tabs defaultValue="a1">
              <TabsList variant="default">
                <TabsTrigger value="a1">Overview</TabsTrigger>
                <TabsTrigger value="a2">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="a1">
                <div className="p-4 text-sm text-muted-foreground">Default variant content</div>
              </TabsContent>
              <TabsContent value="a2">
                <div className="p-4 text-sm text-muted-foreground">Second tab</div>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">muted</p>
            <Tabs defaultValue="b1">
              <TabsList variant="muted">
                <TabsTrigger value="b1">Inbox</TabsTrigger>
                <TabsTrigger value="b2">Archive</TabsTrigger>
              </TabsList>
              <TabsContent value="b1">
                <div className="p-4 text-sm text-muted-foreground">Muted track content</div>
              </TabsContent>
              <TabsContent value="b2">
                <div className="p-4 text-sm text-muted-foreground">Archive</div>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">link</p>
            <Tabs defaultValue="c1">
              <TabsList variant="link">
                <TabsTrigger value="c1">Section A</TabsTrigger>
                <TabsTrigger value="c2">Section B</TabsTrigger>
                <TabsTrigger value="c3">Section C</TabsTrigger>
              </TabsList>
              <TabsContent value="c1">
                <div className="py-2 text-sm text-muted-foreground">Link-style tab content</div>
              </TabsContent>
              <TabsContent value="c2">
                <div className="py-2 text-sm text-muted-foreground">Tab B</div>
              </TabsContent>
              <TabsContent value="c3">
                <div className="py-2 text-sm text-muted-foreground">Tab C</div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">TabsList · size</h3>
        <p className="text-sm text-muted-foreground">
          <strong>sm</strong> vs <strong>default</strong> on the muted variant (same pattern on default variant).
        </p>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <Tabs defaultValue="s1">
            <TabsList variant="muted" size="default">
              <TabsTrigger value="s1">Default size</TabsTrigger>
              <TabsTrigger value="s2">Two</TabsTrigger>
            </TabsList>
            <TabsContent value="s1">
              <div className="p-4 text-sm text-muted-foreground">List size default</div>
            </TabsContent>
            <TabsContent value="s2">
              <div className="p-4 text-sm text-muted-foreground">Other</div>
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="x1">
            <TabsList variant="muted" size="sm">
              <TabsTrigger value="x1">Small</TabsTrigger>
              <TabsTrigger value="x2">Tabs</TabsTrigger>
            </TabsList>
            <TabsContent value="x1">
              <div className="p-4 text-sm text-muted-foreground">List size sm</div>
            </TabsContent>
            <TabsContent value="x2">
              <div className="p-4 text-sm text-muted-foreground">Other</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Orientation · vertical</h3>
        <Tabs defaultValue="v1" orientation="vertical" className="flex max-w-xl flex-row gap-6">
          <TabsList variant="muted" className="h-auto w-fit shrink-0 flex-col">
            <TabsTrigger value="v1">Profile</TabsTrigger>
            <TabsTrigger value="v2">Notifications</TabsTrigger>
            <TabsTrigger value="v3">Billing</TabsTrigger>
          </TabsList>
          <div className="min-w-0 flex-1">
            <TabsContent value="v1">
              <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                Vertical list + panel area
              </div>
            </TabsContent>
            <TabsContent value="v2">
              <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                Notifications panel
              </div>
            </TabsContent>
            <TabsContent value="v3">
              <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">Billing panel</div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">TabsTrigger · counter</h3>
        <Tabs defaultValue="k1">
          <TabsList variant="default">
            <TabsTrigger value="k1" counter={12}>
              Open
            </TabsTrigger>
            <TabsTrigger value="k2" counter={3}>
              Done
            </TabsTrigger>
          </TabsList>
          <TabsContent value="k1">
            <div className="p-4 text-sm text-muted-foreground">Open items</div>
          </TabsContent>
          <TabsContent value="k2">
            <div className="p-4 text-sm text-muted-foreground">Done items</div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Disabled trigger</h3>
        <Tabs defaultValue="d1">
          <TabsList variant="muted">
            <TabsTrigger value="d1">Active</TabsTrigger>
            <TabsTrigger value="d2" disabled>
              Unavailable
            </TabsTrigger>
          </TabsList>
          <TabsContent value="d1">
            <div className="p-4 text-sm text-muted-foreground">Only the first tab is selectable.</div>
          </TabsContent>
          <TabsContent value="d2">
            <div className="p-4 text-sm text-muted-foreground">Hidden when disabled</div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  ),
};

/** Tune root props, TabsList size/variant, and layout from Controls. */
export const Playground: Story = {
  args: {
    defaultValue: 't1',
    orientation: 'horizontal',
    activationMode: 'automatic',
    className: '',
    listSize: 'default',
    listVariant: 'default',
  },
  render: (args) => {
    const {
      listSize = 'default',
      listVariant = 'default',
      defaultValue,
      orientation = 'horizontal',
      className,
      activationMode,
      ...rest
    } = args;

    return (
      <div className="bg-background p-4 py-8 rounded-lg">
        <Tabs
          defaultValue={defaultValue}
          orientation={orientation}
          activationMode={activationMode}
          className={cn(
            'max-w-2xl',
            orientation === 'vertical' && 'flex flex-row gap-4',
            className,
          )}
          {...rest}
        >
          <TabsList
            size={listSize}
            variant={listVariant}
            className={cn(orientation === 'vertical' && 'h-auto w-fit shrink-0 flex-col')}
          >
            <TabsTrigger value="t1">First</TabsTrigger>
            <TabsTrigger value="t2" counter={4}>
              With counter
            </TabsTrigger>
            <TabsTrigger value="t3" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <div className={cn(orientation === 'vertical' && 'min-w-0 flex-1')}>{demoPanels}</div>
        </Tabs>
      </div>
    );
  },
};
