import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./infra/mongoose/database.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
})
export class AppModule {}
