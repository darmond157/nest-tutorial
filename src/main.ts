import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  //we can use this for not passing arguments beside exact ones we defined on class
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true
  // }))

  await app.listen(3000);
}
bootstrap();
