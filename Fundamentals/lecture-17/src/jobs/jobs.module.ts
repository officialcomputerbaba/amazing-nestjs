import { Module } from "@nestjs/common";
import { CacheStoreModule, StoreType } from "src/cache-store";
import { JobsService } from "./jobs.service";

@Module({
  imports: [
    // create a dynamic module with below option
    CacheStoreModule.register({
      storeName: "jobs",
      storeType: StoreType.FILE,
      storeDir: __dirname, // dist folder
    }),
  ],
  providers: [JobsService],
})
export class JobsModule {}
