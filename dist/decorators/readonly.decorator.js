"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.addPropertyToClass2 = exports.addPropertyToClass = exports.ReadOnly = void 0;
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
const addPropertyToClass2 = (isNeedToAdd) => {
    return (target) => {
        target.A = "variable A";
    };
};
exports.addPropertyToClass2 = addPropertyToClass2;
const logError = (target, name, descriptor) => {
    const original = descriptor.value;
    // Run intermediately when server starts
    switch (typeof original) {
        case "function":
            descriptor.value = function (...args) {
                // Run when function invoked
                try {
                    const result = original.apply(this, args);
                    console.log(`result 123: ${result}`);
                    return result;
                }
                catch (error) {
                    throw error;
                }
            };
            break;
    }
    return descriptor;
};
exports.logError = logError;
