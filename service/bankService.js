import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class BankService {

    async getAccountOfFamily(familyIndex) {
        const bankQuery = getByValueQuery("bankAccounts", "familyIndex");        
        const result = await executeQuery(bankQuery, [familyIndex]);
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