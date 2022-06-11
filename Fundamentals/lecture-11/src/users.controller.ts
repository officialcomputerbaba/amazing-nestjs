import { Controller } from "@nestjs/common";
import { UsersStore } from "./stores/users.store";

@Controller("/users")
export class UsersController {
  constructor(private store: UsersStore) {
    console.log("[UsersController]:", this.store.getStore());
  }
}
