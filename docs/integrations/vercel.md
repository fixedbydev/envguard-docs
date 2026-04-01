---
title: Vercel
---

# Vercel Deployment

## Validate at build time

```json title="package.json"
{
  "scripts": {
    "prebuild": "npx env-guard check",
    "build": "next build"
  }
}
```

Vercel runs `prebuild` before `build`. Missing env vars fail the build with clear errors.

## Environment-specific validation

```ts
import { guardMulti } from '@stacklance/envguard-core'
import { z } from 'zod'

const env = guardMulti({
  base: { DATABASE_URL: z.string().url() },
  preview: {},
  production: { SENTRY_DSN: z.string().url() },
}, { nodeEnvKey: 'VERCEL_ENV', defaultEnv: 'preview' })
```
