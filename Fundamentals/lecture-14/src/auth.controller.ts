import { Controller, Injectable, Post } from "@nestjs/common";

@Injectable()
export class JwtStrategy {
  constructor() {
    console.log("JwtStrategy init on HTTP request");
  }
}

@Controller("auth")
export class AuthController {
  constructor(private strategy: JwtStrategy) {
    console.log("AuthController init on HTTP request");
    console.log(`[AuthController]:`, this.strategy);
  }

  @Post("login")
  login() {
    return { message: "User logged in successfully" };
  }
}
