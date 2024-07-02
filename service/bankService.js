import { executeQuery } from './db.js';

import { addQuery, updateQuery, getDataWithParamsQuery } from './queries.js'

export class BankService {

    async getAccountOfFamily(query) {
        const bankQuery = getDataWithParamsQuery("banks", query);
        const queryParams = Object.values(query);        
        const result = await executeQuery(bankQuery, queryParams);
        return result;
    }

    async addAccountDetails(accountObj) {
        const bankQuery = addQuery("banks", Object.keys(accountObj));
        const result = await executeQuery(bankQuery, Object.values(accountObj));
        return result;
    }

    async editAccount(familyIndex, accountObj) {
        const bankQuery = updateQuery("banks",Object.keys(accountObj), "familyIndex");
        const result = await executeQuery(bankQuery, [Object.values(accountObj) ,[familyIndex]]);//check syntax
        return result;
    }
   

}