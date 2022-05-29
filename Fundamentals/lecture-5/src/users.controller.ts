import { Controller, Get, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";

import { Response } from "express";

@Controller("users")
export class UsersController {
  // @Example 1: When using `@Res/@Response` the `NestJs` will not send the response
  // this will put the client in wait forever condition
  @Get("profile")
  getProfile(@Res() response: Response) {
    return { tweet: "I will not be sent 🙁" };
  }

  // @Example 2: Using `@Res (response)` object to set the status code `200` and sending the response
  @Post("email")
  getEmail(@Res() response: Response) {
    response.status(HttpStatus.OK);
    response.json({ success: true });
  }

  // @Example 3: Using `@Res (response)` object to set status code `200` and
  // `passThrough` option let the `NestJs` to send the response
  @Post("message")
  setMessage(@Res({ passthrough: true }) response: Response) {
    response.status(HttpStatus.OK);
    return { message: "Computer Baba is Awesome" };
  }

  // @Example 4: Overriding the status code
  // and using `passThrough` option to let the `NestJs` send the response
  @Post("tags")
  @HttpCode(HttpStatus.OK)
  addTags(@Res({ passthrough: true }) response: Response) {
    response.status(HttpStatus.NO_CONTENT); // this will override the status code set by `@HttpCode`

    // NOTE: Because the status code is `204` hence no `response content` is sent to the client
    return "Tags added";
  }
}
