import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "./ui/select"
import { CodeViewer } from './CodeViewer';

export function SelectsView() {
  const simpleSelectReact = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}`;

  const simpleSelectHTML = `<!-- Trigger -->
<button class="flex h-9 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300">
  <span>Theme</span>
  <svg class="h-4 w-4 opacity-50" ...></svg>
</button>

<!-- Content (Popped over) -->
<div class="relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
  <div class="p-1">
    <div class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50">
      Light
    </div>
    <!-- ... -->
  </div>
</div>`;

  const simpleSelectCSS = `@theme {
  --color-zinc-100: #f4f4f5;
  --color-zinc-200: #e4e4e7;
  --color-zinc-950: #09090b;
}

.select-trigger {
  display: flex;
  height: 2.25rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid var(--color-zinc-200);
  background-color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.select-content {
  border: 1px solid var(--color-zinc-200);
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.select-item {
  cursor: default;
  padding: 0.375rem 0.5rem; 
  font-size: 0.875rem;
}

.select-item:hover {
  background-color: var(--color-zinc-100);
}
`;

  const simpleSelectPrompt = `# AI PROMPT: Generate Select Component
## CONTEXT
Dropdown selection input.

## API
\`\`\`tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>
\`\`\`

## SPECS
- Trigger: Height 36px, Border Zinc-200
- Content: White, Border Zinc-200, Shadow-md
- Item: Hover Zinc-100`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Select
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>

      {/* Basic Select */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Basic Usage
        </h2>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-12 flex items-center justify-center min-h-[300px]">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6">
          <CodeViewer
            title="Select"
            react={simpleSelectReact}
            html={simpleSelectHTML}
            css={simpleSelectCSS}
            prompt={simpleSelectPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '180px',
              height: '36px',
              borderRadius: '6px',
              border: '1px solid Zinc-200',
              padding: '8px 12px'
            }}
          />
        </div>
      </div>

      {/* Scrollable Select */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Scrollable
        </h2>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-12 flex items-center justify-center min-h-[300px]">
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Australia</SelectLabel>
                <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
                <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
                <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>South America</SelectLabel>
                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

    </div>
  );
}
