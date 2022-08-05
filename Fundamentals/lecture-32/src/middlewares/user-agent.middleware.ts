import { Request, Response, NextFunction } from "express";


export function userAgent(req: Request, res: Response, next: NextFunction) {
  const ua = req.headers["user-agent"];

  console.log(`[userAgent middleware] User Agent: ${ua}`);

  req["ua"] = ua;
  // NOTE: uncomment the below line to end the req-res cycle
  // res.json({ accepted: ua }); return;
  next();
}