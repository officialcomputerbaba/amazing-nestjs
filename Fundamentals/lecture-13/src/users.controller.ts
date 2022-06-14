import { Controller, Inject } from "@nestjs/common";

@Controller("users")
export class UsersController {
  constructor(
    @Inject("DATABASE_CONNECTION") private dbConn: Record<string, any>
  ) {
    console.log("Inside [UsersController]");

    console.log("Database connection", this.dbConn);
  }
}
