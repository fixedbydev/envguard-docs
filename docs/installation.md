---
sidebar_position: 2
title: Installation
description: Install envguard packages with npm, pnpm, yarn, or bun
---

# Installation

## Core package

```bash
npm install @stacklance/envguard-core zod
```

`zod` is a peer dependency — install it separately.

## CLI tools

```bash
npm install -D @stacklance/envguard-cli
```

## NestJS

```bash
npm install @stacklance/envguard-nestjs @stacklance/envguard-core zod
```

## Docker

```bash
npm install -D @stacklance/envguard-docker js-yaml
```

## Kubernetes

```bash
npm install -D @stacklance/envguard-k8s js-yaml
```

## Static analysis

```bash
npm install -D @stacklance/envguard-audit
```

## Requirements

- Node.js 18+
- TypeScript 5.0+ (recommended)
- Zod 3.0+
