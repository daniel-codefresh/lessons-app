import { Module } from '@nestjs/common';
import { LessonsResolver } from './lessons.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './lesson.schema';
import { LessonsService } from './lessons.service';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
    StudentsModule,
  ],
  providers: [LessonsResolver, LessonsService],
})
export class LessonsModule {}
