import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { tap } from "rxjs/operators";
import { Request, Response } from "express";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const startTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const endTime = Date.now();
        const resTime = endTime - startTime;

        console.log(
          `${request.method} ${request.path} ${response.statusCode} ${resTime}ms`
        );
      })
    );
  }
}
