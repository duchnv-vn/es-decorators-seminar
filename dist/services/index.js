"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeService = exports.baseService = void 0;
const base_service_1 = require("./base.service");
const home_service_1 = require("./home.service");
exports.baseService = new base_service_1.BaseService();
exports.homeService = new home_service_1.HomeService();
