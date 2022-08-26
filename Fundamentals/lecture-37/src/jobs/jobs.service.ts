import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JobsService {
  constructor(private readonly configService: ConfigService) {
    // app config
    const url = this.configService.get<string>("APP_URL");
    const isProd = this.configService.get<boolean>("isProd");
    const supportEmail = this.configService.get<string>("APP_EMAIL.SUPPORT");
    const isSSL = this.configService.get<boolean>("isSSL", false);

    console.log("\n[JobsService]: App config");
    console.log(url, isProd, supportEmail, isSSL);

    // database config
    const dbPort = this.configService.get("DATABASE.PORT");
    const dbUrl = this.configService.get<string>("DATABASE.url");
    const isLocalDb = this.configService.get<Function>("DATABASE.isLocal");

    console.log("\n[JobsService]: Database config");
    console.log(dbPort, dbUrl, isLocalDb?.());

    // cron config
    const cronConfig = this.configService.get("CRON");
    console.log("\n[JobsService]: Cron config");
    console.log(cronConfig);
  }
}
