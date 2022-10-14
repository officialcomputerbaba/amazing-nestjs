import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { CreateJobDTO, UpdateJobDTO } from "./dto";
import { JobsService } from "./jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDTO) {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobsService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateJobDto: UpdateJobDTO) {
    return this.jobsService.update(id, updateJobDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobsService.remove(id);
  }
}
