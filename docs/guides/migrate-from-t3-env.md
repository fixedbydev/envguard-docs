---
title: Migrate from t3-env
---

# Migrate from t3-env

## Key differences

| Feature | t3-env | envguard |
|---------|--------|----------|
| Zod schemas | ✓ | ✓ |
| Client/server split | ✓ (built-in) | Manual (`NEXT_PUBLIC_` prefix) |
| Static analysis | — | ✓ |
| CLI tools | — | ✓ (15+ commands) |
| Secret detection | — | ✓ |

## Convert schema

Before (t3-env):
```ts
export const env = createEnv({
  server: { DATABASE_URL: z.string().url() },
  client: { NEXT_PUBLIC_API_URL: z.string().url() },
  runtimeEnv: { DATABASE_URL: process.env.DATABASE_URL, NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL },
})
```

After (envguard):
```ts
export const env = guard({
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url(),
})
```

No `runtimeEnv` mapping needed.

```bash
npm install @stacklance/envguard-core zod
npm uninstall @t3-oss/env-nextjs @t3-oss/env-core
```
