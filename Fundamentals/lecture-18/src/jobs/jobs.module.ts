import { Module } from "@nestjs/common";
import { CacheStoreModule } from "src/cache-store";
import { JobsService } from "./jobs.service";

@Module({
  imports: [CacheStoreModule.forFeature("jobs")],
  providers: [JobsService],
})
export class JobsModule {}
