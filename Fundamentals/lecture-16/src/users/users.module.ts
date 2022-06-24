import { Global, Module } from "@nestjs/common";
import { AccountsController } from "./controllers/accounts.controller";
import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";

@Global()
@Module({
  controllers: [UsersController, AccountsController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
