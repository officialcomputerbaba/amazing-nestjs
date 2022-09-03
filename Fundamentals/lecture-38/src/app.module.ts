import { Controller, Get, Module } from "@nestjs/common";

@Controller("app")
class AppController {
  @Get()
  appRoute() {
    return { success: true };
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}
