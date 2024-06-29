import express from "express";
import { ExpensesController } from '../controller/expensesController.js'

const expensesRouter = express.Router();
const expenseController = new ExpensesController()
expensesRouter.get("/", expenseController.getExpensesOfFamily)
expensesRouter.post("/:familyIndex", expenseController.addExpense)
expensesRouter.delete("/:familyIndex", expenseController.deleteExpense)
export {
    expensesRouter
}