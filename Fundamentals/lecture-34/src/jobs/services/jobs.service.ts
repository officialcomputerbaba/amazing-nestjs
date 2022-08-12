import { Injectable } from "@nestjs/common";
import { JOBS } from "./jobs-data";

@Injectable()
export class JobsService {
  search(query: string) {
    if (!query || !query?.trim().length) {
      return JOBS;
    }

    const searchKey = query.toLowerCase();

    // NOTE: The below condition is only for demonstrating `Exception Overriding` in `Interceptor`
    // send numebr like `12` in query to trigger the condition
    if (!isNaN(+searchKey)) {
      throw new Error("Query key must be a string");
    }

    const jobs = JOBS.filter((job) => {
      const title = job.title.toLowerCase();
      const loc = job.location.toLowerCase();

      return title.includes(searchKey) || loc.includes(searchKey);
    });

    return jobs;
  }
}
