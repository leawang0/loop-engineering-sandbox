# loop-engineering-sandbox

A throwaway repo for trying the [Loop Engineering](https://github.com/cobusgreyling/loop-engineering)
`issue-triage` pattern end-to-end with Claude Code + GitHub Actions.

A tiny toy TODO API lives in `src/` so issues and PRs have something real to point at.

## What's wired up
- **Skill:** `.claude/skills/issue-triage/SKILL.md` — the triage SOP.
- **State spine:** `issue-triage-state.md` — rewritten each run (Top 5 / suggested labels / needs-human).
- **Run log:** `loop-run-log.md` — append-only history, one block per run.
- **CI heartbeat:** `.github/workflows/issue-triage.yml` — scheduled every 2h (weekdays), **L1 read-only**.

## Level: L1 (report-only)
The workflow token is `issues: read`. The agent step is present but **inert until you add an
`ANTHROPIC_API_KEY` secret**. Nothing touches your issues unattended. See the workflow comments
for the exact 2-line diff to graduate to L2.
