---
title: env-guard serve
description: Start a local web dashboard for env var inspection
---

# env-guard serve

```bash
env-guard serve [--port 4321] [--env .env] [--example .env.example]
```

Opens a dashboard at `http://localhost:4321` with:

- Summary bar: total keys, passing, failing, warnings
- Env table with masked values and eye-toggle reveal
- Filters: all / errors / warnings / valid
- Search by key name
- Live updates via SSE when `.env` changes
- Export: copy as JSON, download `.env.example`
- `.env.example` sync panel
