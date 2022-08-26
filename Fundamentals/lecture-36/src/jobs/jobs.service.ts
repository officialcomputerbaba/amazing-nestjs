import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JobsService {
  constructor(private readonly configService: ConfigService) {
    // app config
    const url = this.configService.get<string>("APP_URL");
    const isProd = this.configService.get<boolean>("PROD");
    const supportEmail = this.configService.get<string>("SUPPORT_EMAIL"); // expanded variable
    const isSSL = this.configService.get<boolean>("isSSL", false);

    console.log("\n[JobsService]: App config");
    console.log(url, isProd, supportEmail, isSSL);

    // database config
    const dbPort = this.configService.get("DATABASE_PORT");
    const dbUrl = this.configService.get<string>("DATABASE_HOST");

    console.log("\n[JobsService]: Database config");
    console.log(dbPort, dbUrl);
  }
}
