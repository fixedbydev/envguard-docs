---
title: Validation
description: How envguard validates environment variables at runtime
---

# Validation

## How it works

When you call `guard()`, envguard:

1. Loads `.env` via dotenv
2. Compares `.env` keys with `.env.example` (warns on mismatches)
3. Validates `process.env` against your Zod schema
4. Returns a frozen, typed object

## Error handling

Invalid env throws `EnvGuardError` with per-key details:

```ts
import { guard, EnvGuardError } from '@stacklance/envguard-core'

try {
  const env = guard(schema)
} catch (err) {
  if (err instanceof EnvGuardError) {
    for (const detail of err.details) {
      console.log(detail.key)    // 'DATABASE_URL'
      console.log(detail.issues) // ZodIssue[]
    }
  }
}
```

## Freeze mode

By default, the result is frozen with `Object.freeze()`:

```ts
env.PORT = 9999 // TypeError: Cannot assign to read only property
```

Disable with `freeze: false`:

```ts
const env = guard(schema, { freeze: false })
```

## Masked logging

Print all env vars with sensitive values redacted:

```ts
const env = guard(schema, { masked: true })
```

Keys containing `SECRET`, `KEY`, `TOKEN`, `PASSWORD`, or `PASS` show as `****`.

## Custom .env path

```ts
const env = guard(schema, {
  path: '.env.local',
  examplePath: '.env.example',
})
```
