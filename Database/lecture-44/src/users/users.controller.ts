import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Query
} from "@nestjs/common";
import { AccountLoginDTO, CreateUserDTO, UpdateUserDTO } from "./dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDTO) {
    return this.usersService.create(createUserDto);
  }

  @Post("login")
  login(@Body() accountLoginDto: AccountLoginDTO) {
    return this.usersService.login(accountLoginDto);
  }

  @Get("search")
  findByName(@Query("name") name: string) {
    return this.usersService.search(name);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
