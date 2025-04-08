import { Controller, Get, HttpException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('MS_USER') private readonly userClient: ClientProxy) {}

  @Get()
  getHello() {
    return this.userClient.send('getHello', {}).pipe(
      catchError((err) => {
        throw new HttpException(err, 500);
      }),
    );
  }
}
