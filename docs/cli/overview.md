---
title: CLI Overview
description: All envguard CLI commands at a glance
---

# CLI Reference

```bash
npm install -D @stacklance/envguard-cli
```

| Command | Description |
|---------|-------------|
| [`check`](/docs/cli/check) | Validate .env against a schema |
| [`diff`](/docs/cli/diff) | Compare .env vs .env.example |
| [`audit`](/docs/cli/audit) | Static analysis of process.env usage |
| [`doctor`](/docs/cli/doctor) | Health score for your env setup |
| [`secrets`](/docs/cli/secrets) | Detect accidentally committed secrets |
| [`scan`](/docs/cli/scan) | Scan a GitHub repo for env setup quality |
| [`init`](/docs/cli/init) | Generate schema from existing .env |
| [`serve`](/docs/cli/serve) | Start web dashboard |
| [`explain`](/docs/cli/explain) | Show where a key is used |
| [`mask`](/docs/cli/mask) | Print env with secrets redacted |
| [`badge`](/docs/cli/badge) | Generate README badge |
| [`fix`](/docs/cli/fix) | Append missing keys to .env |
| [`docker`](/docs/cli/docker) | Docker-compose validation |
| [`k8s`](/docs/cli/k8s) | Kubernetes manifest validation |

All commands support `--help`.
