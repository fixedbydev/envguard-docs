---
title: Docker Compose
---

# Docker Compose Validation

```bash
npm install -D @stacklance/envguard-docker js-yaml
```

## Check all services

```bash
env-guard docker check --compose docker-compose.yml --env .env
```

## Check specific service

```bash
env-guard docker check --service api --env .env
```

## Show full diff

```bash
env-guard docker diff --service api --env .env
```
