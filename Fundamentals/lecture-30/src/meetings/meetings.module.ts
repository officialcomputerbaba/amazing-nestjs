import { Module, OnModuleInit } from "@nestjs/common";
import { MeetingsController } from "./meetings.controller";
import { MeetingsService } from "./meetings.service";

@Module({
  controllers: [MeetingsController],
  providers: [MeetingsService],
})
export class MeetingsModule implements OnModuleInit {
  onModuleInit() {
    console.log("Meetings module init");
  }
}
