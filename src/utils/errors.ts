import dotenv from 'dotenv'
import {logger} from '../lib/winston'
import { Request, Response, NextFunction,Errback } from "express"

dotenv.config()

export const logError =  (err:any, req:Request, res:Response, next:NextFunction)=> {
    logger.error(`${err.name} — ${err.message} — ${req.originalUrl}`,{err})
    return next(err)
}

export const returnError =  (err:any, req:Request, res:Response, next:NextFunction)=> {
    const code = err?.errorInfo?.code
    const message = err?.errorInfo?.message
    
    // Special Firebase error
    if (code === 'auth/id-token-expired') {
        return res.status(401).json({name:code,message})
    }
    return res.status(err.statusCode || 500).json({message:err.message,name:err.name,statusCode:err.statusCode,missingValues:err?.missingValues})
}
