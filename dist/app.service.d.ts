import { BaseService } from './base.service';
export declare class AppService {
    private readonly baseService;
    constructor(baseService: BaseService);
    getHello(): string;
}
