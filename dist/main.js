"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const rxjs_1 = require("rxjs");
const PORT = 3000;
(0, rxjs_1.from)(core_1.NestFactory.create(app_module_1.AppModule))
    .pipe((0, rxjs_1.concatMap)((app) => app.listen(PORT)))
    .subscribe({
    next: () => {
        console.log('------------------------');
        console.log(`App is listening on PORT: ${PORT}`);
        console.log('------------------------');
    },
});
//# sourceMappingURL=main.js.map