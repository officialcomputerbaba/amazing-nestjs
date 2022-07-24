import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from "@nestjs/common";

import { IdException } from "../../exceptions/id-exception";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get(":id")
  // both exceptions are handle by `AppExceptionFilter` marked global in `app.module.ts`
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
