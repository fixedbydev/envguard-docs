---
title: Vite
---

# Vite Integration

```bash
npm install @stacklance/envguard-core zod
```

```ts title="env.schema.ts"
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  VITE_API_URL: z.string().url(),
  VITE_APP_TITLE: z.string().default('My App'),
  VITE_ENABLE_ANALYTICS: z.coerce.boolean().default(false),
})
```

Validate in config:

```ts title="vite.config.ts"
import './env.schema'
import { defineConfig } from 'vite'
export default defineConfig({})
```

Usage:

```ts
import { env } from '../env.schema'
fetch(env.VITE_API_URL + '/api/data')
```
