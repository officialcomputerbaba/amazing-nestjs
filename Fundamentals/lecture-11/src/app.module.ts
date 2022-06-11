import { Module } from "@nestjs/common";
import {
  PersonStore,
  PERSON_STORE_INJECTION_TOKEN,
} from "./stores/person.store";
import { UsersStore } from "./stores/users.store";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    { provide: "STORE", useClass: UsersStore },

    { provide: PERSON_STORE_INJECTION_TOKEN, useClass: PersonStore },
  ],
})
export class AppModule {}
