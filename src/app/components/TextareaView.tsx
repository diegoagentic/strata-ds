import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { CodeViewer } from "./CodeViewer"


export function TextareaView() {
    const basicTextareaReact = `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
`

    const basicTextareaHTML = `<!-- Textarea -->
<textarea
  class="flex min-h-[60px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
  placeholder="Type your message here."
></textarea>`

    const basicTextareaCSS = `@theme {
  --color-zinc-200: #e4e4e7;
  --color-zinc-500: #71717a;
  --color-zinc-950: #09090b;
}

.textarea {
  display: flex;
  min-height: 60px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--color-zinc-200);
  background-color: transparent;
  padding: 8px 12px;
  font-size: 14px;
}

.textarea:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-zinc-950);
}
`

    const basicTextareaPrompt = `# AI PROMPT: Generate Textarea Component
## CONTEXT
Multi-line text input.

## API
\`\`\`tsx
<Textarea placeholder="Type your message here." />
<Textarea disabled />
\`\`\`

## SPECS
- Border: Zinc-200 (light) / Zinc-800 (dark)
- Focus: Ring Zinc-950 (light) / Zinc-300 (dark)
- Min Height: 60px
- Padding: 8px 12px`

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Textarea</h1>
                <p className="text-zinc-500 dark:text-zinc-400">
                    Displays a form textarea or a component that looks like a textarea.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Basic Usage</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-12">
                    <div className="max-w-sm mx-auto space-y-4">
                        <Textarea placeholder="Type your message here." />
                    </div>
                </div>

                <div className="mt-6">
                    <CodeViewer
                        title="Textarea"
                        react={basicTextareaReact}
                        html={basicTextareaHTML}
                        css={basicTextareaCSS}
                        prompt={basicTextareaPrompt}
                        enableFigmaExport={true}
                        figmaSpecs={{
                            height: "auto (min 60px)",
                            width: "100%",
                            borderRadius: "6px",
                            border: "1px solid Zinc-200",
                            padding: "8px 12px",
                        }}
                    />
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">With Label</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-12">
                    <div className="max-w-sm mx-auto space-y-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-zinc-50"
                        >
                            Your message
                        </label>
                        <Textarea id="message" placeholder="Type your message here." />
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Your message will be copied to the support team.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">With Button</h2>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-12">
                    <div className="max-w-sm mx-auto space-y-4">
                        <Textarea placeholder="Type your message here." />
                        <Button>Send message</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
