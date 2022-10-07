import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User } from "../user/user.schema";

@Schema()
export class Student extends User {
  @Prop({ required: true })
  university: string;

  @Prop({ required: true })
  course: string;

  @Prop()
  grade?: string;

  @Prop({ default: false })
  isUnderInternship?: boolean;
}

export type StudentDocument = Student & Document;

export const StudentSchema = SchemaFactory.createForClass(Student);

export const STUDENT_MODEL = Student.name;
