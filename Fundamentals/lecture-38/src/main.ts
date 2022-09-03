import { NestFactory } from "@nestjs/core";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { readFileSync } from "fs";
import { resolve } from "path";

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync(resolve(__dirname, "../cert/private.key")),
    cert: readFileSync(resolve(__dirname, "../cert/public.cert")),
  };

  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter({
      https: httpsOptions,
    })
  );

  await app.listen(443);
}
bootstrap();
