import { Body, Controller, Param, Post, ParseIntPipe } from "@nestjs/common";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post(":id/interview")
  scheduleJobInterviewWithDateISOString(
    @Param("id", ParseIntPipe) id: number,
    @Body() date: Date
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }
}
