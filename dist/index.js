"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = require("./controllers/home.controller");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const app = express();
app.get("/", home_controller_1.HomeController);
app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
});
