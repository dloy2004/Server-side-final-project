import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, addOrOperatorQuery, updateQuery, getByContainedValueQuery } from './queries.js'

export class MemberService {

    // async getFamilyByParentId(parentId) {
    //     let memberQuery = getByValueQuery("members", "husbandId");
    //     memberQuery += addOrOperatorQuery("wifeId");
    //     const result = await executeQuery(memberQuery, [parentId])//pay attention how many times to send the parentId
    //     return result;
    // }
    async getFamiliesByColumnNameEqualValue(columnName, value) {
        const memberQuery = getByValueQuery("member", columnName);        
        const result = await executeQuery(memberQuery, [value]);
        return result;
    }

    async getFamiliesByColumnNameContainedValue(columnName, value) {
        const memberQuery = getByContainedValueQuery("member", columnName);
        const result = await executeQuery(memberQuery, [value]);
        return result;
    }

    async addFamily(familyObj) {
        const memberQuery = addQuery("members", familyObj.keys);
        const result = await executeQuery(memberQuery, familyObj.values);
        return result;
    }


    async updateFamily(familyIndex, familyObj) {
        const memberQuery = updateQuery("members", familyObj.keys, "familyIndex");
        const result = await executeQuery(memberQuery, familyObj.values + [familyIndex]);//fix the syntax so everything appears in one array
        return result;
    }

}