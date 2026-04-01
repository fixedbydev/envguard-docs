---
title: Migrate from dotenv
---

# Migrate from dotenv

envguard uses dotenv internally, so migration is additive.

## Step 1: Install

```bash
npm install @stacklance/envguard-core zod
npm uninstall dotenv  # envguard includes it
```

## Step 2: Generate schema from existing .env

```bash
npx env-guard init --path .env --out ./env.schema.ts
```

## Step 3: Replace dotenv.config()

Before:
```ts
import 'dotenv/config'
const port = parseInt(process.env.PORT || '3000')
```

After:
```ts
import { env } from './env.schema'
const port = env.PORT // already a number, already validated
```

## Step 4: Find remaining process.env usage

```bash
npx env-guard audit --dir ./src --schema ./env.schema.ts
```

This shows every `process.env` access that needs updating.
