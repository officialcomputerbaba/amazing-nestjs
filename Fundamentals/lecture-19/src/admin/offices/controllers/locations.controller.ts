import { Controller, Get } from "@nestjs/common";

// admin/offices/locations
@Controller("/locations")
export class LocationsController {
  @Get()
  requestHandler() {
    return "Admin offices locations route";
  }
}
