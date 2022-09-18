import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobSchema, JOB_MODEL } from "../schemas/job";
import { JobsService } from "./jobs.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JOB_MODEL, schema: JobSchema }]),
  ],
  exports: [MongooseModule],
  providers: [JobsService],
})
export class JobsModule {}
