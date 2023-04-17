import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
import { logger } from "../lib/winston";

dotenv.config()

export const isAuthenticated = async (req:Request,res:Response,next:NextFunction)=>{
  try {
    return next()
  } catch (error:any) {
    logger.error("global auth failed",error)
    next(error)
  }

}
