import { Controller, Inject } from "@nestjs/common";
import { EnvConfig } from "./config";

@Controller("/users")
export class UsersController {
  constructor(
    @Inject("DATABASE_NAME") private dbname: string,

    @Inject("API_VERSION") private apiV: number,

    @Inject("MAIL") private emails: string[],

    @Inject("CRON_CONFIG") private cron: Record<string, any>,

    private config: EnvConfig // no need to use @Inject, because injection token is a class `EnvConfig`
  ) {
    console.log("Inside [UsersController]:");

    console.log("String value (Database name): ", this.dbname);

    console.log("Number value (Api version): ", this.apiV);

    console.log("Array value (Mails): ", this.emails);

    console.log("Object value (Cron config): ", this.cron);

    console.log(
      "Object value with Class Injection token (EnvConfig): ",
      this.config
    );
  }
}
