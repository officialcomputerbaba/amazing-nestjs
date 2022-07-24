import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { IdException } from "./id-exception";
import { Response } from "express";

@Catch(IdException)
export class IdExceptionFilter implements ExceptionFilter {
  catch(exception: IdException, host: ArgumentsHost) {
    const body = {
      message: exception.message,
      error: "Id error",
    };

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json(body);
  }
}
