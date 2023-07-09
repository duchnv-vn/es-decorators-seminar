"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const base_service_1 = require("./base.service");
class HomeService extends base_service_1.BaseService {
    getAValue() {
        return "hello";
    }
}
exports.HomeService = HomeService;
