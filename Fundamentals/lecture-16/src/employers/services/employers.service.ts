import { Injectable } from "@nestjs/common";
import { JobsApplicationsService } from "src/jobs/jobs-applications/jobs-applications.service";

@Injectable()
export class EmployersService {
  constructor(private jobsAppService: JobsApplicationsService) {
    console.log("[EmployersService]: Jobs applications service injected");
  }
}
