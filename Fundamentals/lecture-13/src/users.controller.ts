import { Controller, Inject } from "@nestjs/common";
import { Subject } from "rxjs";

@Controller("users")
export class UsersController {
  constructor(
    @Inject("MEMORY_STORE") private memStore: Record<string, any>,

    @Inject("CLOUD_STORE") private cloudStore: Record<string, any>,

    @Inject("EVENTS_STORE") private eventsStore: Subject<any>
  ) {
    console.log("Inside [UsersController]");

    console.log("Memory Store ", this.memStore);

    console.log("Cloud Store ", this.cloudStore);

    console.log("Events Store ", this.eventsStore);
  }
}
