import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";

@Module({
  imports: [],
  exports: [],
  providers: [JobsService],
})
export class JobsModule {}
