---
title: env-guard check
description: Validate environment variables against a Zod schema
---

# env-guard check

Validate a `.env` file against a Zod schema. Exits with code 1 on failure.

```bash
env-guard check [--path .env] [--schema ./env.schema.ts]
```

## Flags

| Flag | Default | Description |
|------|---------|-------------|
| `--path` | `.env` | Path to .env file |
| `--schema` | `./env.schema.ts` | Path to schema file |

## CI Integration

When `CI=true`, outputs GitHub Actions annotations:

```
::error title=EnvGuard::DATABASE_URL: Invalid url
```

## Example

```bash
env-guard check --path .env.production --schema ./env.schema.ts
```
