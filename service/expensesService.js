import { executeQuery } from './db.js';

import { addQuery, deleteQuery, getDataWithParamsQuery } from './queries.js'

export class ExpensesService {

    async getExpensesOfFamily(query) {
        const expensesQuery = getDataWithParamsQuery(`expenses${process.env.YEAR}`, query); 
        const queryParams = Object.values(query);       
        const result = await executeQuery(expensesQuery, queryParams);
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