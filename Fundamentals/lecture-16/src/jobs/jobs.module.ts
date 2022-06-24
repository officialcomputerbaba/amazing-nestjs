import { Module } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { OfficeController } from "./controllers/office.controller";
import { JobsService } from "./services/jobs.service";

@Module({
  imports: [],
  controllers: [JobsController, OfficeController],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}
