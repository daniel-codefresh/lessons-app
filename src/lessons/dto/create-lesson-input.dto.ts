import { IsDate, IsOptional, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLessonInputDto {
  @MinLength(2)
  @Field()
  name: string;

  @IsOptional()
  @IsDate()
  @Field()
  startDate: Date;

  @IsOptional()
  @IsDate()
  @Field()
  endDate: Date;
}
