import { Request,Response,NextFunction } from 'express';

export const getUserRoute = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        return res.end()
    } catch (error:any) {
        next(error)
    }
}