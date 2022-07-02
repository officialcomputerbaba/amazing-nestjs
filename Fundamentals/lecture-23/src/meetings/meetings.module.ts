import { Module } from "@nestjs/common";
import { ParseDateOptions } from "../pipes/parse-date.pipe";
import { MeetingsController } from "./meetings.controller";

@Module({
  controllers: [MeetingsController],
  providers: [
    {
      provide: ParseDateOptions,
      useValue: {
        dataKey: "dateTime",
        fromTimestamp: false,
      },
    },
  ],
})
export class MeetingsModule {}
