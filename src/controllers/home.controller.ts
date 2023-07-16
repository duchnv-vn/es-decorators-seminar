import { Request, Response } from "express";
import {
  checkAuth_1,
  observeConstructor,
  changePropertyOfClass,
  ReadOnly,
  checkParameter,
  checkAuth_2,
} from "../decorators/class-decorator";

// @changePropertyOfClass
// @observeConstructor
export class HomeController {
  constructor(dateInput?: any) {}

  @checkAuth_2
  @checkAuth_1
  home(req: Request, res: Response) {
    return res.send("home page");
  }

  // @checkAuth
  // home = (req: Request, res: Response) => {
  //   return res.send("home page");
  // };

  loginView(req: Request, res: Response) {
    return res.render("login.html", {
      cssBackgroundColor: "white",
    });
  }

  checkLogin = (req: Request, res: Response) => {
    console.log("------------------------");
    console.log("req", req);
    console.log("------------------------");
    return res.send("ok");
  };
}
