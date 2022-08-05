import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from "@nestjs/common";
import {
  userAgent,
} from "../middlewares/user-agent.middleware";
import { InterviewsController } from "./controllers/interviews.controller";
import { JobsController } from "./controllers/jobs.controller";

@Module({
  controllers: [JobsController, InterviewsController],
})
export class JobsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  
    consumer
      .apply(userAgent)
      .forRoutes("jobs");
  }
}
