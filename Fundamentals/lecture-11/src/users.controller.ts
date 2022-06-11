import { Controller, Inject } from "@nestjs/common";
import {
  PersonStore,
  PERSON_STORE_INJECTION_TOKEN,
} from "./stores/person.store";
import { UsersStore } from "./stores/users.store";

@Controller("/users")
export class UsersController {
  constructor(
    @Inject("STORE") private store: UsersStore,
    @Inject(PERSON_STORE_INJECTION_TOKEN) private personStore: PersonStore
  ) {
    console.log("[UsersController]:", this.store.getStore());
    console.log("[UsersController]:", this.personStore.getStore());
  }
}
