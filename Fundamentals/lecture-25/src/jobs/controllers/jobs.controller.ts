import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  ParseArrayPipe
} from "@nestjs/common";
import { CreateJobDTO } from "../dto/create-job.dto";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post("create-many")
  createMultipleJobs(
    @Body(new ParseArrayPipe({ items: CreateJobDTO }), ValidationPipe)
    createJobDto: CreateJobDTO[]
  ) {
    return this.jobsService.createJob(createJobDto);
  }
}
