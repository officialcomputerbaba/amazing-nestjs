import { Module } from "@nestjs/common";
import { MongooseModelsModule } from "../schemas/mongoose-models.module";
import { UsersService } from "./users.service";

@Module({
  imports: [
    MongooseModelsModule
  ],
  exports: [],
  providers: [UsersService],
})
export class UsersModule {}
