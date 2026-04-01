---
title: env-guard scan
description: Scan a public GitHub repo for env setup quality
---

# env-guard scan

Analyze any public GitHub repo's environment variable setup.

```bash
env-guard scan --url https://github.com/org/repo [--format json] [--token TOKEN]
```

## What it checks

- Framework detection (Next.js, NestJS, Vite, Express)
- Env validator detection (envguard, t3-env, envalid, dotenv-safe)
- `.env.example` presence and key count
- `.gitignore` coverage for `.env`
- CI workflow with env validation
- Sensitive values in example files

Score out of 100, same scale as `env-guard doctor`.
