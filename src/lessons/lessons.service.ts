import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson, LessonDocument } from './lesson.schema';
import { Model, Types } from 'mongoose';
import { CreateLessonInputDto } from './dto/create-lesson-input.dto';
import { AssignStudentsInputDto } from './dto/assign-students-input.dto';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  async getLessonById(id: Types.ObjectId): Promise<LessonDocument> {
    const lesson = await this.lessonModel.findById(id).exec();
    if (!lesson)
      throw new NotFoundException(`lesson with ${id} id was not found.`);

    return lesson;
  }

  async getLessons(): Promise<LessonDocument[]> {
    return this.lessonModel.find({}).exec();
  }

  async createLesson(
    createLesson: CreateLessonInputDto,
  ): Promise<LessonDocument> {
    const lesson = new this.lessonModel(createLesson);
    return lesson.save();
  }

  async assignStudentsToLesson({
    lessonId,
    studentIds,
  }: AssignStudentsInputDto): Promise<LessonDocument> {
    const lesson = await this.getLessonById(
      (lessonId as unknown) as Types.ObjectId,
    );
    lesson.students = [...lesson.students, ...studentIds];
    return lesson.save();
  }
}
