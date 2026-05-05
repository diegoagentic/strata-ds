# Strata DS — Enforcement templates

Pre-built configuration files that any consuming project can copy to make the DS rules **always-on** in their AI workflow. Use these on top of the MCP connection + ds-architect agent for triple-redundancy enforcement.

## Files in this folder

| File | Target location | What it does |
| --- | --- | --- |
| `cursor-rules-strata-ds.md` | `.cursor/rules/strata-ds.md` in any Cursor project | System-prompt-style rules loaded by Cursor on every conversation in that project |
| `antigravity-system-strata-ds.md` | Paste into Antigravity / generic-agent system prompt field | Equivalent text for tools that don't auto-load files |
| `claude-code-hook-user-prompt-submit.json` | `.claude/hooks/UserPromptSubmit.json` in any Claude Code project | Auto-injects a reminder into the AI's context when UI keywords are detected in the prompt — fires BEFORE the AI processes anything, so it doesn't depend on the AI deciding to consult |

## Layered enforcement strategy

| Layer | Mechanism | Which file | Ensures |
| --- | --- | --- | --- |
| 1 | System prompt (always loaded) | `.cursor/rules/strata-ds.md` (Cursor) or `CLAUDE.md` (Claude Code) | Rules are part of the AI's base context every conversation |
| 2 | Session briefing tool | MCP `get_session_briefing()` | Live rules dump pulled fresh from the DS source |
| 3 | Tool description nudges | MCP `plan_ui` description (already MUST/MANDATORY) | Passive reminder when the AI scans available tools |
| 4 | Pre-prompt hook (Claude Code) | `claude-code-hook-user-prompt-submit.json` → `.claude/hooks/` | Forces context injection BEFORE the AI sees the prompt |
| 5 | Subagent | `.claude/agents/ds-architect.md` | Auto-fires on UI patterns, runs the deterministic blueprint workflow |

Combine **all 5** for maximum enforcement. Any single layer alone has gaps.

## Quick install

```bash
# From any project that consumes the DS, run:

# Cursor users
mkdir -p .cursor/rules
cp "../design system/strata-ds/templates/cursor-rules-strata-ds.md" \
   .cursor/rules/strata-ds.md

# Claude Code users
mkdir -p .claude/agents .claude/commands .claude/hooks
cp "../design system/strata-ds/.claude/agents/ds-architect.md" .claude/agents/
cp "../design system/strata-ds/.claude/commands/ds-plan.md" .claude/commands/
cp "../design system/strata-ds/templates/claude-code-hook-user-prompt-submit.json" \
   .claude/hooks/UserPromptSubmit.json

# Antigravity / generic agents
# → open the agent's settings, paste the content of antigravity-system-strata-ds.md
#   into the system-prompt field
```

Then verify the MCP server is running:

```bash
curl http://localhost:3001/health
# {"status":"ok","tools":11,...}
```

## Hook behavior — what your AI sees

When a user types something like:
> "I need a sign-in screen for the admin"

The Claude Code hook detects "screen" + "sign-in", and the AI's effective context becomes:

```
🎨 [Strata DS active] The user mentioned a UI element. Before writing
any code, you MUST call `plan_ui` on the strata-ds MCP server with a
concrete description. The response gives you the recommended component,
required tokens, applicable rules, and anti-patterns to avoid. Skip
this and you'll drift from the DS.

User: I need a sign-in screen for the admin
```

Now the AI's first action is `plan_ui("sign-in screen for admin")`, which returns Form + Card + Input + Button + dialog patterns with the right tokens — instead of the AI guessing.
