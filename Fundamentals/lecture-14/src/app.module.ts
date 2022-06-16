import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersStore } from "./users.store";

@Module({
  controllers: [UsersController],
  providers: [UsersStore],
})
export class AppModule {}
