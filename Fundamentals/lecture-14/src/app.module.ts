import { Module, Scope } from "@nestjs/common";
import { AuthController, JwtStrategy } from "./auth.controller";
import { StudentsController } from "./students.controller";
import { UsersController } from "./users.controller";
import { UsersStore } from "./users.store";

@Module({
  controllers: [UsersController, StudentsController, AuthController],
  providers: [
    { provide: "STORE", useClass: UsersStore, scope: Scope.TRANSIENT },

    {
      provide: JwtStrategy,
      useClass: JwtStrategy,
      scope: Scope.REQUEST,
    },
  ],
})
export class AppModule {}
