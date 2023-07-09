import { Request, Response } from "express";

export function ReadOnly(...args: any[]) {
  console.log("------------------------");
  console.log("ReadOnly", args);
  console.log("------------------------");

  return { ...args[2], writable: false };
}

export const addPropertyToClass = (target: any) => {
  target.c = "Variable C";
};

export const addPropertyToClass2 = (_isNeedToAdd: boolean) => {
  return (target: any) => {
    target.A = "variable A";
  };
};

export function checkAuth2(target: any, name: string, descriptor: any) {
  // Run intermediately when server starts
  const original = descriptor.value;
  switch (typeof original) {
    case "function":
      descriptor.value = function (...args: any[]) {
        // Run when function invoked
        const req: Request = args[0];
        const res: Response = args[1];
        try {
          if (!req.headers["authorization"])
            return res.status(400).send("Missing authorization token");

          const authToken = req.headers["authorization"];

          const result = original.apply(this, args);
          return result;
        } catch (error) {
          return res.status(500).send("System error");
        }
      };
      break;
  }
}

// export function checkAuth(arg: any) {
//   return function (target: any, name: any, descriptor: any) {
//     // Do something...
//     return descriptor;
//   };
// }

export function checkAuth(...args: any[]) {
  return args[2];
}

export function observeConstructor<T extends { new (...args: any[]): {} }>(
  target: T
) {
  return class ModifiedClass extends target {
    constructor(...args: any[]) {
      const payloads = args.length > 0 ? args : ["1994-07-03"];
      super(...payloads);
    }
  };
}

export function changePropertyOfClass<T extends { new (...args: any[]): {} }>(
  target: T
) {
  return class extends target {
    loginViewPath = "login-admin.html";
    cssBackgroundColor = "orange";
  };
}

export function checkParameter(str: string) {
  console.log("------------------------");
  console.log("str", str);
  console.log("------------------------");
  return function (...args: any[]) {
    console.log("------------------------");
    console.log("args", args);
    console.log("------------------------");
  };
}
