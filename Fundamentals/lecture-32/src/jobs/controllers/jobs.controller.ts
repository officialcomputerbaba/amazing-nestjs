import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
} from "@nestjs/common";
import { Request } from "express";

@Controller("jobs")
export class JobsController {
  @Get("refs")
  findJobRefs(@Req() req: Request) {
    const userAgent = req["ua"]; // Express Request type does not have `ua` property

    console.log(`[JobsController] User Agent: ${userAgent}`);

    return { success: true, message: "Job refs list", userAgent };
  }

  @Post("refs")
  createJobRef(@Req() req: Request) {
    const userAgent = req["ua"];

    return { success: true, message: "Job ref created", userAgent };
  }

  @Put(":jobId")
  updateJobId(
    @Param("jobId", ParseIntPipe) jobId: number,
    @Req() req: Request
  ) {
    const userAgent = req["ua"];

    return { success: true, jobId, message: "Job updated", userAgent };
  }
}
