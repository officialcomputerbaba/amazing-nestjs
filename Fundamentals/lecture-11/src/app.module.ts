import { Module } from "@nestjs/common";
import { PersonStore } from "./stores/person.store";
import { UsersStore } from "./stores/users.store";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    UsersStore,

    // token name = `PersonStore` & dependency = `UsersStore` existing instance (above statement)
    { provide: PersonStore, useExisting: UsersStore },
  ],
})
export class AppModule {}
