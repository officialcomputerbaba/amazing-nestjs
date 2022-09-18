import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";

@Module({
  imports: [],
  exports: [],
  providers: [UsersService],
})
export class UsersModule {}
