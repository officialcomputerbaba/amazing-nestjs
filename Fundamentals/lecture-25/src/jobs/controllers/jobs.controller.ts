import {
    Body,
    Controller,
    Post,
    Query,
    Get,
  } from "@nestjs/common";
  import { CreateJobDTO } from "../dto/create-job.dto";
  import { Paginable } from "../dto/paginable.dto";
  import { JobsService } from "../services/jobs.service";
  
  @Controller("jobs")
  export class JobsController {
    constructor(private readonly jobsService: JobsService) {}
  
    @Post()
    createJob(@Body() createJobDto: CreateJobDTO) {
      return this.jobsService.createJob(createJobDto);
    }

    @Get()
    findJobs(@Query() query: Paginable) {
      console.log(query);
      return { success: true };
    }
   
  }
  