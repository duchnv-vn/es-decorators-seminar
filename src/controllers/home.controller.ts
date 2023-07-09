import { Request, Response } from "express";
import {
  checkAuth,
  observeConstructor,
  changePropertyOfClass,
  ReadOnly,
  checkParameter,
} from "../decorators/class-decorator";

// @changePropertyOfClass
// @observeConstructor
export class HomeController {
  constructor(dateInput?: any) {}

  // @checkAuth
  home(req: Request, res: Response) {
    return res.send("home page");
  }

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
