---
title: API Reference
---

# API Reference

## @stacklance/envguard-core

### guard(schema, options?)

```ts
function guard<T extends ZodRawShape>(schema: T, options?: GuardOptions): z.infer<ZodObject<T>>
```

### guardMulti(schemas, options?)

```ts
function guardMulti<T extends MultiEnvSchema>(schemas: T, options?: GuardMultiOptions): Record<string, unknown>
```

### scanSecrets(options?)

```ts
function scanSecrets(options?: SecretScanOptions): SecretScanResult
```

### shannonEntropy(value)

```ts
function shannonEntropy(s: string): number
```

### isSensitive(key)

```ts
function isSensitive(key: string): boolean
```

## Types

```ts
interface GuardOptions {
  path?: string; examplePath?: string; freeze?: boolean; watch?: boolean; masked?: boolean;
}

interface GuardMultiOptions extends Omit<GuardOptions, 'watch'> {
  nodeEnvKey?: string; defaultEnv?: string;
}

interface EnvGuardError extends Error {
  details: { key: string; issues: ZodIssue[] }[];
}

interface SecretFinding {
  key: string; type: string; severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'; detail: string; entropy?: number;
}
```
