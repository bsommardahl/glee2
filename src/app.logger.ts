import { LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import * as dotenv from 'dotenv';
dotenv.config();

const logglySubdomain = process.env.LOGGLY_SUBDOMAIN;
const logglyToken = process.env.LOGGLY_TOKEN;

const getLogglyTransport = () => {
    return new Loggly({
        subdomain: logglySubdomain,
        token: logglyToken,
        tags: ["backend"],
        level: process.env.LOGGLY_LEVEL || "info",
        json: true
    });
};

export class AppLogger implements LoggerService {
    private logger;

    constructor() {

        const logConsole = new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.simple(),
        });

        const transports = [
            logConsole,
        ];

        const hasLogglyConfig = logglySubdomain && logglyToken;
        if (hasLogglyConfig) {
            transports.push(getLogglyTransport());
        }

        this.logger = winston.createLogger({
            transports
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