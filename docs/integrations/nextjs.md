---
title: Next.js
---

# Next.js Integration

```bash
npm install @stacklance/envguard-core zod
```

## Schema

```ts title="env.schema.ts"
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
})
```

## Validate at build time

```ts title="next.config.ts"
import './env.schema'
import type { NextConfig } from 'next'
const config: NextConfig = {}
export default config
```

## Server components

```ts
import { env } from '@/env.schema'

export default async function Page() {
  const data = await fetch(env.DATABASE_URL + '/api')
}
```

## Client components

`NEXT_PUBLIC_` variables are inlined at build time. Access them via the schema import.
