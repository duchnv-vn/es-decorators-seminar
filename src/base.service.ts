import { Injectable } from '@nestjs/common';
import { decorateFunction } from './decorators/function_decorators';

@Injectable()
export class BaseService {
  @decorateFunction
  demoFunction(input: { arg: string }): string {
    return 'Function 1';
  }
}
