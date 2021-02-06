import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../students/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => [StudentType])
  students: string[];
}
