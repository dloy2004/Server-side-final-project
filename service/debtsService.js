import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery } from './queries.js'

export class DebtsService {

    async getDebtsOfFamily(familyIndex) {
        const debtsQuery = getByValueQuery("bankAccounts", "familyIndex");        
        const result = await executeQuery(debtsQuery, [familyIndex]);
        return result;
    }

    async addAccountDetails(debtsObj) {
        const debtsQuery = addQuery("bankAccounts", debtsObj.keys);
        const result = await executeQuery(debtsQuery, debtsObj.values);
        return result;
    }


    async editAccount(familyIndex, debtsObj) {
        const debtsQuery = updateQuery("bankAccounts", debtsObj.keys, "familyIndex");
        const result = await executeQuery(debtsQuery, debtsObj.values + [familyIndex]);//check syntax
        return result;
    }
   

}