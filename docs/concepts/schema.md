---
title: Schema Definition
description: Define environment schemas with Zod for full TypeScript inference
---

# Schema Definition

envguard schemas are plain Zod objects. Every key maps to a Zod type.

## Basic types

```ts
const env = guard({
  PORT: z.coerce.number(),
  HOST: z.string(),
  DEBUG: z.coerce.boolean(),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
})
```

## Type coercion

Environment variables are always strings. Use `z.coerce` to convert:

| Env value | Schema | Result |
|-----------|--------|--------|
| `"3000"` | `z.coerce.number()` | `3000` (number) |
| `"true"` | `z.coerce.boolean()` | `true` (boolean) |
| `"3.14"` | `z.coerce.number()` | `3.14` (number) |

## Defaults

```ts
PORT: z.coerce.number().default(3000),
DEBUG: z.coerce.boolean().default(false),
```

If the variable is missing, the default is used. No error thrown.

## Optional values

```ts
SENTRY_DSN: z.string().url().optional(),
```

Type becomes `string | undefined`.

## Validation rules

```ts
DATABASE_URL: z.string().url(),                    // must be a URL
API_KEY: z.string().min(1),                         // cannot be empty
PORT: z.coerce.number().int().min(1).max(65535),    // valid port range
EMAIL: z.string().email(),                          // email format
```

## Full TypeScript inference

The return type of `guard()` is fully inferred:

```ts
const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production']),
})

// TypeScript knows:
// env.PORT → number
// env.NODE_ENV → 'development' | 'production'
```

No manual type definitions needed.
