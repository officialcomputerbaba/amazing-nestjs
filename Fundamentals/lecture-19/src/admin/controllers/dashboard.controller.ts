import { Controller, Get } from "@nestjs/common";

// admin/dashboard
@Controller("/dashboard")
export class DashboardController {
  @Get()
  requestHandler() {
    return "Admin dashboard route";
  }
}
