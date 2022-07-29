import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class JobsService implements OnModuleInit {
  onModuleInit() {
    console.log("JobsService onModuleInit");
  }
}
