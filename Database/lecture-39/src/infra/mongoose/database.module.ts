import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConfigService } from "./mongoose-config.service";

@Module({
  imports: [
    // @example 1: Local or Remote Instance URL
    // MongooseModule.forRoot("mongodb://localhost:27017/nest_app_db"),

    // -------------------------------------------

    // @example 2 : useFactory
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule], // no need to import if `ConfigModule` is global true
    //   useFactory: (config: ConfigService) => { // this function can be async as well
    //     const username = config.get("DATABASE_USER");
    //     const password = config.get("DATABASE_PASSWORD");
    //     const host = config.get("DATABASE_HOST");
    //     const port = config.get("DATABASE_PORT");
    //     const db = config.get("DATABASE_NAME");
    //     const isLocal = config.get("NODE_ENV") === "LOCAL";
    
    //     const uri = isLocal
    //       ? `mongodb://localhost:${port}/${db}`
    //       : `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority`;
    
    //     return {
    //       uri,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),

    // -------------------------------------------

    // @example 3 : Custom Mongoose Config Service
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // no need to import if `ConfigModule` is global true
      useClass: MongooseConfigService,
    }),
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}
