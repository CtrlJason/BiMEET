import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    get databaseUrl(): string;
    get port(): number;
    get nodeEnv(): string;
    get frontendUrl(): string;
    get isDevelopment(): boolean;
    get isProduction(): boolean;
}
