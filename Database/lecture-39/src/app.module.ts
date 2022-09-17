import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConfigService } from "./mongoose-config.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
        imports: [ConfigModule], // no need to import if ConfigModule is global true
        useClass: MongooseConfigService,
      }),
  ],
})
export class AppModule {}
