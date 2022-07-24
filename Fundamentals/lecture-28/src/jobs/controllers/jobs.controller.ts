import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from "@nestjs/common";
import { HttpExceptionFilter } from "../../exceptions/http-exception.filter";
import { IdExceptionFilter } from "../../exceptions/id-exception.filter";
import { IdException } from "../../exceptions/id-exception";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
// HTTP-based exceptions handler
// we can even declare it on `findJobById` like this @UseFilters(HttpExceptionFilter, IdExceptionFilter)
@UseFilters(HttpExceptionFilter)
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get(":id")
  @UseFilters(IdExceptionFilter) // id exception handler
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
