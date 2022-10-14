import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from "../user/user.schema";

@Schema()
export class Employer extends User {
  @Prop({ required: true })
  company: string;

  @Prop()
  size?: string;

  @Prop({ default: [] })
  workArea?: string[];

  @Prop()
  website?: string;
}

export type EmployerDocument = Employer & Document;

export const EmployerSchema = SchemaFactory.createForClass(Employer);

export const EMPLOYER_MODEL = Employer.name;
