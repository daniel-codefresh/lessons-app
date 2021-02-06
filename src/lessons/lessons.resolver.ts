import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonsService } from './lessons.service';
import { CreateLessonInputDto } from './dto/create-lesson-input.dto';
import { Types } from 'mongoose';
import { Lesson, LessonDocument } from './lesson.schema';
import { AssignStudentsInputDto } from './dto/assign-students-input.dto';
import { StudentsService } from '../students/students.service';

@Resolver(() => LessonType)
export class LessonsResolver {
  constructor(
    private lessonsService: LessonsService,
    private studentsService: StudentsService,
  ) {}

  @Query(() => LessonType)
  async lesson(@Args('id') id: string): Promise<LessonDocument> {
    return this.lessonsService.getLessonById((id as unknown) as Types.ObjectId);
  }

  @Query(() => [LessonType])
  async lessons(): Promise<LessonDocument[]> {
    return this.lessonsService.getLessons();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInputDto: CreateLessonInputDto,
  ): Promise<LessonDocument> {
    return this.lessonsService.createLesson(createLessonInputDto);
  }

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudentsInput') assignStudentsInput: AssignStudentsInputDto,
  ): Promise<LessonDocument> {
    return this.lessonsService.assignStudentsToLesson(assignStudentsInput);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentsService.getManyStudentsByIds(
      (lesson.students as unknown) as Types.ObjectId[],
    );
  }
}
