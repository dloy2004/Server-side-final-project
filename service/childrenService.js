import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class ChildrenService {

    async getChildrenOfFamily(familyIndex) {
        const childrenQuery = getByValueQuery("children", "familyIndex");        
        const result = await executeQuery(childrenQuery, [familyIndex]);
        return result;
    }

    async addChild(childObj) {
        const childrenQuery = addQuery("children", childObj.keys);
        const result = await executeQuery(childrenQuery, childObj.values);
        return result;
    }


    async editChild(childId, childObj) {
        const childrenQuery = updateQuery("members", childObj.keys, "childId");
        const result = await executeQuery(childrenQuery, childObj.values + [childId]);//check syntax
        return result;
    }

    async deleteChild(childId) {
        const childrenQuery = deleteQuery("children", "childId");
        const result = executeQuery(childrenQuery, [childId]);
        return result;
    }

}