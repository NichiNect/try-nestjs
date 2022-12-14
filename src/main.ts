import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common/services';

const port = process.env.APP_PORT ?? 3400;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  Logger.log(`Start at http://127.0.0.1:${port}`, 'Running Port');
}
bootstrap();
