import { Controller } from "@nestjs/common";
import { PersonStore } from "./stores/person.store";
import { UsersStore } from "./stores/users.store";

@Controller("/users")
export class UsersController {
  constructor(
    private userStore1: UsersStore, // would inject `UserStore` instance 1

    private userStore2: PersonStore // would inject separate instance of  `UserStore` that is instance 2
  ) {
    console.log("Inside [UsersController]");

    console.log(this.userStore1.getStore());

    console.log(this.userStore2.getStore());
  }
}
