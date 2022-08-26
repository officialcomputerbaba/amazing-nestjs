import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AdminService {
  constructor(private readonly configService: ConfigService) {
    // admin database config
    const url = this.configService.get<string>("ADMIN_DATABASE.URL");
    const dbName = this.configService.get("ADMIN_DATABASE.NAME");

    console.log("\n[AdminService]: Admin database config | Partial Registration");
    console.log(url, dbName);
  }
}
