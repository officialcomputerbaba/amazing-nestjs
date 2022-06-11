import { Module } from "@nestjs/common";
import { UsersStore } from "./stores/users.store";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    // Same Name provider - where Injection token, and Dependency name is same
    UsersStore,

    // NOTE: above statement is the shorthand syntax of below line
    // { provide: UsersStore, useClass: UsersStore }
  ],
})
export class AppModule {}
