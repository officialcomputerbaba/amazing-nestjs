import { Module } from "@nestjs/common";
import { JobsController } from "./jobs.controller";

@Module({
  controllers: [JobsController],
  providers: [],
})
export class JobsModule {}
