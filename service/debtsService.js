import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery, updateQuery } from './queries.js'

export class DebtsService {

    async getDebtsOfFamily(query) {
        const debtsQuery = getDataWithParamsQuery("debts", query);    
        const queryParams = Object.values(query);    
        const result = await executeQuery(debtsQuery, queryParams);
        return result;
    }

    async addFamilyDebts(debtsObj) {
        const debtsQuery = addQuery("debts", Object.keys(debtsObj));
        const result = await executeQuery(debtsQuery, Object.values(debtsObj));
        return result;
    }


    async editFamilyDebts(familyIndex, debtsObj) {
        const debtsQuery = updateQuery("debts", Object.keys(debtsObj), "familyIndex");
        const result = await executeQuery(debtsQuery, [...Object.values(debtsObj), familyIndex]);
        return result;
    }
   

}