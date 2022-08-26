import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {
    // jwt config
    const secret = this.configService.get<string>("JWT.SECRET");
    const expireTime = this.configService.get("JWT.EXPIRE_TIME");

    console.log("\n[UsersService]: Jwt config");
    console.log(secret, expireTime);
  }
}
