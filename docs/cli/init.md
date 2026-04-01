---
title: env-guard init
description: Auto-generate a Zod schema from an existing .env file
---

# env-guard init

Reads your `.env` and generates a ready-to-use `env.schema.ts`.

```bash
env-guard init [--path .env] [--out ./env.schema.ts] [--dry-run]
```

## Type inference

| .env value | Inferred type |
|-----------|---------------|
| `3000` | `z.coerce.number().default(3000)` |
| `true`/`false` | `z.coerce.boolean()` |
| `https://...` | `z.string().url()` |
| `user@example.com` | `z.string().email()` |
| `production` (NODE_ENV) | `z.enum([...])` |
| Empty value | `z.string().optional()` |
| Sensitive key | `z.string().min(1) // sensitive` |

Falls back to `.env.example` if `.env` doesn't exist.
