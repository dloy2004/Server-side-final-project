import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, deleteQuery } from './queries.js'

export class ExpensesService {

    async getExpensesOfFamily(familyIndex) {
        const expensesQuery = getByValueQuery(`expenses${process.env.YEAR}`, "familyIndex");        
        const result = await executeQuery(expensesQuery, [familyIndex]);
        return result;
    }

    async addExpense(expenseObj) {
        const expensesQuery = addQuery(`expenses${process.env.YEAR}`, Object.keys(expenseObj));
        const result = await executeQuery(expensesQuery, Object.values(expenseObj));
        return result;
    }

    async deleteAllExpenses(familyIndex) {
        const expensesQuery = deleteQuery(`expenses${process.env.YEAR}`, "familyIndex");
        const result = executeQuery(expensesQuery, [familyIndex]);
        return result;
    }

}