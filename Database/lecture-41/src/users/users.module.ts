import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, USER_MODEL } from "../schemas/user";
import { UsersService } from "./users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema }]),
  ],
  exports: [MongooseModule],
  providers: [UsersService],
})
export class UsersModule {}
