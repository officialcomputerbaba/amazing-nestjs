import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const username = config.get("DATABASE_USER");
        const password = config.get("DATABASE_PASSWORD");
        const host = config.get("DATABASE_HOST");
        const port = config.get("DATABASE_PORT");
        const db = config.get("DATABASE_NAME");
        const isLocal = config.get("NODE_ENV") === "LOCAL";

        const uri = isLocal
          ? `mongodb://localhost:${port}/${db}`
          : `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority`;

        return {
          uri,
          // NOTE: we can other options as well, below are the some options you can set
          //   useNewUrlParser: true,
          //   useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
