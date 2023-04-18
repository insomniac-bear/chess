import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.use(limiter);
  app.use(helmet());
  await app.listen(4000);
}
bootstrap();
