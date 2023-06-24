import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';

@Injectable()
export class AppService {
  constructor(private readonly baseService: BaseService) {}
  getHello(): string {
    const a = this.baseService.demoFunction({ arg: '123' });
    console.log('------------------------');
    console.log('a', a);
    console.log('------------------------');
    return 'Hello World 123!';
  }
}
