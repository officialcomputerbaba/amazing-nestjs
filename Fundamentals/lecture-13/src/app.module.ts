import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { EnvConfig, IS_DEV_MODE } from "./config/env.config";
import { AzureStore, AwsStore, RedisStore } from "./config/stores";

@Module({
  controllers: [UsersController],
  providers: [
    EnvConfig,

    {
      provide: "MEMORY_STORE",
      useFactory() {
        const store = IS_DEV_MODE ? new Map() : new RedisStore();

        return store;
      },
    },

    {
      provide: "CLOUD_STORE",
      useFactory: (env: EnvConfig) => {
        return env.envType == "DEV" ? new AzureStore() : new AwsStore();
      },
      inject: [EnvConfig],
    },

    {
      provide: "EVENTS_STORE",
      useFactory: (env: EnvConfig, limit: number = 4) => {
        const eventBus$ =
          env.envType === "DEV"
            ? new ReplaySubject(limit)
            : new BehaviorSubject(null);

        return eventBus$;
      },
      // `EVENTS_LIMIT` is commented out therefore default value `4` is used
      inject: [EnvConfig, { token: "EVENTS_LIMIT", optional: true }],
    },

    // NOTE:  'EVENTS_LIMIT` default value will be used by the `EVENTS_STORE` factory
    // {
    //   provide: "EVENTS_LIMIT",
    //   useValue: 2,
    // },
  ],
})
export class AppModule {}
