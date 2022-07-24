import { Injectable } from "@nestjs/common";
import { CreateJobDTO } from "../dto/create-job.dto";
import { Job } from "../interfaces/job";

const JOBS = new Map<number, Job>();
let jobId = 1;

@Injectable()
export class JobsService {
  createJob(createJobDto: CreateJobDTO) {
    const job = Object.assign({ ...createJobDto, id: jobId++ }, new Job());

    JOBS.set(job.id, job);

    return job;
  }
}
