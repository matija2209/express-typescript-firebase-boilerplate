// import LogzioWinstonTransport from 'winston-logzio'
import winston,{format} from 'winston'

import {LoggingWinston} from '@google-cloud/logging-winston'
import credentials from '../pushbackbuster-3a30c40d5f7e.json'
import dotenv from 'dotenv'

dotenv.config()

const loggingWinston = new LoggingWinston({
    credentials,
    logName:"sc-api1",
    level:"error"
});

export const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    format: format.combine(
        format.timestamp(),
        format.splat(),
        format.json()
      ),
    transports: [
        new (winston.transports.File)({ filename: `${process.env.NODE_ENV}_api-1_log_file.log`,dirname:"src/logs",level:"debug"}),
    ],
});


if (process.env.NODE_ENV === 'production') {
    logger.add(loggingWinston)
} else {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
        level:"debug"
    }));
}
