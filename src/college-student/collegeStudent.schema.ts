import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CollegeStudentDocument = CollegeStudent & Document;

@Schema({ timestamps: true })
export class CollegeStudent {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  email?: string;
}

export const CollegeStudentSchema =
  SchemaFactory.createForClass(CollegeStudent);
