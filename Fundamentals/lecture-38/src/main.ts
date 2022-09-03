import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { readFileSync } from "fs";
import { resolve } from "path";
import { createServer as createHttpServer } from "http";
import { createServer as createHttpsServer } from "https";
import * as express from "express";

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  await app.init();

  createHttpServer(server).listen(3000);
  
  createHttpsServer(
    {
      key: readFileSync(resolve(__dirname, "../cert/private.key")),
      cert: readFileSync(resolve(__dirname, "../cert/public.cert")),
    },
    server
  ).listen(443);
}
bootstrap();
