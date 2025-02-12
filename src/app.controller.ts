import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  // localhost:3000/
  getHello() {
    return this.appService.getHello();
  }
}







