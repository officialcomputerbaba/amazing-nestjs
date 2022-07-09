import {
    Body,
    Controller,
    ValidationPipe,
    Query,
    Get,
    Param,
    Req,
    Put,
  } from "@nestjs/common";
  import { CreateJobDTO } from "../dto/create-job.dto";
  import { Paginable } from "../dto/paginable.dto";
  import { Request } from "express";
  import { JobsService } from "../services/jobs.service";
  
  @Controller("jobs")
  export class JobsController {
    constructor(private readonly jobsService: JobsService) {}
  
    // `ValidationPipe` option to transform the value into proper data type
    // `ValidationPipe` options
    // 1. transform
    // 2. dismissDefaultMessages,
    // 3. disableErrorMessages,
    // 4. whitelist,
    // 5. skipMissingProperties,
    // 6. stopAtFirstError
  
    // transform
    @Get("search/:id")
    findJob(@Param("id", new ValidationPipe({ transform: true })) jobId: number) {
      console.log(typeof jobId); // number (transformed from string type)
      return { success: true, jobId };
    }
  
    // dismissDefaultMessages
    @Put(":id")
    updateJob(
      @Body(new ValidationPipe({ dismissDefaultMessages: true }))
      updateJobDto: CreateJobDTO
    ) {
      return this.jobsService.createJob(updateJobDto);
    }
  
    // disableErrorMessages
    @Get("with-tags")
    findJobByTags(
      @Query(new ValidationPipe({ disableErrorMessages: true }))
      query: Paginable
    ) {
      return { success: true, query };
    }
  
    // whitelist
    @Get("with-names")
    findJobByNames(
      @Req() req: Request,
      @Query(new ValidationPipe({ whitelist: true }))
      query: Paginable
    ) {
      const queryFields = Object.keys(req.query);
      const paginableFields = Object.keys(query);
  
      const whitelist = queryFields.filter(
        (field) => !paginableFields.includes(field)
      );
  
      return { success: true, query, whitelist };
    }
  
    // skipMissingProperties
    @Get("with-city")
    findJobByCity(
      @Query(new ValidationPipe({ skipMissingProperties: true }))
      query: Paginable
    ) {
      const queryFields = Object.keys(query);
      const paginableFields = ["limit", "page"];
  
      const missingProps = paginableFields.filter(
        (field) => !queryFields.includes(field)
      );
  
      return { success: true, query, missingProps };
    }
  
    // stopAtFirstError
    @Get("with-country")
    findJobByCountry(
      @Query(new ValidationPipe({ stopAtFirstError: true }))
      query: Paginable
    ) {
      return { success: true, query };
    }
  }
  