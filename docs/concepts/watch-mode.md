---
title: Watch Mode
description: Live reload env vars when .env file changes
---

# Watch Mode

Watch the `.env` file for changes and re-validate automatically.

```ts
const { env, watcher } = guard(schema, { watch: true })

watcher.on('change', (newEnv) => {
  console.log('Env updated:', newEnv)
})

watcher.on('error', (err) => {
  console.error('Validation failed after .env change:', err)
})

// Cleanup on shutdown
watcher.close()
```

## How it works

- Uses `fs.watch()` on the `.env` file
- Debounces rapid changes (100ms)
- Re-runs full Zod validation on each change
- Emits `change` with new validated env or `error` if validation fails

## When to use

Watch mode is useful for:
- Development servers that hot-reload
- Long-running processes that need config updates
- Testing different env values without restarting

Not recommended for production — load env once at startup.
