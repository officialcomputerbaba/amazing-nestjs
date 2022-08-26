import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {
    const nodeEnv = this.configService.get<string>("NODE_ENV");

    console.log("\n[UsersService]: Node env config");
    console.log(nodeEnv);
  }
}
