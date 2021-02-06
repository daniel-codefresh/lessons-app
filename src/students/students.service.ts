import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model, Types } from 'mongoose';
import { CreateStudentInputDto } from './dto/create-student-input.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async getStudents(): Promise<StudentDocument[]> {
    return this.studentModel.find({}).exec();
  }

  async getManyStudentsByIds(studentIds: Types.ObjectId[]) {
    return this.studentModel.find({ _id: { $in: studentIds } }).exec();
  }

  async createStudent(
    createStudentInputDto: CreateStudentInputDto,
  ): Promise<StudentDocument> {
    const student = new this.studentModel(createStudentInputDto);
    return student.save();
  }
}
