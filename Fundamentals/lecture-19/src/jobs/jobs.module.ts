import { Module } from "@nestjs/common";
import { JobsApplicationsController } from "./controllers/jobs-applications.controller";
import { JobsInterviewsController } from "./controllers/jobs-interviews.controller";
import { JobsController } from "./controllers/jobs.controller";

@Module({
  controllers: [
    JobsController,
    JobsApplicationsController,
    JobsInterviewsController,
  ],
})
export class JobsModule {}
