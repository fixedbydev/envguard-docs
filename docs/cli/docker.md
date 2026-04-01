---
title: env-guard docker
---

# env-guard docker

Validate `.env` against `docker-compose.yml`.

```bash
env-guard docker check [--compose docker-compose.yml] [--service api] [--env .env]
env-guard docker diff [--compose docker-compose.yml] [--service api] [--env .env]
```

Supports list format (`- KEY=value`) and map format (`KEY: value`). Use `--service` to check a specific service.

```ts
import { auditDockerCompose } from '@stacklance/envguard-docker'
const result = await auditDockerCompose({ composePath: './docker-compose.yml', service: 'api' })
```
