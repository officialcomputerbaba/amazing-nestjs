import { Module } from "@nestjs/common";
import { CacheStoreModule, StoreType } from "./cache-store";
import { join } from "path";
import { UsersModule } from "./users/users.module";
import { JobsModule } from "./jobs/jobs.module";
import { AppService } from "./app.service";

@Module({
  imports: [
    UsersModule,
    JobsModule,

    // NOTE: create dynamic module with below options asynchronously
    // `storeName` is not set therefore default name is used (DEFAULT_CACHE)
    CacheStoreModule.forRootAsync({
      storeType: StoreType.FILE,
      storeDir: join(__dirname, "stores"),
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
