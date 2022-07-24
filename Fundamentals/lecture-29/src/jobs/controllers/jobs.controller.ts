import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from "@nestjs/common";

import { IdException } from "../../exceptions/id-exception";
import { JobsService } from "../services/jobs.service";
import { AppExceptionFilter } from "src/exceptions/app-exception.filter";

@Controller("jobs")
@UseFilters(AppExceptionFilter) // any kind of exception is handle by `AppExceptionFilter`
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get(":id")
  // both exceptions are handle by `AppExceptionFilter` defined on Controller
  findJobById(@Param("id", ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new IdException("Invalid id");
    }

    if (id > 10) {
      throw new BadRequestException("Invalid id");
    }

    return { success: true, id };
  }
}
