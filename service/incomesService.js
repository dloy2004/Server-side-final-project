import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class IncomesService {

    async getIncomesOfFamily(familyIndex) {
        const incomesQuery = getByValueQuery("incomes", "familyIndex");        
        const result = await executeQuery(incomesQuery, [familyIndex]);
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