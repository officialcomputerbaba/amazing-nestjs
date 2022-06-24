import { Module } from "@nestjs/common";
import { DashboardController } from "./controllers/dashboard.controller";
import { AdminOfficesModule } from "./offices/admin-offices.module";
import { AdminUsersModule } from "./users/admin-users.module";

@Module({
  imports: [AdminUsersModule, AdminOfficesModule],
  controllers: [DashboardController],
})
export class AdminModule {}
