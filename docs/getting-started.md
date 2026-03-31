---
sidebar_position: 1
title: Getting Started
description: Install envguard and validate your first env vars in 5 minutes
---

# Getting Started

Install envguard and validate your first env vars in 5 minutes.

## Install

```bash
npm install @stacklance/envguard-core zod
```

## Create your schema

Create `env.schema.ts` in your project root:

```ts
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  DATABASE_URL: z.string().url(),
})
```

Import `env` anywhere. TypeScript knows the exact types:

```ts
import { env } from './env.schema'

console.log(env.PORT)         // number
console.log(env.NODE_ENV)     // 'development' | 'staging' | 'production'
console.log(env.DATABASE_URL) // string
```

## What happens on invalid env

If a required variable is missing or has the wrong type, envguard throws at startup:

```
✖ Environment validation failed:

  DATABASE_URL
    → Invalid url

  PORT
    → Expected number, received nan
```

Your app fails fast with actionable errors instead of crashing later with `undefined`.

## Add the CLI

```bash
npm install -D @stacklance/envguard-cli
npx env-guard doctor
```

## Next steps

- [Installation options](/docs/installation) — npm, pnpm, yarn, bun
- [Quick Start per framework](/docs/quick-start) — Next.js, NestJS, Vite, Express
- [Schema reference](/docs/concepts/schema) — all Zod types and coercion
- [CLI commands](/docs/cli/overview) — 15+ commands
