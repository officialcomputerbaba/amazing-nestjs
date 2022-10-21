import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import mongoose, { Connection } from "mongoose";
import { DATABASE_CONNECTION } from "./database.constants";

const DATABASE_PROVIDER = {
  provide: DATABASE_CONNECTION,
  async useFactory(config: ConfigService): Promise<Connection> {
    const db = config.get("DATABASE_NAME");
    const port = config.get("DATABASE_PORT");

    mongoose.connection.on("connected", () => {
      console.log("DATATBASE CONNECTED");
    });

    mongoose.connection.on("connecting", () => {
      console.log("DATATBASE CONNECTING");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("DATATBASE DISCONNECTED");
    });

    const mongooseConnection = await mongoose.connect(
      `mongodb://localhost:${port}/${db}`
    );

    return mongooseConnection.connection;
  },
  inject: [ConfigService],
};

@Global()
@Module({
  providers: [DATABASE_PROVIDER],
  exports: [MongooseModule, DATABASE_PROVIDER],
})
export class DatabaseModule {}
