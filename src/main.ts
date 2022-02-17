import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cors from './middleware/cors';
// import { graphqlUploadExpress } from 'graphql-upload';
import { exceptionFactory } from './pipes/validation.pipe';

async function bootstrap() {
  const {NODE_ENV, PORT} = process.env
  const app = await NestFactory.create(
    AppModule,
    {
      ...(NODE_ENV === 'test' && {
        logger: ['error', 'warn']
      })
  });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    exceptionFactory,
  }))
  app.enableCors({origin: true})
  app.use(cors)
  // app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  const _PORT = PORT ? (+PORT) : 8080
  await app.listen(_PORT)
  console.log(`Server running at port: ${_PORT}`)
}
bootstrap();
