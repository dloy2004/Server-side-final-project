import { executeQuery } from './db.js';

import { getSpecificColumnsQuery } from './queries.js'

export class MemberInListService {

    
    async getListOfFamilies(columnNames) {
        const milQuery = getSpecificColumnsQuery("members", columnNames);        
        const result = await executeQuery(milQuery);
        console.log(result);
        return result;
    }

    async getConditionalListOfFamilies() {

    }
    

}