---
title: CLI Flags
---

# CLI Flags Reference

## env-guard check

| Flag | Default | Description |
|------|---------|-------------|
| `--path` | `.env` | .env file path |
| `--schema` | `./env.schema.ts` | Schema file path |

## env-guard audit

| Flag | Default | Description |
|------|---------|-------------|
| `--dir` | `./src` | Source directories |
| `--schema` | `./env.schema.ts` | Schema file |
| `--fix` | `false` | Auto-add undeclared keys |
| `--json` | `false` | JSON output |

## env-guard doctor

| Flag | Default | Description |
|------|---------|-------------|
| `--dir` | `./` | Project directory |
| `--env` | `.env` | .env file |
| `--format` | `pretty` | `pretty` or `json` |
| `--fix` | `false` | Auto-fix issues |

## env-guard secrets

| Flag | Default | Description |
|------|---------|-------------|
| `--path` | `.env` | .env file |
| `--strict` | `false` | Fail on MEDIUM severity |

## env-guard scan

| Flag | Default | Description |
|------|---------|-------------|
| `--url` | required | GitHub repo URL |
| `--format` | `pretty` | `pretty` or `json` |
| `--token` | — | GitHub API token |

## env-guard serve

| Flag | Default | Description |
|------|---------|-------------|
| `--port` | `4321` | Listen port |
| `--env` | `.env` | .env file |
| `--example` | `.env.example` | Example file |

## env-guard init

| Flag | Default | Description |
|------|---------|-------------|
| `--path` | `.env` | .env file |
| `--out` | `./env.schema.ts` | Output file |
| `--dry-run` | `false` | Print without writing |
