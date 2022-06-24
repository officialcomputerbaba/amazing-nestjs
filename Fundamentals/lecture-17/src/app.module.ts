import { Module } from "@nestjs/common";
import { CacheStoreModule, StoreType } from "./cache-store";
import { UsersModule } from "./users/users.module";
import { JobsModule } from "./jobs/jobs.module";
import { AppService } from "./app.service";

@Module({
  imports: [
    UsersModule,
    JobsModule,

    // create a dynamic module with below options
    CacheStoreModule.register({
      storeName: "YT-APP",
      storeType: StoreType.FILE,
      storeDir: __dirname, // dist folder
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
