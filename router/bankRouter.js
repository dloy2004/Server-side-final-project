import express from "express";
import { BankController } from '../controller/bankController.js'

const bankRouter = express.Router();
const bankController = new BankController()
bankRouter.get("/:familyIndex", bankController.getAccountOfFamily)
bankRouter.post("/", bankController.addAccountDetails)
bankRouter.put("/:familyIndex", bankController.editAccount)
export {
    bankRouter
}