import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './lib/winston';
import cors from 'cors';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const maxRequestBodySize = '10mb';
app.use(express.json({limit: maxRequestBodySize}));
app.use(express.urlencoded({limit: maxRequestBodySize}));
app.use(cors(
    { 
      credentials: true,
      origin: "*"
    })
)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', (true as unknown as string));
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Origin',"*")
    next();
  });
  
app.get('/', (req: Request, res: Response) => {
    debugger
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
})


process.on('uncaughtException', (error:any) => {
    logger.error(`server crashed — uncahught exception ${error.message} ${error.stack}`)
    process.exit(1); // mandatory (as per the Node.js docs)
  });

process.on('unhandledRejection', (error:any) => {
    logger.error(`server crashed — unhandled rejection ${error.message} ${error.stack}`)
    process.exit(1); 
})

process.on('exit', (code) => {
    logger.info(`server shutdown ${code}`)
});

process.on('warning', (warning:any) => {
    logger.error("node warning",{warning})
});
