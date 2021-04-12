import { Field, ID, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class AssignStudentsInputDto {
  @IsMongoId()
  @Field(() => ID)
  lessonId: string;

  @IsMongoId({ each: true })
  @Field(() => [ID])
  studentIds: string[];
}
