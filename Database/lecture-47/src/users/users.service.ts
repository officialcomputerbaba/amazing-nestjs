import {
  BadRequestException,
  Injectable,
  Inject,
  NotFoundException,
  ServiceUnavailableException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DATABASE_CONNECTION } from "../infra/mongoose/database.constants";
import { USER_MODEL, UserDocument, IUserModel } from "../schemas/user";
import { AccountLoginDTO, CreateUserDTO, UpdateUserDTO } from "./dto";
import { Connection, Model, Document } from "mongoose";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(USER_MODEL)
    private readonly userModel: IUserModel,

    @Inject("STATS_MODEL")
    private readonly statsModel: Model<Document>,

    @Inject(DATABASE_CONNECTION) private readonly dbConn: Connection
  ) {
    console.log(`[UsersService]: Database Connection Injected ${this.dbConn.port}`);
    console.log(`[UsersService]: Stats Model Injected ${this.statsModel}`);
  }

  async login(accountLoginDto: AccountLoginDTO) {
    const { email, password } = accountLoginDto;

    const user = await this.userModel.findByEmailAndPassword(email, password);

    return user;
  }

  async create(createUserDto: CreateUserDTO) {
    try {
      const createdUser = await this.userModel.create(createUserDto);

      return createdUser;
    } catch (error) {
      if (error.name === "ValidationError") {
        throw new BadRequestException(error.errors);
      }

      throw new ServiceUnavailableException();
    }
  }

  async search(name: string) {
    const users: UserDocument[] = await this.userModel.find().byName(name);

    return users;
  }

  async findAll() {
    const users = await this.userModel.find();

    return users;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDTO) {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      {
        new: true,
      }
    );

    if (!updatedUser) {
      throw new NotFoundException("User not found");
    }

    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new NotFoundException("User not found");
    }

    return {
      _id: id,
    };
  }
}
