---
title: NestJS
---

# NestJS Integration

```bash
npm install @stacklance/envguard-nestjs @stacklance/envguard-core zod
```

## Module setup

```ts title="app.module.ts"
import { Module } from '@nestjs/common'
import { EnvGuardModule } from '@stacklance/envguard-nestjs'
import { z } from 'zod'

@Module({
  imports: [
    EnvGuardModule.forRoot({
      schema: {
        PORT: z.coerce.number().default(3000),
        DATABASE_URL: z.string().url(),
        JWT_SECRET: z.string().min(32),
      },
    }),
  ],
})
export class AppModule {}
```

## Inject in services

```ts
@Injectable()
export class DatabaseService {
  constructor(private env: EnvGuardService) {}

  connect() {
    return createPool(this.env.get('DATABASE_URL'))
  }
}
```

Validates at bootstrap. Throws `EnvGuardError` if validation fails.
