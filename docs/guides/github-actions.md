---
title: GitHub Actions
---

# GitHub Actions CI Setup

## Using envguard-action

```yaml
name: Env Check
on: [push, pull_request]
jobs:
  env-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: fixedbydev/envguard-action@v1
        with:
          env-file: .env.example
          example-file: .env.example.dist
          fail-on: missing
```

## Audit process.env usage

```yaml
- uses: fixedbydev/envguard-action@v1
  with:
    schema: ./env.schema.ts
    src-dir: ./src
    fail-on: undeclared
```

## Using outputs

```yaml
- uses: fixedbydev/envguard-action@v1
  id: envguard
  continue-on-error: true
  with:
    env-file: .env.example

- run: echo "Valid: ${{ steps.envguard.outputs.valid }}"
```

## Without the action

```bash
npx env-guard check --path .env.example
npx env-guard doctor --format json
```
