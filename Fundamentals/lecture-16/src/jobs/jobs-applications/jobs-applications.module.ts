import { Module } from "@nestjs/common";
import { JobsApplicationsService } from "./jobs-applications.service";

@Module({
  providers: [JobsApplicationsService],
  exports: [JobsApplicationsService],
})
export class JobsApplicationsModule {}
