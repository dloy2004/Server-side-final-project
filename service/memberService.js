import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery, getByContainedValueQuery } from './queries.js'

export class MemberService {

    // async getFamilyByParentId(parentId) {
    //     let memberQuery = getByValueQuery("members", "husbandId");
    //     memberQuery += addOrOperatorQuery("wifeId");
    //     const result = await executeQuery(memberQuery, [parentId])//pay attention how many times to send the parentId
    //     return result;
    // }
    async getFamiliesByColumnNameEqualValue(columnName, value) {
        const memberQuery = getByValueQuery("members", columnName);        
        const result = await executeQuery(memberQuery, [value]);
        return result;
    }

    async getFamiliesByColumnNameContainedValue(columnName, value) {
        const memberQuery = getByContainedValueQuery("members", columnName);
        const result = await executeQuery(memberQuery, [value]);
        return result;
    }

    async addFamily(familyObj) {
        const memberQuery = addQuery("members", Object.keys(familyObj));
        const result = await executeQuery(memberQuery, Object.values(familyObj));
        return result;
    }


    async updateFamily(familyIndex, familyObj) {
        const memberQuery = updateQuery("members", Object.keys(familyObj), "familyIndex");
        let temp=Object.values(familyObj);
        const result = await executeQuery(memberQuery, [... temp,...familyIndex]);//fix the syntax so everything appears in one array
        return result;
    }

}