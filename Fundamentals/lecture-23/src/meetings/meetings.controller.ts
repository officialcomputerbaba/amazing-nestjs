import { Body, Controller, Post } from "@nestjs/common";

import { ParseDatePipe } from "../pipes/parse-date.pipe";

@Controller("meetings")
export class MeetingsController {
  constructor() {}

  @Post()
  createMeeting(@Body(ParseDatePipe) date: string) {
    return { success: true, date };
  }
}
