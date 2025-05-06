import { NestFactory } from '@nestjs/core'; // herramienta de NestJS para crear instancias de aplicaciones.
import { AppModule } from './app.module'; //  módulo principal de tu microservicio.
import { envs } from './config/envs'; // objeto con las variables de entorno validadas (puerto, etc).
import { MicroserviceOptions, Transport } from '@nestjs/microservices'; // tipo que le dice a Nest que vamos a crear un microservicio. Transport: enum que indica el tipo de transporte; en este caso, TCP.

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>( // Se crea el microservicio usando NestFactory.createMicroservice.
    AppModule,
    {
      transport: Transport.TCP, // lo configura para comunicarse por protocolo TCP.
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

