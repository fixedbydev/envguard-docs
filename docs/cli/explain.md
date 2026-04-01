---
title: env-guard explain
description: Show where and how an env key is used in your codebase
---

# env-guard explain

```bash
env-guard explain DATABASE_URL [--dir ./src] [--schema ./env.schema.ts] [--json]
```

Shows every usage of a specific `process.env` key across your codebase with surrounding context.

```
Key:        DATABASE_URL
Type:       url
Required:   yes
Sensitive:  no

Used in 2 files:

  src/db/client.ts:12
    const client = new PgClient({ connectionString: process.env.DATABASE_URL })

  src/db/migrate.ts:8
    await migrate({ dbUrl: process.env.DATABASE_URL })

Current value: postgresql://localhost:5432/myapp
Status: ✓ Valid
```

Sensitive keys show masked values.

## Programmatic API

```ts
import { explainKey } from '@stacklance/envguard-audit'
const result = await explainKey({ key: 'DATABASE_URL', dir: './src' })
```
