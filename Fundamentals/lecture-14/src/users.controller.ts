import { Controller, Inject } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller("users")
export class UsersController {
  constructor(@Inject("STORE") private store: UsersStore) {
    console.log(`[UsersController]:`, this.store.getStore());
  }
}
