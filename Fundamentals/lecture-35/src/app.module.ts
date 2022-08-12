import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggerInterceptor } from "./interceptors/logger.interceptor";
import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [JobsModule],
  providers: [
    // NOTE: `LoggerInterceptor` made global inside `main.ts`
    // { provide: APP_INTERCEPTOR, useClass: LoggerInterceptor }
],
})
export class AppModule {}
