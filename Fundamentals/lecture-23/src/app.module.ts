import { Module } from "@nestjs/common";
import { JobsModule } from "./jobs/jobs.module";
import { MeetingsModule } from "./meetings/meetings.module";

@Module({
  imports: [JobsModule, MeetingsModule],
})
export class AppModule {}
