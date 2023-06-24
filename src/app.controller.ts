import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { decorateFunction } from './decorators/function_decorators';

@Controller()
export class AppController {
  password = 'my_serect_password';

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
