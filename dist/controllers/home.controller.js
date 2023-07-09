"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
// @changePropertyOfClass
// @observeConstructor
class HomeController {
    constructor(dateInput) {
        this.checkLogin = (req, res) => {
            console.log("------------------------");
            console.log("req", req);
            console.log("------------------------");
            return res.send("ok");
        };
    }
    // @checkAuth
    home(req, res) {
        return res.send("home page");
    }
    loginView(req, res) {
        return res.render("login.html", {
            cssBackgroundColor: "white",
        });
    }
}
exports.HomeController = HomeController;
