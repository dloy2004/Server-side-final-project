import express from "express";
import { ExpensesController } from '../controller/expensesConroller.js'

const expensesRouter = express.Router();
const expenseController = new ExpensesController()
expensesRouter.get("/:familyIndex", expenseController.getExpenseOfFamily)
expensesRouter.post("/:familyIndex", expenseController.addExpense)
expensesRouter.delete("/:familyIndex", expenseController.deleteExpense)
export {
    expensesRouter
}