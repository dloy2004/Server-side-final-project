import { executeQuery } from './db.js';

import { addQuery, updateQuery, deleteQuery, getDataWithParamsQuery } from './queries.js'

export class ChildrenService {

    async getChildrenOfFamily(query) {
        const childrenQuery = getDataWithParamsQuery("children", query); 
        const queryParams = Object.values(query);
        const result = await executeQuery(childrenQuery, queryParams);
        return result;
    }

    async addChild(childObj) {
        const childrenQuery = addQuery("children", Object.keys(childObj));
        const result = await executeQuery(childrenQuery, Object.values(childObj));
        return result;
    }


    async editChild(childId, childObj) {
        console.log(childId);
        const childrenQuery = updateQuery("children", Object.keys(childObj), "childId");
        const result = await executeQuery(childrenQuery, [...Object.values(childObj) ,childId]);
        return result;
    }

    async deleteChild(childId) {
        const childrenQuery = deleteQuery("children", "childId");
        const result = executeQuery(childrenQuery, [childId]);
        return result;
    }

}