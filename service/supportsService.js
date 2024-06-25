import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class SupportsService {

    async getSupportsByColumnName(columnName, value) {
        const supportsQuery = getByValueQuery("supports", columnName);        
        const result = await executeQuery(supportsQuery, [value]);
        return result;
    }

    async addSupport(supportObj) {
        const supportsQuery = addQuery("supports", Object.keys(supportObj));
        const result = await executeQuery(supportsQuery, Object.values(supportObj));
        return result;
    }

    
}