import { Controller, Inject } from "@nestjs/common";
import { DatabaseStore } from "./stores/database.store";
import { PersonStore } from "./stores/person.store";
import { UsersStore } from "./stores/users.store";

@Controller("/users")
export class UsersController {
  constructor(
    @Inject("STORE") private dbStore: DatabaseStore, // would inject `DatabaseStore`

    private userStore: UsersStore, // would inject `PersonStore`

    private personStore: PersonStore // would inject `GlobalStore`
  ) {
    console.log("Inside [UsersController]");

    console.log("Token `STORE` & Injected :", this.dbStore.getStore());

    console.log("Token: `UsersStore` & Injected :", this.userStore.getStore());

    console.log(
      "Token: `PersonStore` & Injected :",
      this.personStore.getStore()
    );
  }
}
