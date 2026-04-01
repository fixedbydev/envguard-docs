---
title: Monorepo Setup
---

# Monorepo Setup

## Shared schema at root

```ts title="env.schema.ts"
export const env = guard({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
})
```

Import from any package:

```ts title="packages/api/src/db.ts"
import { env } from '../../../env.schema'
```

## Per-package schemas

Each package can have its own:

```
packages/
  api/env.schema.ts
  web/env.schema.ts
```

## Audit across packages

```bash
env-guard audit --dir packages/api/src packages/web/src --schema ./env.schema.ts
```
