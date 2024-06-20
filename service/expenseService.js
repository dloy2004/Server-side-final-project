import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class ExpenseService {

    async getExpensesOfFamily(familyIndex) {
        const expensesQuery = getByValueQuery("expenses", "familyIndex");        
        const result = await executeQuery(expensesQuery, [familyIndex]);
        return result;
    }

    async addExpense(expenseObj) {
        const expensesQuery = addQuery("expenses", expenseObj.keys);
        const result = await executeQuery(expensesQuery, expenseObj.values);
        return result;
    }

    async deleteAllExpenses(familyIndex) {
        const expensesQuery = deleteQuery("expenses", "familyIndex");
        const result = executeQuery(expensesQuery, [familyIndex]);
        return result;
    }

}