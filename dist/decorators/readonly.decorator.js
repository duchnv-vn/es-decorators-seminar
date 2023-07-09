"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDecorator2 = exports.classDecorator = exports.checkAuth = exports.checkAuth2 = exports.addPropertyToClass2 = exports.addPropertyToClass = exports.ReadOnly = void 0;
function ReadOnly(target, name, descriptor) {
    console.log("------------------------");
    console.log("target", target);
    console.log("------------------------");
    console.log("name", name);
    console.log("------------------------");
    console.log("descriptor", descriptor);
    console.log("------------------------");
    return Object.assign(Object.assign({}, descriptor), { writable: false });
}
exports.ReadOnly = ReadOnly;
const addPropertyToClass = (target) => {
    target.c = "Variable C";
};
exports.addPropertyToClass = addPropertyToClass;
const addPropertyToClass2 = (_isNeedToAdd) => {
    return (target) => {
        target.A = "variable A";
    };
};
exports.addPropertyToClass2 = addPropertyToClass2;
function checkAuth2(target, name, descriptor) {
    // Run intermediately when server starts
    const original = descriptor.value;
    switch (typeof original) {
        case "function":
            descriptor.value = function (...args) {
                // Run when function invoked
                const req = args[0];
                const res = args[1];
                try {
                    if (!req.headers["authorization"])
                        return res.status(400).send("Missing authorization token");
                    const authToken = req.headers["authorization"];
                    const result = original.apply(this, args);
                    return result;
                }
                catch (error) {
                    return res.status(500).send("System error");
                }
            };
            break;
    }
}
exports.checkAuth2 = checkAuth2;
// export function checkAuth(arg: any) {
//   return function (target: any, name: any, descriptor: any) {
//     // Do something...
//     return descriptor;
//   };
// }
function checkAuth(target, name, descriptor) {
    // Do something...
    return descriptor;
}
exports.checkAuth = checkAuth;
function classDecorator(target) {
    return class ModifiedClass extends target {
        constructor(...args) {
            super(...args);
            console.log("------------------------");
            console.log("args_11", args);
            console.log("------------------------");
            // this.dateOfBirth = "1996-07-03";
        }
    };
}
exports.classDecorator = classDecorator;
function classDecorator2(target) {
    class ModifiedClass extends target {
        constructor(...args) {
            super();
            console.log("------------------------");
            console.log("args_2", args);
            console.log("------------------------");
            // this.dateOfBirth = "1996-07-03";
        }
    }
    const instance = new ModifiedClass();
    console.log("------------------------");
    console.log("instance", instance);
    console.log("------------------------");
    return target;
}
exports.classDecorator2 = classDecorator2;
