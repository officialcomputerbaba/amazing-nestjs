import { Controller, Get } from "@nestjs/common";

// jobs/job-applications
@Controller("/job-applications")
export class JobsApplicationsController {
  @Get()
  requestHandler() {
    return "Job applications route";
  }
}
