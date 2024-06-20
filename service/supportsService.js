import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class IncomesService {

    async getSupportsByColumnName(columnName, value) {
        const supportsQuery = getByValueQuery("supports", columnName);        
        const result = await executeQuery(supportsQuery, [value]);
        return result;
    }

    async addSupport(supportObj) {
        const supportsQuery = addQuery("supports", supportObj.keys);
        const result = await executeQuery(supportsQuery, supportObj.values);
        return result;
    }

    
}