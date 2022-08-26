import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

interface JwtConfig {
  "JWT.SECRET": string;
  "JWT.EXPIRE_TIME": number;
}

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService<JwtConfig>) {
    // jwt config
    const secret = this.configService.get<string>("JWT.SECRET");
    const expireTime = this.configService.get("JWT.EXPIRE_TIME");

    console.log("\n[UsersService]: Jwt config with an Interface | Configuration Data Type");
    console.log(secret, expireTime);
  }
}
