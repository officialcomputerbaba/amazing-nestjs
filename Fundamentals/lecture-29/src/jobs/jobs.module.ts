import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { JobsService } from "./services/jobs.service";

@Module({
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
