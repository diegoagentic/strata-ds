import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlertTriangle, CheckCircle2, FileText, Send } from 'lucide-react';
import {
  StageProgress,
  type StageProgressColor,
  type StageProgressStage,
} from '@/components/application-ui/stage-progress';

const STRING_STAGES = ['Draft', 'Review', 'Approval', 'Issued'] as const;

const OBJECTS_COLORS_ONLY: StageProgressStage[] = [
  { label: 'Draft', color: 'brand' },
  { label: 'Review', color: 'warning' },
  { label: 'Approval', color: 'success' },
  { label: 'Issued', color: 'error' },
];

const OBJECTS_ICONS_ONLY: StageProgressStage[] = [
  { label: 'Draft', icon: <FileText aria-hidden /> },
  { label: 'Review', icon: <AlertTriangle aria-hidden /> },
  { label: 'Approval', icon: <CheckCircle2 aria-hidden /> },
  { label: 'Issued', icon: <Send aria-hidden /> },
];

const OBJECTS_FULL: StageProgressStage[] = [
  { label: <div><p>Line 1</p><p>Draft</p></div>, color: 'brand', icon: <FileText aria-hidden /> },
  { label: <div><p>Line 1</p><p>Review</p></div>, color: 'warning', icon: <AlertTriangle aria-hidden /> },
  { label: <div><p>Line 1</p><p>Approval</p></div>, color: 'success', icon: <CheckCircle2 aria-hidden /> },
  { label: <div><p>Line 1</p><p>Issued</p></div>, color: 'error', icon: <Send aria-hidden /> },
];

const PLAYGROUND_PRESETS: Record<
  'strings' | 'objectsColors' | 'objectsIcons' | 'objectsFull',
  string[] | StageProgressStage[]
> = {
  strings: [...STRING_STAGES],
  objectsColors: OBJECTS_COLORS_ONLY,
  objectsIcons: OBJECTS_ICONS_ONLY,
  objectsFull: OBJECTS_FULL,
};

type PlaygroundArgs = ComponentProps<typeof StageProgress> & {
  storyStagePreset: keyof typeof PLAYGROUND_PRESETS;
};

const meta = {
  title: '2. Application UI/StageProgress',
  component: StageProgress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stepper with completed (filled + check or custom icon), current (ring), and upcoming states. **vertical** + **verticalDirection** (`desc` = top → bottom default, `asc` = bottom → top); labels on the right. **currentIndex** is zero-based; use **> last index** when the flow is finished. Pass **stages** as `string[]` or `{ label, color?, icon? }[]`.',
      },
    },
  },
  args: {
    stages: [...STRING_STAGES],
    currentIndex: 1,
    color: 'brand' satisfies StageProgressColor,
    vertical: false,
    verticalDirection: 'desc',
  },
  argTypes: {
    vertical: {
      control: 'boolean',
      description: 'Stack stages vertically with labels to the right of each point.',
      table: { category: 'Layout' },
    },
    verticalDirection: {
      control: 'select',
      options: ['desc', 'asc'],
      description: 'Only when vertical: `desc` = first stage at top (default); `asc` = first stage at bottom.',
      table: { category: 'Layout' },
    },
    color: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'error'] satisfies StageProgressColor[],
      description: 'Fallback when a stage has no `color` (always used for string stages).',
      table: { category: 'Appearance' },
    },
    currentIndex: {
      control: { type: 'number', min: -1, max: 10, step: 1 },
      description:
        'Zero-based active step. Steps before this are completed. Use > last index (e.g. length) for all steps completed.',
      table: { category: 'Behavior' },
    },
    stages: {
      control: 'object',
      description: 'Labels only, or objects with label + optional color and icon.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof StageProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Completed: Story = {
  args: {
    currentIndex: STRING_STAGES.length,
    color: 'success',
  },
};

export const WarningState: Story = {
  args: {
    currentIndex: 2,
    color: 'warning',
  },
};

/** String stages, global color tokens, and rich object stages (per-step color and icons). */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-10 rounded-lg bg-background p-4 py-8">
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">String stages (global color)</h3>
        <p className="text-sm text-muted-foreground">
          Same labels; each row uses a single <code className="text-xs">color</code> for completed fill, current ring,
          and completed connectors.
        </p>
        <div className="mt-4 space-y-6">
          {(['brand', 'success', 'warning', 'error'] as const).map((c) => (
            <div key={c}>
              <p className="mb-2 text-xs font-medium capitalize text-muted-foreground">{c}</p>
              <StageProgress stages={[...STRING_STAGES]} currentIndex={2} color={c} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Object stages — per-step color</h3>
        <p className="text-sm text-muted-foreground">
          Each step supplies <code className="text-xs">color</code>; completed checkmarks use that step’s token.
        </p>
        <div className="mt-3">
          <StageProgress stages={OBJECTS_COLORS_ONLY} currentIndex={2} color="brand" />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Object stages — custom icons when completed</h3>
        <p className="text-sm text-muted-foreground">
          <code className="text-xs">icon</code> replaces the default check for steps with index &lt;{' '}
          <code className="text-xs">currentIndex</code>; global <code className="text-xs">color</code> applies where a
          step omits <code className="text-xs">color</code>.
        </p>
        <div className="mt-3">
          <StageProgress stages={OBJECTS_ICONS_ONLY} currentIndex={2} color="brand" />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Object stages — color + icon together</h3>
        <div className="mt-3">
          <StageProgress stages={OBJECTS_FULL} currentIndex={2} color="brand" />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">First step active (index 0)</h3>
        <div className="mt-3">
          <StageProgress stages={OBJECTS_FULL} currentIndex={0} color="brand" />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Last step active (index 3 of 4)</h3>
        <p className="text-sm text-muted-foreground">
          Only earlier steps show checks; the final step stays the current ring until you move past the last index.
        </p>
        <div className="mt-3">
          <StageProgress stages={OBJECTS_FULL} currentIndex={OBJECTS_FULL.length - 1} color="brand" />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">All completed</h3>
        <p className="text-sm text-muted-foreground">
          <code className="text-xs">currentIndex</code> is greater than the last index (here{' '}
          <code className="text-xs">{OBJECTS_FULL.length}</code> for four steps).
        </p>
        <div className="mt-3">
          <StageProgress stages={OBJECTS_FULL} currentIndex={OBJECTS_FULL.length} color="brand" />
        </div>
      </section>

      <section className="space-y-8 border-t border-border pt-8">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground">Vertical — `verticalDirection="desc"` (default, top → bottom)</h3>
          <p className="text-sm text-muted-foreground">
            First stage at the top; omit{' '}
            <code className="text-xs">verticalDirection</code> or set <code className="text-xs">desc</code>.
          </p>
          <div className="mt-4 flex flex-wrap items-start gap-10">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Strings · currentIndex 2</p>
              <StageProgress vertical verticalDirection="desc" stages={[...STRING_STAGES]} currentIndex={2} color="brand" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Per-step color · currentIndex 2</p>
              <StageProgress vertical verticalDirection="desc" stages={OBJECTS_COLORS_ONLY} currentIndex={2} color="brand" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">All completed</p>
              <StageProgress
                vertical
                verticalDirection="desc"
                stages={[...STRING_STAGES]}
                currentIndex={STRING_STAGES.length}
                color="success"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground">Vertical — `verticalDirection="asc"` (bottom → top)</h3>
          <p className="text-sm text-muted-foreground">
            First stage at the bottom; progression reads upward.
            Same completion rules as horizontal.
          </p>
          <div className="mt-4 flex flex-wrap items-start gap-10">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Strings · currentIndex 2</p>
              <StageProgress vertical verticalDirection="asc" stages={[...STRING_STAGES]} currentIndex={2} color="brand" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Per-step color · currentIndex 2</p>
              <StageProgress vertical verticalDirection="asc" stages={OBJECTS_COLORS_ONLY} currentIndex={2} color="brand" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Icons · last step active</p>
              <StageProgress vertical verticalDirection="asc" stages={OBJECTS_ICONS_ONLY} currentIndex={3} color="brand" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">All completed</p>
              <StageProgress
                vertical
                verticalDirection="asc"
                stages={[...STRING_STAGES]}
                currentIndex={STRING_STAGES.length}
                color="success"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

/** Switch preset (strings vs object shapes), then adjust index and fallback color. */
export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    stages: [...STRING_STAGES],
    currentIndex: 1,
    color: 'brand',
    storyStagePreset: 'strings',
  },
  argTypes: {
    ...meta.argTypes,
    stages: { ...meta.argTypes?.stages, table: { disable: true } },
    storyStagePreset: {
      name: 'Stage preset',
      control: 'select',
      options: ['strings', 'objectsColors', 'objectsIcons', 'objectsFull'],
      description: 'Predefined stage lists (objects include icons/colors in code).',
      table: { category: 'Content' },
    },
  },
  render: (args) => {
    const { storyStagePreset, ...rest } = args;
    const stages = PLAYGROUND_PRESETS[storyStagePreset];
    return <StageProgress {...rest} stages={stages} />;
  },
};
