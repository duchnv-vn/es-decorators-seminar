export function ReadOnly(target: any, name: string, descriptor: any) {
  console.log("------------------------");
  console.log("target", target);
  console.log("------------------------");
  console.log("name", name);
  console.log("------------------------");
  console.log("descriptor", descriptor);
  console.log("------------------------");

  return { ...descriptor, writable: false };
}

export const addPropertyToClass = (target: any) => {
  target.c = "Variable C";
};

export const addPropertyToClass2 = (isNeedToAdd: boolean) => {
  return (target: any) => {
    target.A = "variable A";
  };
};

export const logError = (target: any, name: string, descriptor: any) => {
  const original = descriptor.value;
  // Run intermediately when server starts

  switch (typeof original) {
    case "function":
      descriptor.value = function (...args: any[]) {
        // Run when function invoked
        try {

          const result = original.apply(this, args);
          console.log(`result 123: ${result}`);
          return result;
        } catch (error) {
          throw error;
        }
      };
      break;
  }

  return descriptor;
};
