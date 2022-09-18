import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JOB_MODEL, JobDocument } from "../schemas/job";

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(JOB_MODEL) private readonly jobModel: Model<JobDocument>
  ) {
    console.log("[JobsService]: ", this.jobModel);
  }
}
