import { Controller, Get } from "@nestjs/common";

// jobs/
@Controller("/")
export class JobsController {
  @Get()
  requestHandler() {
    return "Jobs route";
  }
}
