import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery, updateQuery } from './queries.js'

export class IncomesService {

    async getIncomesOfFamily(tableName, query) {
        const incomesQuery = getDataWithParamsQuery(tableName, query);
        const queryParams = Object.values(query);
        const result = await executeQuery(incomesQuery, queryParams);
        return result;
    }

    async addIncome(tableName, incomeObj) {
        const incomesQuery = addQuery(tableName, Object.keys(incomeObj));
        const result = await executeQuery(incomesQuery, Object.values(incomeObj));
        return result;
    }

    async editIncome(tableName, familyIndex, incomeObj) {
        const incomesQuery = updateQuery(tableName, Object.keys(incomeObj), "familyIndex");
        const result = await executeQuery(incomesQuery, [...Object.values(incomeObj), ...familyIndex]);//syntax
        return result;
    }
}