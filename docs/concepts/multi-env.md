---
title: Multi-Environment Schemas
description: Define different env requirements per environment
---

# Multi-Environment Schemas

Use `guardMulti()` to define base + per-environment schemas.

```ts
import { guardMulti } from '@stacklance/envguard-core'
import { z } from 'zod'

const env = guardMulti({
  base: {
    APP_NAME: z.string(),
    PORT: z.coerce.number().default(3000),
  },
  development: {
    DEBUG: z.coerce.boolean().default(true),
    DB_URL: z.string().default('postgres://localhost/dev'),
  },
  production: {
    DB_URL: z.string().url(),
    SENTRY_DSN: z.string().url(),
    SECRET_KEY: z.string().min(32),
  },
})
```

## How merging works

1. Reads `NODE_ENV` from process.env
2. Merges `base` + the matching environment schema
3. Environment-specific keys override base if same key exists

## Custom env key

```ts
const env = guardMulti(schema, { nodeEnvKey: 'APP_ENV' })
```

## Default environment

```ts
const env = guardMulti(schema, { defaultEnv: 'development' })
```

If `NODE_ENV` is not set, uses `development` instead of throwing.
