import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DATABASE_CONNECTION } from "./database.config";
import {
  MongooseAdminConfigService,
  MongooseConfigService,
} from "./mongoose-config.service";

@Module({
  imports: [
    // Database `APP` connection factory provider
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
      connectionName: DATABASE_CONNECTION.APP,
    }),

    // Database `ADMIN` connection factory provider
    MongooseModule.forRootAsync({
      useClass: MongooseAdminConfigService,
      connectionName: DATABASE_CONNECTION.ADMIN,
    }),

    // NOTE: Yes, I know code is redundant but this code repetition is just to give you an idea about the concept
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}
