# docs/ — process & continuity

Three documents that let any contributor (human or AI) pick up work on the Strata DS without losing context. Read them in order:

| File | Read first if... |
| --- | --- |
| [`HANDOFF.md`](./HANDOFF.md) | You're starting a new session and need: where we are, what's next, how to start the local servers. **Begin here.** |
| [`MIGRATION_PLAN.md`](./MIGRATION_PLAN.md) | You're ready to do work. Has the active plan for v3 + outstanding DS tasks, organized by FASE. |
| [`SESSION_LOG.md`](./SESSION_LOG.md) | You need to understand "why was this decision made?" — chronological log of every commit and the themes that emerged. |

For dev-app users (people building UIs that consume the DS), the entry point is [`../GUIDE.md`](../GUIDE.md), not these. These files are about the DS itself.

---

## Other essential docs in this repo

| Path | Audience | What |
| --- | --- | --- |
| [`../README.md`](../README.md) | Anyone | Quickstart for AI-assisted projects (3 paths: MCP only, MCP + agent, curl/CLI) |
| [`../GUIDE.md`](../GUIDE.md) | Devs consuming the DS | Mental model, glossary, your-first-5-min, 5 worked examples, troubleshooting, FAQ, architecture |
| [`../templates/README.md`](../templates/README.md) | Devs integrating into another project | The 5-layer enforcement strategy + install commands |
| [`../.claude/agents/ds-architect.md`](../.claude/agents/ds-architect.md) | AI orchestrators (Claude Code) | Subagent definition |
| [`../.claude/commands/ds-plan.md`](../.claude/commands/ds-plan.md) | Slash command users | `/ds-plan <description>` |
