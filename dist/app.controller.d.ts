import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    password: string;
    constructor(appService: AppService);
    getHello(): string;
}
