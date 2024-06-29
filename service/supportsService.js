import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery } from './queries.js'

export class SupportsService {

    async getSupportsByColumnName(query) {
        const supportsQuery = getDataWithParamsQuery("supports", query);
        const queryParams = Object.values(query);        
        const result = await executeQuery(supportsQuery, queryParams);
        return result;
    }

    async addSupport(supportObj) {
        const supportsQuery = addQuery("supports", Object.keys(supportObj));
        const result = await executeQuery(supportsQuery, Object.values(supportObj));
        return result;
    }

    
}