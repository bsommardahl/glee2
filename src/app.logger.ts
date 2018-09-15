import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import * as dotenv from 'dotenv';
dotenv.config();

export class AppLogger implements LoggerService {
    private logger;

    constructor() {
        const loggly = new Loggly({
            subdomain: process.env.LOGGLY_SUBDOMAIN,
            token: process.env.LOGGLY_TOKEN,
            tags: ["backend"],
            level: process.env.LOGGLY_LEVEL || "info",
            json: true
        });

        const logConsole = new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.simple(),
        });

        this.logger = winston.createLogger({
            transports: [
                logConsole,
                loggly
            ]
        });
    }

    log(message: string) {
        this.logger.log("debug", { message });
    }

    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }

    warn(message: string) {
        this.logger.warn(message);
    }

    info(message: string) {
        this.logger.info(message);
    }
}