import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { USER_MODEL, UserDocument } from "../schemas/user";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>
  ) {
    console.log("[UsersService]: ", this.userModel);
  }
}
