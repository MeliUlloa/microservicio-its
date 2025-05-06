import { Controller, Get, HttpException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'; // Es la clase que NestJS usa para enviar mensajes a microservicios
import { catchError } from 'rxjs';
import { RpcResponse } from 'common/interfaces/rpc-response.interface';

@Controller()
export class AppController {
  constructor(@Inject('MS_USER') private readonly userClient: ClientProxy) {} // Inyecta el cliente que se registró con el nombre 'MS_USER'

  //Define una ruta GET /.
  @Get()
  getHello() {
    return this.userClient.send('getHello', {}).pipe( //Llama al microservicio usuarios enviando el patrón 'getHello'.
      catchError((rpcError: RpcResponse /** Acá ya sabemos qué tipo de error
        es */ ) => {
        const {  statusCode = 500, error } = rpcError; 
        //Lanza una HttpException con el mensaje y código del error del microservicio
        throw new HttpException(error ?? rpcError, statusCode); 
      }),
    );
  }
}

// Este archivo demuestra cómo el Gateway puede enviar mensajes al microservicio de usuarios.