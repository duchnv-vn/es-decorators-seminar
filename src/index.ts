import { Application } from "express";
import * as nunjucks from "nunjucks";
import express from "express";
import { HomeController } from "./controllers/home.controller";
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const port = process.env.PORT;

const app: Application = express();
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "html");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: process.env.NODE_ENV !== "production",
});

let homeController = new HomeController();

app
  .get("/login", homeController.loginView)
  .post("/login", homeController.checkLogin)
  .get("/home", homeController.home)
  .listen(port, () => {
    console.log(`Server is running at PORT ${port}`);
  });
