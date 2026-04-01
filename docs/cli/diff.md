---
title: env-guard diff
description: Compare env keys between files or git branches
---

# env-guard diff

## File diff

```bash
env-guard diff [--env .env] [--example .env.example]
```

Shows missing and extra keys between `.env` and `.env.example`.

## Branch diff

```bash
env-guard branch-diff --base main --head feature/payments
```

Compares `.env.example` across git branches:

```
+ STRIPE_KEY           added in feature/payments (sensitive)
+ WEBHOOK_URL          added in feature/payments
- LEGACY_PAYMENT_URL   removed in feature/payments
~ PORT                 default changed: 3000 → 8080
```
