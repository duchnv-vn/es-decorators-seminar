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

export function checkAuth(target: any, name: any, descriptor: any) {
  return descriptor;
}

export function checkAuth_1(target: any, name: any, descriptor: any) {
  const original = descriptor.value;
  // console.log("------------------------");
  // console.log("descriptor 1", descriptor);
  // console.log("------------------------");
  if (typeof original === "function") {
    descriptor.value = function modifiedHomeFunction(...args: any[]) {
      console.log("------------------------");
      console.log(`Argument 1`, args[0]);
      console.log("------------------------");

      console.log("------------------------");
      console.log(`Argument 2`, args[1]);
      console.log("------------------------");

      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result /* JSON.stringify(result, null, 2) */}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    };
  }
  return descriptor;
}

export function checkAuth_2(target: any, name: any, descriptor: any) {
  console.log("------------------------");
  console.log("descriptor 2", descriptor);
  console.log("------------------------");
  return descriptor;
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
