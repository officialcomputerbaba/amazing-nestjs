import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { DATABASE_CONNECTION } from "./database.config";

@Module({
  imports: [
    // Database `APP` connection factory provider
    MongooseModule.forRootAsync({
      useFactory(config: ConfigService) {
        const username = config.get("DATABASE_USER");
        const password = config.get("DATABASE_PASSWORD");
        const host = config.get("DATABASE_HOST");
        const port = config.get("DATABASE_PORT");
        const db = config.get("DATABASE_NAME");
        const isLocal = config.get("NODE_ENV") === "LOCAL";

        const uri = isLocal
          ? `mongodb://localhost:${port}/${db}}`
          : `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority`;

        return {
          uri,
        };
      },
      connectionName: DATABASE_CONNECTION.APP,
      inject: [ConfigService],
    }),

    // Database `ADMIN` connection factory provider
    MongooseModule.forRootAsync({
      useFactory(config: ConfigService) {
        const username = config.get("ADMIN_DATABASE_USER");
        const password = config.get("ADMIN_DATABASE_PASSWORD");
        const host = config.get("ADMIN_DATABASE_HOST");
        const port = config.get("ADMIN_DATABASE_PORT");
        const db = config.get("ADMIN_DATABASE_NAME");
        const isLocal = config.get("NODE_ENV") === "LOCAL";

        const uri = isLocal
          ? `mongodb://localhost:${port}/${db}}`
          : `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority`;

        return {
          uri,
        };
      },
      connectionName: DATABASE_CONNECTION.ADMIN,
      inject: [ConfigService],
    }),

    // NOTE: Yes, I know code is redundant but this code repetition is just to give you an idea about the concept
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}
