import { Injectable, Module } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DATABASE_CONNECTION } from "../infra/mongoose/database.config";
import { ADMIN_MODEL, AdminDocument, AdminSchema } from "./admin.schema";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(ADMIN_MODEL, DATABASE_CONNECTION.ADMIN)
    private readonly adminModel: Model<AdminDocument>
  ) {
    console.log(`[AdminService]: ${this.adminModel}`);
  }
}

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: ADMIN_MODEL, schema: AdminSchema }],
      DATABASE_CONNECTION.ADMIN
    ),
  ],
  providers: [AdminService],
})
export class AdminModule {}
