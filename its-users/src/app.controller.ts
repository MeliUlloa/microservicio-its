import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller() // marca esta clase como un controlador de microservicio
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('getHello') // este método responde a mensajes que lleguen con la clave "getHello" desde otro microservicio (por ejemplo, el Gateway).
  getHello() { // Usa el método getHello del servicio.
    return this.appService.getHello();
  }
}
