import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Put,
  Query,
  HttpStatus,
  UsePipes,
} from "@nestjs/common";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // ParseIntPipe
  @Get(":id")
  findJobById(@Param("id", ParseIntPipe) id: number) {
    return this.jobsService.findById(id);
  }

  // Pipe option for custom error message status code
  @Get("details/:id")
  findJobDetails(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
    )
    id: number
  ) {
    return this.jobsService.findById(id);
  }

  // `@UsePipes` decorator to apply the pipe on all arguments (id, inc) of this method
  @Put("inc-salary/:id")
  @UsePipes(ParseIntPipe)
  incSalaryByAmount(@Param("id") id: number, @Query("increment") inc: number) {
    return this.jobsService.incSalaryByJobId(id, inc);
  }

  // ParseFloatPipe
  @Put("salary/:id")
  incSalary(
    @Param("id", ParseIntPipe) id: number,
    @Query("increment", ParseFloatPipe) inc: number
  ) {
    return this.jobsService.incSalaryByJobId(id, inc);
  }

  // ParseBoolPipe
  @Put("active/:id")
  toggleJobActiveStatus(
    @Param("id", ParseIntPipe) id: number,
    @Body("active", ParseBoolPipe) active: boolean
  ) {
    return this.jobsService.toggleJobActiveStatus(id, active);
  }

  // DefaultValuePipe
  @Put("exp/:id")
  setUpdateJobExp(
    @Param("id", ParseIntPipe) id: number,
    @Query("exp", new DefaultValuePipe(1), ParseIntPipe) exp: number
  ) {
    return this.jobsService.setJobExp(id, exp);
  }
}
