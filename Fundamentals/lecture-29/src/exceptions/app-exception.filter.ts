import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { writeFile } from "fs/promises";
import { join } from "path";

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(private httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let msg = "Internal Server Error";

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      msg = exception.message;
    }

    const { httpAdapter } = this.httpAdapterHost;

    const body = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: msg,
    };

    this.writeHttpLog(body);

    httpAdapter.reply(ctx.getResponse(), body, status);
  }

  private async writeHttpLog(data: Record<string, any>) {
    const LOGS_DIR = join(__dirname, `${Date.now()}-log.json`); // dist/exceptions

    try {
      await writeFile(LOGS_DIR, JSON.stringify(data));
    } catch (err) {
      return;
    }
  }
}
