import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery, updateQuery } from './queries.js'

export class DebtsService {

    async getDebtsOfFamily(query) {
        const debtsQuery = getDataWithParamsQuery("bankAccounts", query);    
        const queryParams = Object.values(query);    
        const result = await executeQuery(debtsQuery, queryParams);
        return result;
    }

    async addAccountDetails(debtsObj) {
        const debtsQuery = addQuery("bankAccounts", Object.keys(debtsObj));
        const result = await executeQuery(debtsQuery, Object.values(debtsObj));
        return result;
    }


    async editAccount(familyIndex, debtsObj) {
        const debtsQuery = updateQuery("bankAccounts", Object.keys(debtsObj), "familyIndex");
        const result = await executeQuery(debtsQuery, [...Object.values(debtsObj), familyIndex]);//check syntax
        return result;
    }
   

}