---
title: Express
---

# Express Integration

```bash
npm install @stacklance/envguard-core zod
```

```ts title="env.schema.ts"
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  CORS_ORIGIN: z.string().url(),
  SESSION_SECRET: z.string().min(32),
})
```

```ts title="src/app.ts"
import express from 'express'
import cors from 'cors'
import { env } from '../env.schema'

const app = express()
app.use(cors({ origin: env.CORS_ORIGIN }))
app.listen(env.PORT, () => console.log(`${env.NODE_ENV} on ${env.PORT}`))
```

Schema validates before the server starts. Missing `SESSION_SECRET` crashes immediately with a clear error.
