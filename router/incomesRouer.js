import express from "express";
import { IncomesController } from '../controller/incomesController.js'

const incomesRouter = express.Router();
const incomeController = new IncomesController()
incomesRouter.get("/", incomeController.getIncomesOfFamilyByYear)
incomesRouter.post("/:year", incomeController.addIncome)
incomesRouter.put("/:familyIndex", incomeController.editIncome)
export {
    incomesRouter
}