import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AppExceptionFilter } from "./exceptions/app-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(`[main.ts]: Making AppExceptionFilter Global`);

  // marking `AppExceptionFilter` global but we need to pass the HttpAdapterHost explicitly because DI will not work
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AppExceptionFilter(httpAdapterHost));

  await app.listen(3000);
}
bootstrap();
