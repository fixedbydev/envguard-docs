---
title: Pre-commit Hooks
---

# Pre-commit Hooks

## Using husky

```bash
npm install -D husky
npx husky init
echo "npx env-guard secrets --path .env" > .husky/pre-commit
```

Blocks commits if CRITICAL or HIGH severity secrets are found.

## Strict mode

```bash
npx env-guard secrets --path .env --strict
```

Also blocks MEDIUM severity (high-entropy strings).

## Using lint-staged

```json title="package.json"
{
  "lint-staged": {
    ".env*": "env-guard secrets --path"
  }
}
```
