import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/services/users.service";

@Injectable()
export class JobsService {
  constructor(private usersService: UsersService) {
    console.log("[JobsService]: Users service injected");
  }
}
