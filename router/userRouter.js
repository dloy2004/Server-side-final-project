import express from "express";
import { UserController } from '../controller/userController.js'

const userRouter = express.Router();
const userController = new UserController()
userRouter.post("/check",userController.verifyPwd)
userRouter.post("/", userController.addPwd)
userRouter.put("/", userController.updatePwd)
export {
    userRouter
}