import { Injectable } from "@nestjs/common";
import { JOBS } from "./jobs-data";

@Injectable()
export class JobsService {
  search(query: string) {
    if (!query || !query?.trim().length) {
      return JOBS;
    }

    const searchKey = query.toLowerCase();

    const jobs = JOBS.filter((job) => {
      const title = job.title.toLowerCase();
      const loc = job.location.toLowerCase();

      return title.includes(searchKey) || loc.includes(searchKey);
    });

    return jobs;
  }
}
