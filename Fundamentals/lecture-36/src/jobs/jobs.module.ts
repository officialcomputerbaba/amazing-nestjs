import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";

@Module({
  imports: [],
  providers: [JobsService],
})
export class JobsModule {}
