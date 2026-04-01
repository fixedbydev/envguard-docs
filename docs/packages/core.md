---
title: "@stacklance/envguard-core"
---

# @stacklance/envguard-core

```bash
npm install @stacklance/envguard-core zod
```

## API

### `guard(schema, options?)`

```ts
import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production']),
})
```

Options: `path`, `examplePath`, `freeze`, `watch`, `masked`.

### `guardMulti(schemas, options?)`

Multi-environment validation. Options add: `nodeEnvKey`, `defaultEnv`.

### `scanSecrets(options?)`

Offline secret detection. Returns `{ findings, scanned, clean }`.

### `shannonEntropy(value)`

Calculate Shannon entropy of a string. Values > 4.5 on strings > 20 chars suggest secrets.

### `isSensitive(key)`

Returns `true` if key contains SECRET, KEY, TOKEN, PASSWORD, or PASS.

### `EnvGuardError`

```ts
class EnvGuardError extends Error {
  details: { key: string; issues: ZodIssue[] }[]
}
```
