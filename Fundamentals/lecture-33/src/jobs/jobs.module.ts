import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthMiddleware } from "../middlewares/auth.middleware";
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
      .apply(
        // NOTE: `AuthMiddleware` is made global in `src/main.ts`
        // AuthMiddleware,
        UserAgentMiddleware
      )
      .forRoutes(JobsController, InterviewsController);
  }
}
