---
sidebar_position: 3
title: Quick Start
description: Copy-paste setup for Next.js, NestJS, Vite, and Express
---

# Quick Start

## Plain Node.js

```ts title="env.schema.ts"
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  DATABASE_URL: z.string().url(),
})
```

```ts title="src/index.ts"
import { env } from '../env.schema'
server.listen(env.PORT) // typed as number
```

## Next.js

```ts title="env.schema.ts"
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url().optional(),
})
```

Validate at build time by importing in `next.config.ts`:

```ts title="next.config.ts"
import './env.schema'
import type { NextConfig } from 'next'
const config: NextConfig = {}
export default config
```

## NestJS

```bash
npm install @stacklance/envguard-nestjs @stacklance/envguard-core zod
```

```ts title="app.module.ts"
import { Module } from '@nestjs/common'
import { EnvGuardModule } from '@stacklance/envguard-nestjs'
import { z } from 'zod'

@Module({
  imports: [
    EnvGuardModule.forRoot({
      schema: {
        PORT: z.coerce.number().default(3000),
        DATABASE_URL: z.string().url(),
      },
    }),
  ],
})
export class AppModule {}
```

## Vite

```ts title="env.schema.ts"
export const env = guard({
  VITE_API_URL: z.string().url(),
  VITE_APP_TITLE: z.string().default('My App'),
})
```

## Express

```ts title="src/app.ts"
import express from 'express'
import { env } from '../env.schema'

const app = express()
app.listen(env.PORT, () => console.log(`Port ${env.PORT}`))
```
