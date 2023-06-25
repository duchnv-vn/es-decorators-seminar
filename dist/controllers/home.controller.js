"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const services_1 = require("../services");
const HomeController = (req, res) => {
    const a = services_1.baseService.testDecorateFunc("123");
    res.send(a);
};
exports.HomeController = HomeController;
