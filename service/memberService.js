import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery, updateQuery, getByContainedValueQuery } from './queries.js'

export class MemberService {
   
    async getFamiliesWithConditionalParams(query) {
        const memberQuery = getDataWithParamsQuery("members", query);
        const queryParams = Object.values(query);     
        const result = await executeQuery(memberQuery, queryParams);
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