import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
  } from "@nestjs/common";
  import { JobsModule } from "./jobs/jobs.module";
  import { AuthMiddleware } from "./middlewares/auth.middleware";
  
  @Module({
    imports: [JobsModule],
  })
  export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      // @method 1: using `RouteInfo Object` to register `AuthMiddleware` for every route
      // consumer
      //   .apply(AuthMiddleware)
      //   .forRoutes({ path: "*", method: RequestMethod.ALL });
  
      // ------------------
  
      // @method 2: using `*` wildcard to register `AuthMiddleware` for every route
      consumer.apply(AuthMiddleware).forRoutes("*");

      console.log("[AppModule]: AuthMiddleware registered for every route");
    }
  }
  