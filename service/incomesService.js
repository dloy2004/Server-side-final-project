import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery } from './queries.js'

export class IncomesService {

    async getIncomesOfFamily(query) {
        const incomesQuery = getDataWithParamsQuery("incomes", query);
        const queryParams = Object.values(query);
        const result = await executeQuery(incomesQuery, queryParams);
        return result;
    }

    async addIncome(incomeObj) {
        const incomesQuery = addQuery("incomes", Object.keys(incomeObj));
        const result = await executeQuery(incomesQuery, Object.values(incomeObj));
        return result;
    }

    /*async editIncome(familyIndex, incomeObj) {
        const incomesQuery = updateQuery("incomes", incomeObj.keys, "familyIndex");
        const result = await executeQuery(incomesQuery, incomeObj.values+[familyIndex]);//syntax
        return result;
    }*/

}