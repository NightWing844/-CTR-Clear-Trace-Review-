# Suspicious Transaction Review — Demo

> ⚠ **This is a safe software demo only.**
> All data is entirely synthetic and fictional. No real account numbers,
> names, addresses, transaction IDs, or personal information of any kind.
> No connection to any real bank, payment network, or financial institution.

## Quick start

```bash
npm install
npm run dev          # → http://localhost:5173
```

## Run a type-check without starting the dev server

```bash
npm run typecheck
```

## Project structure

```
src/
├── data/
│   ├── rules.ts          # Detection rules engine — thresholds, signal factories
│   ├── seed.ts           # 25 synthetic transactions covering all scenarios
│   └── transactions.ts   # Public entry-point; re-exports data + helpers
├── types/
│   └── index.ts          # All TypeScript types
├── App.tsx               # Root component (data smoke-test shell)
└── main.tsx              # Vite entry point
```

## Scenarios covered

| ID     | Scenario                                   | Risk level    | Note              |
|--------|--------------------------------------------|---------------|-------------------|
| TX-001 | Dormant reactivation + large wire          | 🔴 High       |                   |
| TX-002 | Structuring pattern                        | 🔴 High       |                   |
| TX-003 | Rapid fund movement                        | 🔴 High       |                   |
| TX-004 | High velocity (7 txns / 24 h)             | 🔴 High       |                   |
| TX-005 | Large cash-equivalent (gift cards)         | 🟡 Medium     |                   |
| TX-006 | Cross-border + round + unusual hour        | 🟡 Medium     |                   |
| TX-007 | Amount spike (8×)                          | 🔴 High       |                   |
| TX-008 | New category: crypto exchange              | 🟡 Medium     |                   |
| TX-009 | Dormant + spike + cross-border             | 🔴 Very high  |                   |
| TX-010 | Property tax payment                       | 🟡 Medium     | **False positive**|
| TX-011 | Round-amount domestic wire                 | 🟢 Low        |                   |
| TX-012–020 | Ordinary transactions                  | ⚪ None       |                   |
| TX-021 | Dormant, moderate amount                   | 🟡 Medium     |                   |
| TX-022 | Routine cross-border payroll               | 🟡 Medium     |                   |
| TX-023 | Unusual hour only                          | 🟢 Low        |                   |
| TX-024 | Real-estate deposit                        | 🟡 Medium     |                   |
| TX-025 | Spike + cross-border + round               | 🔴 High       |                   |

## Adjusting thresholds

All detection thresholds are at the top of [`src/data/rules.ts`](src/data/rules.ts)
inside the `THRESHOLDS` constant. Change a number and hot-reload will pick it up.

## Ethical guardrails

- Risk scores are labelled throughout as *illustrative prioritization aids*.
- No "fraud", "criminal", or conclusory language in any signal explanation.
- The false-positive case (TX-010) demonstrates that a non-trivial score does
  not imply wrongdoing.
- Human review is required before any conclusion can be drawn.
