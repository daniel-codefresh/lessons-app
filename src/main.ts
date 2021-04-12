// import { Tracer } from './tracer';
// // must be started before AppModule import
// Tracer.start('lessons-api');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const port = parseInt(process.env.PORT) || 9000;
  await app.listen(port);
}
bootstrap();
