---
title: env-guard secrets
description: Detect accidentally committed real secrets
---

# env-guard secrets

Offline secret detection using pattern matching and Shannon entropy.

```bash
env-guard secrets [--path .env] [--strict]
```

## Detected patterns

AWS keys (`AKIA...`), GitHub PATs (`ghp_...`), Stripe keys (`sk_live_...`), Slack tokens (`xoxb-`), OpenAI/Anthropic keys, private keys, JWTs, SendGrid, Twilio, and high-entropy strings (>4.5 bits/char on 20+ char strings).

## False positive reduction

Automatically skips URLs, file paths, localhost, booleans, numbers, and UUIDs.

## Flags

| Flag | Default | Description |
|------|---------|-------------|
| `--path` | `.env` | Path to .env file |
| `--strict` | `false` | Also fail on MEDIUM severity |

Exit code 1 on CRITICAL or HIGH. With `--strict`, MEDIUM also fails.
