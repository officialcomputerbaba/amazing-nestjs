import { Module } from "@nestjs/common";
import { UsersController, StudioController } from "./users.controller";

@Module({
  controllers: [UsersController, StudioController],
})
export class AppModule {}
