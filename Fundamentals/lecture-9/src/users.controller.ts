import { Controller, Get, Ip } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get("ip")
  findIp(@Ip() ip: string) {
    return { ip };
  }
}
