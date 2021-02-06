import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonsModule } from './lessons/lessons.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';

const mongoUri = 'mongodb://local.codefresh.io:27017/graphql-nestjs';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot(mongoUri),
    LessonsModule,
    StudentsModule,
  ],
})
export class AppModule {}
