---
title: Error Codes
---

# Error Codes

All errors are `EnvGuardError` instances with a `details` array.

## Validation errors

| Zod Issue Code | Meaning |
|---------------|---------|
| `invalid_type` | Wrong type (expected number, got string) |
| `invalid_string` | Failed string validation (url, email) |
| `invalid_enum_value` | Value not in enum list |
| `too_small` | Below minimum (`.min(1)`) |
| `too_big` | Above maximum |
| `custom` | Custom validation (`.superRefine()`) |

## guardMulti errors

| Error | Cause |
|-------|-------|
| `NODE_ENV is required` | No NODE_ENV and no `defaultEnv` |
| `Unknown environment "X"` | NODE_ENV doesn't match any defined env |
