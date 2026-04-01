---
title: Schema Types
---

# Schema Types

## Strings

```ts
z.string()                    // any string
z.string().min(1)             // non-empty
z.string().url()              // valid URL
z.string().email()            // valid email
z.string().regex(/^[A-Z]+$/)  // custom pattern
z.string().optional()         // can be undefined
z.string().default('value')   // default if missing
```

## Numbers

```ts
z.coerce.number()                // any number
z.coerce.number().int()          // integer only
z.coerce.number().positive()     // > 0
z.coerce.number().min(1).max(65535) // port range
z.coerce.number().default(3000)  // with default
```

## Booleans

```ts
z.coerce.boolean()               // "true" → true, "false" → false
z.coerce.boolean().default(false)
```

## Enums

```ts
z.enum(['development', 'staging', 'production'])
```
