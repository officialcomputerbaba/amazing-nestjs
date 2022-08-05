import {
    ForbiddenException,
    Injectable,
    NestMiddleware,
    Optional,
  } from "@nestjs/common";
  import { Request, Response, NextFunction } from "express";
  
  export class UserAgentOptions {
    accepted?: string[];
  }
  
  @Injectable()
  export class UserAgentMiddleware implements NestMiddleware {
    constructor(@Optional() private options: UserAgentOptions) {}
  
    use(req: Request, res: Response, next: NextFunction) {
      const ua = req.headers["user-agent"];
  
      if (!this.isUserAgentAcceptable(ua)) {
        throw new ForbiddenException("Not allowed");
      }
  
      console.log(`[UserAgentMiddleware] User Agent: ${ua}`);
  
      req["ua"] = ua;
      next();
    }
  
    private isUserAgentAcceptable(userAgent: string) {
      const acceptedUserAgents = this.options?.accepted || [];
  
      if (!acceptedUserAgents.length) {
        return true;
      }
  
      return acceptedUserAgents.some((agent) =>
        userAgent.toLowerCase().includes(agent.toLowerCase())
      );
    }
  }
  