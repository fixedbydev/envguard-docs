---
title: Kubernetes
---

# Kubernetes Validation

```bash
npm install -D @stacklance/envguard-k8s js-yaml
```

## Validate manifests

```bash
env-guard k8s check --manifest ./k8s --env .env
```

## Generate from .env

```bash
env-guard k8s generate --env .env --out ./k8s --name my-app
```

Creates `configmap.yml` (non-sensitive) and `secret.yml` (sensitive, base64 encoded).
