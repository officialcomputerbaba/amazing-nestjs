import { Controller, Get } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller("users")
export class UsersController {
  constructor(private store: UsersStore) {
    console.log("Inside [UsersController]");
    console.log(this.store.getStore());
  }
}
