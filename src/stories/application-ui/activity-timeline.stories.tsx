import type { Meta, StoryObj } from '@storybook/react';
import {
  ActivityTimeline,
  ActivityTimelineStageRow,
  type ActivityTimelineItem,
} from '@/components/application-ui/activity-timeline';
import { Button } from '@/components/application-ui/button';
import { Check, CircleDot, Package, Truck } from 'lucide-react';

const brandCircle = 'bg-brand-500 text-primary-foreground';
const brandLine = 'bg-brand-500';
const successCircle = 'bg-emerald-600 text-white';
const successLine = 'bg-emerald-600';
const mutedCircle = 'bg-muted text-muted-foreground';
const mutedLine = 'bg-border';

const DEMO_ITEMS: ActivityTimelineItem[] = [
  {
    id: '1',
    icon: <Check aria-hidden />,
    circleBackgroundClassName: successCircle,
    separatorClassName: successLine,
    content: (
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">Order confirmed</p>
        <p className="text-sm text-muted-foreground">Payment captured · #PO-48291</p>
      </div>
    ),
  },
  {
    id: '2',
    icon: <Package aria-hidden />,
    circleBackgroundClassName: brandCircle,
    separatorClassName: brandLine,
    content: (
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">Picking started</p>
        <p className="text-sm text-muted-foreground">Warehouse B · 12 SKUs</p>
      </div>
    ),
  },
  {
    id: '3',
    icon: <Truck aria-hidden />,
    circleBackgroundClassName: brandCircle,
    separatorClassName: brandLine,
    content: (
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Shipped</p>
        <p className="text-sm text-muted-foreground">Carrier: Northwind · ETA Apr 24</p>
        <Button type="button" variant="outline" size="sm" className="w-fit">
          Track shipment
        </Button>
      </div>
    ),
  },
  {
    id: '4',
    icon: <CircleDot aria-hidden />,
    circleBackgroundClassName: mutedCircle,
    separatorClassName: mutedLine,
    content: (
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">Out for delivery</p>
        <p className="text-sm text-muted-foreground">Awaiting carrier scan</p>
      </div>
    ),
  },
];

const meta = {
  title: '2. Application UI/ActivityTimeline',
  component: ActivityTimeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Vertical activity timeline: each item supplies an icon, circle/connector Tailwind classes, and a `content` column. Use `ActivityTimeline` for a list, or `ActivityTimelineStageRow` for manual composition.',
      },
    },
  },
  argTypes: {
    items: {
      description: 'Ordered rows with `id`, `icon`, circle/separator classes, and `content` (right column).',
      table: { category: 'Data' },
    },
    className: {
      control: 'text',
      description: 'Optional class on the root wrapper.',
      table: { category: 'Style' },
    },
  },
} satisfies Meta<typeof ActivityTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: DEMO_ITEMS.slice(0, 3),
    className: 'max-w-lg',
  },
};

/** Curated examples: full timeline, single step, manual `ActivityTimelineStageRow`, and long copy. */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-12 rounded-lg bg-background p-6">
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Order activity</h3>
        <p className="text-sm text-muted-foreground">
          Four stages with mixed connector colors; last row omits the trailing line automatically.
        </p>
        <ActivityTimeline className="max-w-lg" items={DEMO_ITEMS} />
      </section>

      <section className="space-y-3 border-t border-border pt-10">
        <h3 className="text-sm font-semibold text-foreground">Single item</h3>
        <p className="text-sm text-muted-foreground">Only one row: no connector after the circle.</p>
        <ActivityTimeline className="max-w-lg" items={[DEMO_ITEMS[0]]} />
      </section>

      <section className="space-y-3 border-t border-border pt-10">
        <h3 className="text-sm font-semibold text-foreground">Manual `ActivityTimelineStageRow`</h3>
        <p className="text-sm text-muted-foreground">
          Compose rows yourself when you need custom layout between stages (same circle + line behavior).
        </p>
        <div className="max-w-lg space-y-0">
          <ActivityTimelineStageRow
            icon={<Check aria-hidden />}
            circleBackgroundClassName={successCircle}
            separatorClassName={successLine}
            isLast={false}
          >
            <p className="text-sm text-foreground">First manual row</p>
          </ActivityTimelineStageRow>
          <ActivityTimelineStageRow
            icon={<Package aria-hidden />}
            circleBackgroundClassName={brandCircle}
            separatorClassName={brandLine}
            isLast
          >
            <p className="text-sm text-foreground">Second manual row (isLast)</p>
          </ActivityTimelineStageRow>
        </div>
      </section>

      <section className="space-y-3 border-t border-border pt-10">
        <h3 className="text-sm font-semibold text-foreground">Rich content column</h3>
        <ActivityTimeline
          className="max-w-lg"
          items={[
            {
              id: 'rich-1',
              icon: <Check aria-hidden />,
              circleBackgroundClassName: successCircle,
              separatorClassName: successLine,
              content: (
                <div className="space-y-3 rounded-md border border-border bg-card p-3">
                  <p className="text-sm font-medium text-foreground">Comment thread</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Longer supporting copy: timeline content stays in the right column while the circle and connector
                    stay aligned in the gutter.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" size="sm">
                      Primary action
                    </Button>
                    <Button type="button" variant="outline" size="sm">
                      Secondary
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              id: 'rich-2',
              icon: <CircleDot aria-hidden />,
              circleBackgroundClassName: mutedCircle,
              separatorClassName: mutedLine,
              content: <p className="text-sm text-muted-foreground">Following stage after the card.</p>,
            },
          ]}
        />
      </section>
    </div>
  ),
};

type ActivityTimelinePlaygroundArgs = {
  itemCount: number;
  className: string;
};

/** Adjust how many demo rows render and tweak the root `className`. Row three includes a `Button`. */
export const Playground: StoryObj<ActivityTimelinePlaygroundArgs> = {
  args: {
    itemCount: 4,
    className: 'max-w-lg',
  },
  argTypes: {
    itemCount: {
      name: 'Items to show',
      control: { type: 'number', min: 1, max: DEMO_ITEMS.length, step: 1 },
      description: `Number of rows (max ${DEMO_ITEMS.length}).`,
      table: { category: 'Data' },
    },
    className: {
      control: 'text',
      description: 'Classes on the timeline root (e.g. max width).',
      table: { category: 'Style' },
    },
  },
  render: (args) => {
    const count = Math.min(Math.max(1, Math.round(args.itemCount)), DEMO_ITEMS.length);
    return <ActivityTimeline className={args.className} items={DEMO_ITEMS.slice(0, count)} />;
  },
};
