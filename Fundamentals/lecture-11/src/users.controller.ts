import { Controller } from "@nestjs/common";
import { PersonStore } from "./stores/person.store";
import { UsersStore } from "./stores/users.store";

@Controller("/users")
export class UsersController {
  constructor(
    private userStore: UsersStore, // would inject `UserStore`

    private existingUserStore: PersonStore // would inject existing instance of  `UserStore`
  ) {
    console.log("Inside [UsersController]");

    console.log(this.userStore.getStore());

    console.log(this.existingUserStore.getStore());
  }
}
