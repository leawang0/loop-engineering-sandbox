# LOOP.md — Issue Triage Loop

> **Purpose:** Start each active period with a prioritized, actionable picture of open
> issues and PRs, with label suggestions — without manually scanning GitHub.

## Non-goals
- No auto-apply of labels at L1. The loop reports; the human decides.
- Never acts on P0/P1/security/breaking-change — those escalate.

## Cadence
- `2h` on weekdays (see `.github/workflows/issue-triage.yml`).

## Level
- **L1 — report only.** Triage -> `issue-triage-state.md`. Token is `issues: read`.

## Human gates
- Escalate (never act): `P0`, `P1`, `security`, `breaking-change`.

## Budget
- Max sub-agent spawns per run: 2 (scanner + optional verifier).
- Kill switch: same item re-flagged 3+ runs without resolution -> escalate.

## How to graduate to L2
1. Prove ~10 stable L1 runs.
2. Change workflow token `issues: read` -> `issues: write`.
3. Enable auto-apply on allowlist (`area:*`, `needs-repro`, `needs-info`) in the skill.
4. Add a separate `loop-verifier` pass (implementer must NOT self-approve).
