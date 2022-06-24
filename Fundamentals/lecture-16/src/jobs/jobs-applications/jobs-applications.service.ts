import { Injectable } from "@nestjs/common";

@Injectable()
export class JobsApplicationsService {
  constructor() {
    console.log("[JobsApplicationsService]: JobsModule exported the JobsApplicationsModule.");
  }
}
