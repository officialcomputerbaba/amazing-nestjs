import { Body, Controller, Post } from "@nestjs/common";

@Controller("meetings")
export class MeetingsController {
  constructor() {}

  @Post()
  createMeeting(@Body() date: string) {
    return { success: true, date };
  }
}
