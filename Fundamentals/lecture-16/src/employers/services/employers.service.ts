import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/services/users.service";

@Injectable()
export class EmployersService {
  constructor(private usersService: UsersService) {
    console.log("[EmployersService]: Users service injected");
  }
}
