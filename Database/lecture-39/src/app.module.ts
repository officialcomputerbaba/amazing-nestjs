import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // NOTE: set the remote instance username, password, and host parameter
    MongooseModule.forRoot(
      `mongodb+srv://${username}:${password}@${host}/nest_app_db?retryWrites=true&w=majority`
    ),
  ],
})
export class AppModule {}
