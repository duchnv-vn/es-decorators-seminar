"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateFunction = void 0;
const decorateFunction = (target, functionName, descriptor) => {
    console.log('------------------------');
    console.log('target', target);
    console.log('------------------------');
    console.log('key', functionName);
    console.log('------------------------');
    console.log('descriptor', descriptor);
    console.log('------------------------');
    return Object.assign(Object.assign({}, descriptor), { writable: false });
};
exports.decorateFunction = decorateFunction;
//# sourceMappingURL=function_decorators.js.map