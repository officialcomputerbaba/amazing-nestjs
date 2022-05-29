import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Res,
} from "@nestjs/common";

import { Response } from "express";

@Controller("users")
export class UsersController {
  // @Example 1: setting `Cache-Control` header
  @Get("cache")
  @Header("Cache-Control", "none")
  getCache() {
    return { message: "Check Cache-Control in headers" };
  }

  // @Example 2: setting multiple headers
  // `Cache-Control` & `X-Superpower`
  @Get("power")
  @Header("Cache-Control", "none")
  @Header("X-Superpower", "teaching")
  findSuperPower() {
    return { message: "Check Cache-Control & X-Superpower in headers" };
  }

  // @Example 3: composing decorators
  // setting multiple headers and status code
  @Put("tags")
  @Header("Cache-Control", "none")
  @Header("X-Secret", "Love")
  @HttpCode(HttpStatus.OK)
  updateTags() {
    return {
      message: "Check Cache-Control, X-Secret in headers",
      info: "Check status code",
    };
  }

  // @Example 4: setting multiple headers with different techniques
  // Using `@Header` for Cache-Control
  // Using `@Res` for X-API-KEY, X-Timestamp
  @Post("message")
  @Header("Cache-Control", "none")
  sendMessage(@Res({ passthrough: true }) response: Response) {
    response.header({
      "X-API-KEY": "ad16f7b13b05747062d2b706d3007ea9d593bd48",
      "X-Timestamp": Date.now(),
    });
    return {
      message: "Check Cache-Control, X-API-KEY & X-Timestamp in headers",
    };
  }
}
