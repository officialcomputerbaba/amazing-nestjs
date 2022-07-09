import {
    Controller,
    ValidationPipe,
    Query,
    Get
  } from "@nestjs/common";
 
  import { Paginable } from "../dto/paginable.dto";
  import { JobsService } from "../services/jobs.service";
  
  @Controller("jobs")
  export class JobsController {
    constructor(private readonly jobsService: JobsService) {}
    
    @Get()
    findJobs(@Query(ValidationPipe) query: Paginable) {
      console.log(query);
      return { success: true };
    }
  }
  