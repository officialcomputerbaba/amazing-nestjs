import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";

@Controller("jobs")
export class JobsController {
  @Post()
  create() {
    return { message: "Job created", log: "HTTP Request Logged to Console" };
  }

  @Get()
  findJobs() {
    return { message: "Jobs list", log: "HTTP Request Logged to Console" };
  }

  @Get(":id")
  findJob(@Param("id") id: string) {
    return {
      message: `Job ${id} details`,
      log: "HTTP Request Logged to Console",
    };
  }

  @Put(":id")
  updateJob(@Param("id") id: string) {
    return {
      message: `Job ${id} updated`,
      log: "HTTP Request Logged to Console",
    };
  }

  @Delete(":id")
  removeJob(@Param("id") id: string) {
    return {
      message: `Job ${id} removed`,
      log: "HTTP Request Logged to Console",
    };
  }
}
