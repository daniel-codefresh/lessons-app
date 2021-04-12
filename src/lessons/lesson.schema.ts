import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {
  @Prop({ required: true })
  name: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ default: [] })
  students: string[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
