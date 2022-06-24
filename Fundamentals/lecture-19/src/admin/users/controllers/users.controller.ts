import { Controller, Get } from "@nestjs/common";

// admin/users/
@Controller("/")
export class UsersController {
  @Get()
  requestHandler() {
    return "Admin users route";
  }
}
