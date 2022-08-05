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
      // @example 1: single route
  
      // consumer.apply(UserAgentMiddleware).forRoutes("jobs");
  
      // -----
  
      // @example 2: multiple controller routes
  
      // consumer.apply(UserAgentMiddleware).forRoutes("jobs", "interviews");
  
      // -----
  
      // @example 3: nested route(s)
  
      // consumer.apply(UserAgentMiddleware).forRoutes("jobs/refs");
  
      // -----
  
      // @example 4: wildcards | r*fs -> refs, rafs, rmfs
  
      // consumer.apply(UserAgentMiddleware).forRoutes("jobs/r*fs");
  
      // -----
  
      // @example 5: wildcards | refs? -> ref, refs
  
      // consumer.apply(UserAgentMiddleware).forRoutes("jobs/refs?");
  
      // -----
  
      // @example 6: route controller(s)
  
      // consumer.apply(UserAgentMiddleware).forRoutes(JobsController);
      // consumer
      //   .apply(UserAgentMiddleware)
      //   .forRoutes(JobsController, InterviewsController);
  
      // -----
  
      // @example 7: RouteInfo Object(s)
  
      // consumer
      //   .apply(UserAgentMiddleware)
      //   .forRoutes({ path: "jobs/refs", method: RequestMethod.POST });
  
      // -----
  
      // @example 8: Mixed Configs
  
      consumer
        .apply(UserAgentMiddleware)
        .forRoutes(
          { path: "jobs/refs", method: RequestMethod.POST },
          InterviewsController,
          "office"
        );
    }
  }
  