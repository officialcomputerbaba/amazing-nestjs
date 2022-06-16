import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDTO } from "./dto";
import { UsersService } from "./users.service";

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findUsers();
  }

  @Get(":id")
  findUserById(@Param("id") id: number) {
    return this.usersService.findUser(+id);
  }

  @Put(":id")
  updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    return this.usersService.deleteUser(+id);
  }
}
