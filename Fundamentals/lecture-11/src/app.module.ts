import { Module } from "@nestjs/common";
import { DatabaseStore } from "./stores/database.store";
import { GlobalStore } from "./stores/global.store";
import { PersonStore } from "./stores/person.store";
import { UsersStore } from "./stores/users.store";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [
    // token name = `STORE` & dependency = `DatabaseStore`
    { provide: "STORE", useClass: DatabaseStore },

    // token name = `UsersStore` & dependency = `PersonStore`
    { provide: UsersStore, useClass: PersonStore },

    // token name = `PersonStore` & dependency = `GlobalStore`
    { provide: PersonStore, useClass: GlobalStore },
  ],
})
export class AppModule {}
