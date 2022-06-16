import { Controller, Inject } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller("students")
export class StudentsController {
  constructor(@Inject("STORE") private store: UsersStore) {
    console.log(`[StudentsController]:`, this.store.getStore());
  }
}
