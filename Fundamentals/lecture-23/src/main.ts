import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ParseDatePipe } from "./pipes/parse-date.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // NOTE: global pipe
  // but we cannot use `Dependency Injection`
  // app.useGlobalPipes(new ParseDatePipe());
  await app.listen(3000);
}
bootstrap();
