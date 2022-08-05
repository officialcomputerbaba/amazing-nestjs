import {
    Injectable,
    NestMiddleware,
    UnauthorizedException,
  } from "@nestjs/common";
  import { Request, Response, NextFunction } from "express";
  
  function VerifyJwtToken(token: string) {
    return true;
  }
  
  // Class-Based Middleware
  @Injectable()
  export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
      const token = req.headers.authorization?.split(" ")[1];
  
      // NOTE: your auth logic
      if (token && VerifyJwtToken(token)) {
        next();
        return;
      }
  
      throw new UnauthorizedException();
    }
  }
  
  // Functional Middleware
  export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers.authorization?.split(" ")[1];
  
    // NOTE: your auth logic
    if (token && VerifyJwtToken(token)) {
      next();
      return;
    }
  
    throw new UnauthorizedException();
  }
  