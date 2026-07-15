# loop-engineering-sandbox

A throwaway repo for trying the [Loop Engineering](https://github.com/cobusgreyling/loop-engineering)
`issue-triage` pattern end-to-end with Claude Code + GitHub Actions.

A tiny toy TODO API lives in `src/` so issues and PRs have something real to point at.

## What's wired up
- **Skill:** `.claude/skills/issue-triage/SKILL.md` — the triage SOP.
- **State spine:** `issue-triage-state.md` — rewritten each run (Top 5 / suggested labels / needs-human).
- **Run log:** `loop-run-log.md` — append-only history, one block per run.
- **CI heartbeat:** `.github/workflows/issue-triage.yml` — scheduled every 2h (weekdays), **L1 read-only**.

## Engine: OpenCode + GPT (via aiohub gateway)
The loop runs the [OpenCode](https://opencode.ai) CLI against an OpenAI-compatible endpoint.
Provider, model (`gpt-4o`), and API key are configured in `opencode.json` (provider `aiohub`).

## Level: L1 (report-only)
The workflow token is `issues: read`, and the OpenCode agent runs with `bash: deny` + a
propose-only prompt. Requires repo secret **`AIOHUB_API_KEY`**. Nothing touches your issues
unattended. See the workflow comments for how to graduate to L2.
