import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { StudentsController } from "./controllers/students.controller";

@Module({
  controllers: [UsersController, StudentsController],
})
export class AdminUsersModule {}
