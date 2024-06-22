import express from "express";
import { ExpenseController } from '../controller/expenseController.js'

const expenseRouter = express.Router();
const expenseController = new ExpenseController()
expenseRouter.get("/:familyIndex", expenseController.getExpenseOfFamily)
expenseRouter.post("/:familyIndex", expenseController.addExpense)
expenseRouter.delete("/:familyIndex", expenseController.deleteExpense)
export {
    expenseRouter
}