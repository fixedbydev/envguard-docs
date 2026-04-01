---
title: "@stacklance/envguard-nestjs"
---

# @stacklance/envguard-nestjs

```bash
npm install @stacklance/envguard-nestjs @stacklance/envguard-core zod
```

## forRoot

```ts
EnvGuardModule.forRoot({
  schema: { PORT: z.coerce.number().default(3000), DATABASE_URL: z.string().url() },
})
```

## forRootAsync

```ts
EnvGuardModule.forRootAsync({
  useFactory: () => ({ schema: { PORT: z.coerce.number() } }),
})
```

## EnvGuardService

```ts
@Injectable()
export class AppService {
  constructor(private env: EnvGuardService) {}
  getPort() { return this.env.get('PORT') }
}
```

Global module — available everywhere after import.
