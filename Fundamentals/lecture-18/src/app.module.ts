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

    // create dynamic module with below options
    // `storeName` is not set therefore default name is used (DEFAULT_CACHE)
    CacheStoreModule.forRoot({
      storeType: StoreType.FILE,
      storeDir: join(__dirname, "stores"),
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
