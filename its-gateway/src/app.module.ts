import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from './config/envs';

@Module({
  controllers: [AppController],
  imports: [
    ClientsModule.register([ // Usa ClientsModule para registrar el microservicio MS_USER
      {
        name: 'MS_USER',
        transport: Transport.TCP, // Usa el protocolo TCP para comunicarse (puede ser también RabbitMQ, Redis, etc.).
        options: {
          host: envs.MS_USER_HOST, // Se conecta usando el host y puerto definidos en el .env
          port: envs.MS_USER_PORT,
        },
      },
    ]),
  ],
})
export class AppModule {}
