---
title: env-guard mask
---

# env-guard mask

Print all env vars with sensitive values redacted.

```bash
env-guard mask [--path .env]
```

Keys containing `SECRET`, `KEY`, `TOKEN`, `PASSWORD`, or `PASS` show as `****`.
