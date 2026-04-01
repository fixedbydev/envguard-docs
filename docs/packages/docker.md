---
title: "@stacklance/envguard-docker"
---

# @stacklance/envguard-docker

```bash
npm install -D @stacklance/envguard-docker js-yaml
```

```ts
import { auditDockerCompose } from '@stacklance/envguard-docker'

const result = await auditDockerCompose({
  composePath: './docker-compose.yml',
  envPath: './.env',
  service: 'api',
})
// result.missing, result.extra, result.unset
```

Supports list and map environment formats.
