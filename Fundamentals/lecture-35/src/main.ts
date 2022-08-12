import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LoggerInterceptor } from "./interceptors/logger.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log("[main.ts]: LoggerInterceptor made Global");
  app.useGlobalInterceptors(new LoggerInterceptor());
  await app.listen(3000);
}
bootstrap();
