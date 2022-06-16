import { Controller, Get } from "@nestjs/common";
import { UsersStore } from "./users.store";

// controller instance is created on every request, because it injects a `scope.REQUEST` based dependency
// controller eventually becomes request scope based
@Controller("users")
export class UsersController {
  constructor(private store: UsersStore) {
    console.log(`[UsersController]: init on HTTP request`);
  }

  @Get()
  findAllUsers() {
    return {
      message:
        "UsersStore instance created and destroyed after request completion",
    };
  }
}
