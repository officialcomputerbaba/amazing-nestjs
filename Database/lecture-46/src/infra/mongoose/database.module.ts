import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DATABASE_CONNECTION } from "./database.config";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/nest_app_db", {
      connectionName: DATABASE_CONNECTION.APP,
    }),

    MongooseModule.forRoot("mongodb://localhost:27017/nest_admin_db", {
      connectionName: DATABASE_CONNECTION.ADMIN,
    }),
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}
