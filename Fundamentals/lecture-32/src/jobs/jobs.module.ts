import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
  } from "@nestjs/common";
  import {
    UserAgentMiddleware,
    UserAgentOptions,
  } from "../middlewares/user-agent.middleware";
  import { InterviewsController } from "./controllers/interviews.controller";
  import { JobsController } from "./controllers/jobs.controller";
  
  @Module({
    controllers: [JobsController, InterviewsController],
    providers: [
      {
        provide: UserAgentOptions,
        useValue: { accepted: ["chrome", "firefox", "postman"] },
      },
    ],
  })
  export class JobsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(UserAgentMiddleware)
        .exclude({ path: "jobs/refs", method: RequestMethod.POST })
        .forRoutes("jobs");
    }
  }
  