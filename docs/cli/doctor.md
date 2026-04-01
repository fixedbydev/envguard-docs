---
title: env-guard doctor
description: Health score for your environment variable setup
---

# env-guard doctor

Runs 10 checks and calculates a score out of 100.

```bash
env-guard doctor [--dir ./] [--env .env] [--format pretty|json] [--fix]
```

## Checks

| Check | Points |
|-------|--------|
| Schema exists | 15 |
| All keys in schema | 15 |
| .env.example in sync | 10 |
| No raw process.env | 15 |
| No secrets in example | 10 |
| .env in .gitignore | 10 |
| Predev script | 5 |
| No empty values | 10 |
| No duplicate keys | 5 |
| Consistent naming | 5 |

## Score tiers

| Score | Tier |
|-------|------|
| 90-100 | Excellent |
| 70-89 | Good |
| 50-69 | Needs work |
| < 50 | At risk |

## JSON output

```bash
env-guard doctor --format json
```
