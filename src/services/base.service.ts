import {
  ReadOnly,
  addPropertyToClass,
  addPropertyToClass2,
  logError,
} from "../decorators/readonly.decorator";

export class BaseService {
  originFunction() {
    return "function run success";
  }

  @logError
  testDecorateFunc() {
    return this.originFunction();
  }
}
