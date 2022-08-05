import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("interviews")
export class InterviewsController {
  @Get()
  findInterviews(@Req() req: Request) {
    const userAgent = req["ua"];

    return { success: true, message: "Interview list", userAgent };
  }

  @Post("schedule")
  scheduleInterview(@Req() req: Request) {
    const userAgent = req["ua"];

    return { success: true, message: "Inteview scheduled", userAgent };
  }
}
