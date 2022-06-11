import { Controller, Optional } from "@nestjs/common";
import { UsersStore } from "./stores/users.store";

@Controller("/users")
export class UsersController {
  constructor(
    // NOTE: because we are not providing the `UsersStore` dependency
    // if we don't use Optional then cannot resovle dependencies/provider error is thrown by NestJS
    @Optional()
    private userStore: UsersStore
  ) {
    console.log("Inside [UsersController]");

    console.log("No instance of UsersStore", this.userStore);
  }
}
