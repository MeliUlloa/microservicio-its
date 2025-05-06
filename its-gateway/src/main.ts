import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.info(`Gateway escuchando desde el puerto: ${envs.PORT}`); // Arranca el servidor HTTP del Gateway en el puerto indicado por .env.
  await app.listen(envs.PORT);
}
bootstrap();

// Este archivo levanta el Gateway como una app HTTP.