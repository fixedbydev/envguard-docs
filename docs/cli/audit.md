---
title: env-guard audit
description: Static analysis of process.env usage in your codebase
---

# env-guard audit

Scans source code for `process.env` accesses and compares against your schema.

```bash
env-guard audit [--dir ./src] [--schema ./env.schema.ts] [--fix] [--json]
```

## What it detects

- **Undeclared**: `process.env.KEY` used but not in schema
- **Unused**: Schema keys never referenced in code
- **Unsafe**: Dynamic `process.env[variable]` access

## Flags

| Flag | Default | Description |
|------|---------|-------------|
| `--dir` | `./src` | Directories to scan (multiple supported) |
| `--schema` | `./env.schema.ts` | Path to schema file |
| `--fix` | `false` | Add undeclared keys to schema |
| `--json` | `false` | JSON output |

## Ignore lines

```ts
const val = process.env.LEGACY_FLAG // envguard-ignore
```

## Programmatic API

```ts
import { audit } from '@stacklance/envguard-audit'

const result = await audit({ dir: './src', schema: './env.schema.ts' })
result.undeclared // { key, file, line }[]
result.unused     // string[]
result.unsafe     // { expression, file, line }[]
```
