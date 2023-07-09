"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks = __importStar(require("nunjucks"));
const express_1 = __importDefault(require("express"));
const home_controller_1 = require("./controllers/home.controller");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "html");
nunjucks.configure("views", {
    autoescape: true,
    express: app,
    watch: process.env.NODE_ENV !== "production",
});
let homeController = new home_controller_1.HomeController();
app
    .get("/login", homeController.loginView)
    .post("/login", homeController.checkLogin)
    .get("/home", homeController.home)
    .listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
