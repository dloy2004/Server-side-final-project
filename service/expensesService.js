import { executeQuery } from './db.js';

import { addQuery, deleteQuery, getDataWithParamsQuery } from './queries.js'

export class ExpensesService {

    async getExpensesOfFamily(tableName, query) {
        const expensesQuery = getDataWithParamsQuery(tableName, query); 
        const queryParams = Object.values(query);       
        const result = await executeQuery(expensesQuery, queryParams);
        return result;
    }

    async addExpense(tableName, expenseObj) {
        const expensesQuery = addQuery(tableName, Object.keys(expenseObj));
        const result = await executeQuery(expensesQuery, Object.values(expenseObj));
        return result;
    }

    async deleteAllExpenses(tableName, familyIndex) {
        const expensesQuery = deleteQuery(tableName, "familyIndex");
        const result = executeQuery(expensesQuery, [familyIndex]);
        return result;
    }
}