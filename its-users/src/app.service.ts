import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices'; // clase RpcException que se usa en microservicios para lanzar errores que puedan ser interceptados por el Gateway.
import { RpcResponse } from 'common/interfaces/rpc-response.interface';

@Injectable()
export class AppService {
  getUserById(id: number): any {
    const user = null;

    if (!user) {
      const error: RpcResponse = {
        statusCode: 404,
        error: `User with ID${id} not found`,
      };
      throw new RpcException(error);
    }

    return user;
  }
}

