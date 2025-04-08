import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from './config/envs';

@Module({
  controllers: [AppController],
  imports: [
    ClientsModule.register([
      {
        name: 'MS_USER',
        transport: Transport.TCP,
        options: {
          host: envs.MS_USER_HOST,
          port: envs.MS_USER_PORT,
        },
      },
    ]),
  ],
})
export class AppModule {}
