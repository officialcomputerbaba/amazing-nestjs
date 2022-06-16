import { Module } from "@nestjs/common";
import { StudentsController } from "./students.controller";
import { UsersController } from "./users.controller";
import { UsersStore } from "./users.store";

@Module({
  controllers: [UsersController, StudentsController],
  providers: [UsersStore],
})
export class AppModule {}
