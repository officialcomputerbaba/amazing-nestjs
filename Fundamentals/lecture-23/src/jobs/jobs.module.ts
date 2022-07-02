import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ParseDateOptions, ParseDatePipe } from "../pipes/parse-date.pipe";
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
    // NOTE: marking it global from this `JobsModule`
    // it can be used anywhere within our application
    // but options used in this pipe is injected by `Nestjs DI` from this `JobsModule`
    // other module cannot inject their options
    // only one instance of this pipe is shared everywhere
    {
      provide: APP_PIPE,
      useClass: ParseDatePipe,
    },
  ],
})
export class JobsModule {}
