import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from "@nestjs/common";
import { JobsModule } from "./jobs/jobs.module";
import { MeetingsModule } from "./meetings/meetings.module";

async function registerApp() {
  return new Promise((resolve) => resolve("Registered"));
}

async function unregisterApp() {
  return new Promise((resolve) => resolve("Unregistered"));
}

@Module({
  imports: [JobsModule, MeetingsModule],
})
export class AppModule
  implements
    OnApplicationBootstrap,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onApplicationBootstrap() {
    console.log("Application bootstrap");
    // register with gateway
    registerApp();
  }

  beforeApplicationShutdown(signal?: string) {
    console.log("Before Application shutdown", signal);
    // unregister from gateway
    unregisterApp();
  }

  onApplicationShutdown(signal?: string) {
    console.log("Application shutdown", signal);
  }
}
