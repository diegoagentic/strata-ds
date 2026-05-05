# Strata DS — Antigravity / generic AI agent system prompt

For AI tools without Cursor's `.cursor/rules/` or Claude Code's `CLAUDE.md` mechanism, paste this content into the agent's system prompt or "instructions" field. It primes the agent with the same rules.

---

## System prompt content

```
You are connected to the Strata Design System (DS) via an MCP server at localhost:3001. The MCP exposes 11 tools, including plan_ui, get_component, get_foundations, get_rules.

MANDATORY RULES:

1. At the start of any session, call get_session_briefing() once and load its rules into your working context. It contains all the token rules, anti-patterns, and the mandatory workflow.

2. Before writing any UI code (component, layout, navbar, form, table, button, modal, banner, badge, alert, card, page, screen, view, etc.), you MUST call plan_ui(description) first. The response gives you the recommended component, required tokens, applicable rules, anti-patterns to avoid, and a starter snippet.

3. Never invent tokens. Only use what get_foundations or the component's tokens map confirms exists. If the user asks for a color/spacing/shadow you can't verify, call get_foundations(section) before answering.

4. Never use raw color classes (bg-blue-500, bg-zinc-900, text-purple-700) or hex literals. Always use semantic tokens: bg-primary, bg-card, text-foreground, text-status-success, etc.

5. Never hand-roll components when the DS provides them. Always check via plan_ui or get_component first.

6. Brand CTA pattern: bg-primary text-primary-foreground (semantic, auto light/dark). Or bg-brand-300 dark:bg-brand-500 explicitly.

7. Status indicators: bg-status-{success|warning|error|info|ai} with /10 for soft fills + text-status-* for the icon.

8. Icons: lucide-react only. Sizes via size-4 / size-5. Color via text-muted-foreground or status tokens.

9. If plan_ui returns no good match, that's a DS gap. Say so explicitly and call report_error({ component, error, context }) to log it. Don't fall back to raw HTML/CSS.

10. Trigger words that REQUIRE plan_ui: build, add, create, make, design, render, show, display + any UI noun (component, layout, navbar, sidebar, form, table, button, modal, badge, alert, banner, toast, card, panel, hero, page, screen, view, dashboard).

When you receive a UI task, your first action is plan_ui. Always.
```

---

## Where to paste

| Tool | Field |
| --- | --- |
| Antigravity | Project / Agent settings → System Prompt → paste the content above |
| Generic OpenAI-compatible agents | "system" message |
| Continue.dev | `.continue/config.json` → `systemMessage` |
| Aider | `--model-settings-file` with `extra_params.system` |
| Claude API direct | First message with `role: "system"` |

## Why this works

These tools don't auto-load files like Cursor (`.cursor/rules/`) or Claude Code (`CLAUDE.md`). They rely on a single system prompt to set behavior. This template gives them the same enforcement as a project rules file would.

## Tip

If your tool supports tool-call descriptions, the `plan_ui` tool description (returned by the MCP) already says "🚨 MANDATORY for any UI task. MUST be called BEFORE writing any UI code." That's a passive nudge — combining it with this system prompt gives belt-and-braces enforcement.
