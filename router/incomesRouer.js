import express from "express";
import { IncomesController } from '../controller/incomesController.js'

const incomeRouter = express.Router();
const incomeController = new IncomesController()
incomeRouter.get("/:familyIndex", incomeController.getIncomesOfFamily)
incomeRouter.post("/:familyIndex", incomeController.addIncome)
incomeRouter.put("/:familyIndex", incomeController.editIncome)
export {
    incomeRouter
}