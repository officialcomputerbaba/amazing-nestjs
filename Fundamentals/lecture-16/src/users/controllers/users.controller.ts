import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDTO } from "../dto";
import { UsersService } from "../services/users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    this.usersService.addUser(createUserDto);
    return { message: "USER ADDED" };
  }

  @Get()
  findAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(":id")
  findUser(@Param("id") id: number) {
    return this.usersService.getUser(+id);
  }

  @Put(":id")
  updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO) {
    this.usersService.updateUser(+id, updateUserDto);
    return { message: "USER UPDATED" };
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    this.usersService.deleteUser(+id);
    return { message: "USER DELETED" };
  }
}
