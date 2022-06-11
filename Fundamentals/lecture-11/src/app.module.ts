import { Module } from "@nestjs/common";
import { PersonStore } from "./stores/person.store";
import { UsersStore } from "./stores/users.store";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    UsersStore, // instance 1

    // if we use `useClass` instead of `useExisting` then two instance of `UsersStore` will be created
    // NOTE: in this case no cached or shared instance of `UsersStore` is used a new one is created that is instance 2
    { provide: PersonStore, useClass: UsersStore },
  ],
})
export class AppModule {}
