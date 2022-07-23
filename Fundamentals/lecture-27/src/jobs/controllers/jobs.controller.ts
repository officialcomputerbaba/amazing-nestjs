import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { JobsService } from "../services/jobs.service";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // @example 1: unrecognized error
  // Exception layer handles any kind of error (Unrecognized exception)

  @Get(":id/unrecognized")
  findJobByIdUnrecognizedError(@Param("id", ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new Error();
    }

    return { success: true, id };
  }

  // @example 2: recognized error (HttpException)

  @Get(":id/recognized")
  findJobByIdRecognizedError(@Param("id", ParseIntPipe) id: number) {
    if (id == 0) {
      throw new HttpException("Invalid id", HttpStatus.BAD_REQUEST); // return {statusCode, message}
    } else if (id < 0) {
      //  overrides the default return object ({ statusCode, message })
      throw new HttpException(
        {
          error: "Invalid id",
          message: "Id must be higher than 0",
          timestamp: Date.now(),
          data: id,
        },
        HttpStatus.BAD_REQUEST
      );
    }

    return { success: true, id };
  }

  // @example 3: Built-in HTTP-Based Exceptions

  // BadRequestException (below example)
  // NotFoundException
  // ConflictException
  // UnauthorizedException
  // InternalServerErrorException
  // ServiceUnavailableException
  // and there are more...

  @Get(":id/http-based")
  findJobByIdHTTPException(@Param("id", ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new BadRequestException(
        "Id must be higher than 0", // message
        "Id is not valid" // error description
      ); // return { statusCode, message, error }
    } else if (id < 0) {
      // overrides the default return object ({ statusCode, message, error })
      throw new BadRequestException({
        error: "Invalid id",
        message: "Id must not be negative",
        timestamp: Date.now(),
        data: id,
      });
    }

    return { success: true, id };
  }
}
