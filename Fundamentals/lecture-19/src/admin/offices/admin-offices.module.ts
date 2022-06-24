import { Module } from "@nestjs/common";
import { LocationsController } from "./controllers/locations.controller";

@Module({
  controllers: [LocationsController],
})
export class AdminOfficesModule {}
