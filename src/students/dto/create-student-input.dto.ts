import { Field, InputType } from '@nestjs/graphql';
import { ArrayNotEmpty, Max, Min, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInputDto {
  @MinLength(2)
  @Field()
  name: string;

  @Min(10)
  @Max(40)
  @Field()
  age: number;

  // @ArrayNotEmpty()
  // @Field()
  // classes: string[];
}
