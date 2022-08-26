import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersService } from "./users.service";

@Module({
  imports: [ConfigModule],
  providers: [UsersService],
})
export class UsersModule {}
