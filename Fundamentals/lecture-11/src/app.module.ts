import { Module } from "@nestjs/common";
import { UsersStore } from "./stores/users.store";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    // NOTE: we are not providing the `UsersStore` dependency
    // UsersStore,
  ],
})
export class AppModule {}
