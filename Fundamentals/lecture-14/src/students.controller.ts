import { Controller } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller("students")
export class StudentsController {
  constructor(private store: UsersStore) {
    console.log(`[StudentsController]:`, this.store.getStore());
  }
}
