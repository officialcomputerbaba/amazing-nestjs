import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { JOBS_ROUTES } from "./jobs/jobs-routes";
import { ADMIN_ROUTES } from "./admin/admin-routes";

const ROUTES = [...JOBS_ROUTES, ...ADMIN_ROUTES];

@Module({
  imports: [RouterModule.register(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
