import express from "express";
import { IncomesController } from '../controller/incomesController.js'

const incomesRouter = express.Router();
const incomeController = new IncomesController()
incomesRouter.get("/:familyIndex", incomeController.getIncomesOfFamily)
incomesRouter.post("/:familyIndex", incomeController.addIncome)
incomesRouter.put("/:familyIndex", incomeController.editIncome)
export {
    incomesRouter
}