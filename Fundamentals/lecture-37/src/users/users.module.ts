import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";

@Module({
  imports: [],
  providers: [UsersService],
})
export class UsersModule {}
