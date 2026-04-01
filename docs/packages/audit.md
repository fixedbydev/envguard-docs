---
title: "@stacklance/envguard-audit"
---

# @stacklance/envguard-audit

```bash
npm install -D @stacklance/envguard-audit
```

## audit()

```ts
import { audit } from '@stacklance/envguard-audit'
const result = await audit({ dir: './src', schema: './env.schema.ts' })
// result.undeclared, result.unused, result.unsafe
```

## explainKey()

```ts
import { explainKey } from '@stacklance/envguard-audit'
const result = await explainKey({ key: 'DATABASE_URL', dir: './src' })
// result.usages, result.status, result.value
```

## fixSchema()

```ts
import { fixSchema } from '@stacklance/envguard-audit'
fixSchema('./env.schema.ts', undeclaredRefs)
```
