import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { JobsModule } from "./jobs/jobs.module";

import { AdminModule } from "./admin/admin.module";
import { AdminOfficesModule } from "./admin/offices/admin-offices.module";
import { AdminUsersModule } from "./admin/users/admin-users.module";

const ROUTES = [
  {
    path: "jobs",
    module: JobsModule,
  },
  {
    path: "admin",
    module: AdminModule,
    children: [
      {
        path: "users",
        module: AdminUsersModule,
      },
      {
        path: "offices",
        module: AdminOfficesModule,
      },
    ],
  },
];

@Module({
  imports: [JobsModule, AdminModule, RouterModule.register(ROUTES)],
})
export class AppModule {}
