import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {
    const nodeEnv = this.configService.get<string>("NODE_ENV");
    const devVersion = this.configService.get<string>("DEV_VERSION"); // from .dev.env file
    const protocol = this.configService.get<string>("PROTOCOL"); // from .dev.env file

    console.log("\n[UsersService]: Node env config");
    console.log(nodeEnv);

    console.log("\n[UsersService]: .dev.env file");
    console.log(devVersion, protocol);
  }
}
