import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { JobsModule } from "./jobs/jobs.module";

console.log("[app.module.ts]: `APP_PIPE` with `useClass` ValidationPipe");
@Module({
  imports: [JobsModule],
  // NOTE: we can also use this technique to make the ValidationPipe global
  //   providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
