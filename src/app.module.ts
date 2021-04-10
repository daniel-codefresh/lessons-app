import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonsModule } from './lessons/lessons.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/lessons';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true, // code first approach
    }),
    MongooseModule.forRoot(mongoUri),
    LessonsModule,
    StudentsModule,
  ],
})
export class AppModule {}
