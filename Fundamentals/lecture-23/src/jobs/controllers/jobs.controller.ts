import { Body, Controller, Param, Post, ParseIntPipe } from "@nestjs/common";
import { JobsService } from "../services/jobs.service";
import { ParseDatePipe } from "../../pipes/parse-date.pipe";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post(":id/interview")
  scheduleJobInterviewWithDateISOString(
    @Param("id", ParseIntPipe) id: number,
    @Body("timestamp", ParseDatePipe) date: Date
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }

  @Post(":id/interview-utc")
  scheduleJobInterviewWithUTCString(
    @Param("id", ParseIntPipe) id: number,
    @Body(ParseDatePipe) date: string
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }
}
