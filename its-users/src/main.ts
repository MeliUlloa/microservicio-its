import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: envs.PORT,
      },
    },
  );
  console.info(`Microservicio escuchando desde le puerto: ${envs.PORT}`);
  await app.listen();
}
bootstrap();
