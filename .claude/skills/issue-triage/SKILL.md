---
name: issue-triage
description: Read open issues and PRs; produce a prioritized triage list, suggest labels, and update issue-triage-state.md. Use at the start of every issue-triage loop run.
---

# issue-triage

Triage SOP for the issue-triage loop. Encodes project intent so the loop does not
re-derive rules every run.

## Inputs
- `gh issue list` / `gh pr list` (CI) — or MCP connectors in production.
- Prior `issue-triage-state.md` (always read first).

## Rules (tight output — do not invent work)
1. **Read `issue-triage-state.md` first**, then rewrite it with the current picture.
2. Rank the **Top 5** items that need attention. Bug + reproducible > vague feature.
3. **Suggest labels** only on the allowlist: `area:*`, `needs-repro`, `needs-info`.
4. **Never auto-apply** anything at L1 — suggestions are text only.
5. **Escalate to the human bucket** (do not act): `P0`, `P1`, `security`, `breaking-change`.
6. **dependabot / bot PRs** -> Noise (a separate automation handles these).
7. Vague / no repro -> label suggestion `needs-repro` or `needs-info`, do not prioritize.

## State contract
- Sections: `## Top 5`, `## Suggested labels`, `## Needs human (do not act)`, `## Noise`, `## Post-run critique`.
- Always set `Last run` timestamp and active `Level`.

## Level gate
- **L1 (report-only):** propose only. Token is `issues: read`. Escalate sensitive items.
- **L2 (assisted):** after ~10 stable L1 runs, auto-apply the allowlist labels only;
  keep the human gate on `P0/P1/security/breaking-change`. Requires `issues: write` +
  a separate `loop-verifier` pass. Do NOT self-approve.
