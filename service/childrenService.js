import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, deleteQuery } from './queries.js'

export class ChildrenService {

    async getChildrenOfFamily(familyIndex) {
        const childrenQuery = getByValueQuery("children", "familyIndex");        
        const result = await executeQuery(childrenQuery, [familyIndex]);
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