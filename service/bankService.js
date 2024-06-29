import { executeQuery } from './db.js';

import { addQuery, updateQuery, getDataWithParamsQuery } from './queries.js'

export class BankService {

    async getAccountOfFamily(query) {
        const bankQuery = getDataWithParamsQuery("bankAccounts", query);
        const queryParams = Object.values(query);        
        const result = await executeQuery(bankQuery, queryParams);
        return result;
    }

    async addAccountDetails(accountObj) {
        const bankQuery = addQuery("bankAccounts", Object.keys(accountObj));
        const result = await executeQuery(bankQuery, Object.values(accountObj));
        return result;
    }

    async editAccount(familyIndex, accountObj) {
        const bankQuery = updateQuery("bankAccounts",Object.keys(accountObj), "familyIndex");
        const result = await executeQuery(bankQuery, [Object.values(accountObj) ,[familyIndex]]);//check syntax
        return result;
    }
   

}