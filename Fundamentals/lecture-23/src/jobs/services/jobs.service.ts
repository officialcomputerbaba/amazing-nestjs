import { Injectable } from "@nestjs/common";

const JOBS_INTERVIEWS = [];

@Injectable()
export class JobsService {
  scheduleJobInterview(jobId: number, date: string | number | Date) {
    const interview = { jobId, date };
    JOBS_INTERVIEWS.push(interview);

    return interview;
  }
}
