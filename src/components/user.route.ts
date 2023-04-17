import express from 'express'
import { getUserRoute } from './user.controller'

const userRouter = express.Router()

userRouter.get("/",getUserRoute);

export default userRouter
