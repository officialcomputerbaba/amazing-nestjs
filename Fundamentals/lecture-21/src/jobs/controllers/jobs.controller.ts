import {
  Body,
  Controller,
  ParseUUIDPipe,
  Get,
  Param,
  ParseEnumPipe,
  ParseArrayPipe,
  ParseIntPipe,
  Put,
  Query,
  HttpStatus,
} from "@nestjs/common";
import { JobsService } from "../services/jobs.service";
import { JobType } from "../constants/jobs.constants";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // ParseUUIDPipe
  @Get("ref/:refId")
  findJobByRefId(@Param("refId", ParseUUIDPipe) id: string) {
    return this.jobsService.findByRefId(id);
  }

  // ParseUUIDPipe - UUID version 3
  @Get("ref-v3/:refId")
  findJobByUUID3RefId(
    @Param("refId", new ParseUUIDPipe({ version: "3" })) id: string
  ) {
    return this.jobsService.findByRefId(id);
  }

  // ParseUUIDPipe - UUID version 4
  @Get("ref-v4/:refId")
  findJobByUUID4RefId(
    @Param(
      "refId",
      new ParseUUIDPipe({
        version: "4",
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      })
    )
    id: string
  ) {
    return this.jobsService.findByRefId(id);
  }

  // ParseEnumPipe
  @Put("type/:id")
  toggleJobType(
    @Param("id", ParseIntPipe) id: number,
    @Body("type", new ParseEnumPipe(JobType)) type: JobType
  ) {
    return this.jobsService.toggleJobType(id, type);
  }

  // ParseArrayPipe
  // NOTE: we need to install the class-validator & class-transformer packages to use the `ParseArrayPipe`
  @Get("search")
  findJobsByIds(
    @Query("id", new ParseArrayPipe({ items: Number, separator: "," }))
    ids: number[]
  ) {
    return this.jobsService.findByIds(ids);
  }
}
