import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AppExceptionFilter } from "./exceptions/app-exception.filter";

import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [JobsModule],
  providers: [
    // marking `AppExceptionFilter` global
    // we can also declare it in `main.ts` but then DI (Dependency Injection) will not work
    // and we need to pass the HttpAdapterHost explicitly in the `main.ts`
    { provide: APP_FILTER, useClass: AppExceptionFilter },
  ],
})
export class AppModule {}
