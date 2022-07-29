import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // enable shutdown hooks (to listen for termination signal like `ctrl-z`)
    app.enableShutdownHooks();
}
bootstrap();
