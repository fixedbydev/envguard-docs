---
title: "@stacklance/envguard-k8s"
---

# @stacklance/envguard-k8s

```bash
npm install -D @stacklance/envguard-k8s js-yaml
```

```ts
import { auditK8sManifests, generateManifests } from '@stacklance/envguard-k8s'

const result = await auditK8sManifests({ manifestPath: './k8s', envPath: '.env' })
// result.missing, result.extra, result.typeMismatches

const { configMap, secret } = generateManifests('.env', 'app-env', 'default')
```

Supports ConfigMap, Secret, multi-document YAML, and directory scanning.
