import { Body, Controller, Param, Post, ParseIntPipe } from "@nestjs/common";
import { JobsService } from "../services/jobs.service";
import { ParseDatePipe } from "../../pipes/parse-date.pipe";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // Date ISO string
  @Post(":id/interview-iso")
  scheduleJobInterviewWithDateISOString(
    @Param("id", ParseIntPipe) id: number,
    @Body("timestamp", ParseDatePipe) date: Date
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }

  // Date UTC string
  @Post(":id/interview-utc")
  scheduleJobInterviewWithUTCString(
    @Param("id", ParseIntPipe) id: number,
    @Body("timestamp", ParseDatePipe) date: string
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }

  // Date milliseconds (number)
  @Post(":id/interview-milliseconds")
  scheduleJobInterviewWithMilliseconds(
    @Param("id", ParseIntPipe) id: number,
    @Body("timestamp", ParseDatePipe) date: number
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }

  // passing options to pipe
  // NOTE: pass the date in `mm/dd/yyyy` format in the request body instead of `timestamp`, ex: { timestamp: "12/12/2023" }
  @Post(":id/interview-from-date-format")
  scheduleJobInterviewFromDateFormat(
    @Param("id", ParseIntPipe) id: number,
    @Body("timestamp", new ParseDatePipe({ fromTimestamp: false })) date: string
  ) {
    return this.jobsService.scheduleJobInterview(id, date);
  }
}
