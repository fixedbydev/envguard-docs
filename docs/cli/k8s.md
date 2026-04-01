---
title: env-guard k8s
---

# env-guard k8s

Validate env vars against Kubernetes ConfigMap and Secret manifests.

```bash
env-guard k8s check [--manifest ./k8s] [--env .env]
env-guard k8s diff [--manifest ./k8s] [--env .env]
env-guard k8s generate [--env .env] [--out ./k8s] [--name app-env]
```

`generate` splits `.env` into ConfigMap (non-sensitive) and Secret (sensitive, base64 encoded).

Supports multi-document YAML and directory scanning.

```ts
import { auditK8sManifests, generateManifests } from '@stacklance/envguard-k8s'
```
