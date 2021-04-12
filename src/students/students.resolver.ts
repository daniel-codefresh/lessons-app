import { StudentsService } from './students.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInputDto } from './dto/create-student-input.dto';
import { StudentDocument } from './student.schema';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentsResolver {
  constructor(private studentsService: StudentsService) {}

  // @Query()
  // async student(id: string) {}

  @Query(() => [StudentType])
  async students() {
    return this.studentsService.getStudents();
  }

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInputDto: CreateStudentInputDto,
  ): Promise<StudentDocument> {
    return this.studentsService.createStudent(createStudentInputDto);
  }
}
