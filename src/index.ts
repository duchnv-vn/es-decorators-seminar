import { Request, Response } from "express";
import { HomeController } from "./controllers/home.controller";

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const app = express();
app.get("/", HomeController);

app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
