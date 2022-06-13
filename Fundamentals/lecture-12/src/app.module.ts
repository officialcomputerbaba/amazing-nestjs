import { Module } from "@nestjs/common";
import { EnvConfig } from "./config";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    // `string` value provider
    {
      provide: "DATABASE_NAME",
      useValue: "moon_knight",
    },

    // `number` value provider
    {
      provide: "API_VERSION",
      useValue: 2,
    },

    // `array` value provider
    {
      provide: "MAIL",
      useValue: ["admin@domain.com", "replay@domain.com"],
    },

    // `object` value provider
    {
      provide: "CRON_CONFIG",
      useValue: {
        max: 11,
        runOn: "start",
      },
    },

    // `object` value provider

    // NOTE: injection token can be `class`, `string`, or `symbol`
    // here we are using class as token
    {
      provide: EnvConfig,
      useValue: {
        env: "DEV",
        node: "17",
      },
    },
  ],
})
export class AppModule {}
