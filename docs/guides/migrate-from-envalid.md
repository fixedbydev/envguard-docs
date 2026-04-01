---
title: Migrate from envalid
---

# Migrate from envalid

## Type mapping

| envalid | envguard |
|---------|----------|
| `str()` | `z.string()` |
| `num()` | `z.coerce.number()` |
| `bool()` | `z.coerce.boolean()` |
| `url()` | `z.string().url()` |
| `email()` | `z.string().email()` |
| `port()` | `z.coerce.number().int().min(1).max(65535)` |

Before:
```ts
import { cleanEnv, str, num, bool } from 'envalid'
const env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  DATABASE_URL: url(),
  DEBUG: bool({ default: false }),
})
```

After:
```ts
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'
const env = guard({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  DEBUG: z.coerce.boolean().default(false),
})
```
