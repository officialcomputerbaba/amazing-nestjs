import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { OfficeController } from "./controllers/office.controller";
import { JobsService } from "./services/jobs.service";

import { JobsApplicationsModule } from "./jobs-applications/jobs-applications.module";

@Module({
  // NOTE: `JobsApplicationsService` can be injected wherever `JobsModule` is imported
  // because `JobsModule` exports the `JobsApplicationsModule`
  imports: [JobsApplicationsModule],
  controllers: [JobsController, OfficeController],
  providers: [JobsService],
  exports: [JobsService, JobsApplicationsModule],
})
export class JobsModule {}
