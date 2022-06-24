import { AdminModule } from "./admin.module";
import { AdminOfficesModule } from "./offices/admin-offices.module";
import { AdminUsersModule } from "./users/admin-users.module";

export const ADMIN_ROUTES = [
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
