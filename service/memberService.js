import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery, updateQuery } from './queries.js'

export class MemberService {

    async getFamiliesWithConditionalParams(query) {
        const memberQuery = getDataWithParamsQuery("members", query);
        const queryParams = Object.values(query);
        console.log(queryParams)
        const result = await executeQuery(memberQuery, queryParams.slice(2));
        return result;
    }

    async addFamily(familyObj) {
        const memberQuery = addQuery("members", Object.keys(familyObj));
        const result = await executeQuery(memberQuery, Object.values(familyObj));
        return result;
    }


    async updateFamily(familyIndex, familyObj) {
        const memberQuery = updateQuery("members", Object.keys(familyObj), "familyIndex");
        let temp = Object.values(familyObj);
        const result = await executeQuery(memberQuery, [...temp, ...familyIndex]);//fix the syntax so everything appears in one array
        return result;
    }
    
    // async getFamiliesWithChildrenInAgeRange(minAge, maxAge) {
    //     const conditions = {
    //         rangeColumn: 'childDOB', // The column to use for age calculation
    //         minRange: minAge,
    //         maxRange: maxAge,
    //         _limit: 20,
    //         _offset: 0
    //     };
    //     const { query, params } = NaturalJoinQuery("members", "children", "familyIndex", conditions);
    //     const result = await executeQuery(query, params);
    //     return result;
    // }



}