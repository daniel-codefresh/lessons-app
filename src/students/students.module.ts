import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsResolver } from './students.resolver';
import { StudentsService } from './students.service';
import { Student, StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentsResolver, StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
