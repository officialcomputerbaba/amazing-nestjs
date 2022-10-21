import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User, USER_MODEL } from "../user/user.schema";
import { JOB_TYPE } from "../../constants";
import { Address, AddressSchema } from "../common/address.schema";

@Schema({
  timestamps: true,
})
export class Job {
  @Prop({ type: Types.ObjectId, ref: USER_MODEL, required: true })
  employer: Types.ObjectId | User;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  experience: number;

  @Prop({ default: [] })
  tags?: string[];

  @Prop()
  salary?: String;

  @Prop({
    type: String,
    enum: Object.keys(JOB_TYPE),
    required: true,
  })
  type: JOB_TYPE;

  @Prop({ type: AddressSchema, required: true })
  location: Address;
}

export type JobDocument = Job & Document;

export const JOB_MODEL = Job.name; // Job

export const JobSchema = SchemaFactory.createForClass(Job);

function populateMiddleware(next: Function) {
  this.populate({ path: "employer", select: { name: 1, email: 1 } });  // NOTE: we can also use `_id: 0` to unselect the `id` { name: 1, email: 1, _id: 0 }
  next();
}

JobSchema.pre("find", populateMiddleware);

JobSchema.pre("findOne", populateMiddleware);
