import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery } from './queries.js'

export class DebtsService {

    async getDebtsOfFamily(familyIndex) {
        const debtsQuery = getByValueQuery("bankAccounts", "familyIndex");        
        const result = await executeQuery(debtsQuery, [familyIndex]);
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