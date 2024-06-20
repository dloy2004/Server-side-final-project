import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class BankService {

    async getAccountOfFamily(familyIndex) {
        const bankQuery = getByValueQuery("bankAccounts", "familyIndex");        
        const result = await executeQuery(bankQuery, [familyIndex]);
        return result;
    }

    async addAccountDetails(accountObj) {
        const bankQuery = addQuery("bankAccounts", accountObj.keys);
        const result = await executeQuery(bankQuery, accountObj.values);
        return result;
    }


    async editAccount(familyIndex, accountObj) {
        const bankQuery = updateQuery("bankAccounts", accountObj.keys, "familyIndex");
        const result = await executeQuery(bankQuery, accountObj.values + [familyIndex]);//check syntax
        return result;
    }
   

}