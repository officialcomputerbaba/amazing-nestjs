import { Module } from "@nestjs/common";
import { ParseDateOptions } from "src/pipes/parse-date.pipe";
import { JobsController } from "./controllers/jobs.controller";
import { JobsService } from "./services/jobs.service";

@Module({
  controllers: [JobsController],
  providers: [
    JobsService,
    {
      provide: ParseDateOptions,
      useValue: {
        fromTimestamp: true,
        errorMsg: "Date transformation failed",
      },
    },
  ],
})
export class JobsModule {}
