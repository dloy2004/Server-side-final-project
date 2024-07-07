import { executeQuery } from './db.js';

import { addQuery, getDataWithParamsQuery, updateQuery, deleteQuery } from './queries.js'

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
        const insertedId = result.insertId;
        console.log(insertedId)
        return insertedId;
    }

    async saveFile(file, familyIndex) {        
        const fileKeys = ['familyIndex', 'fileName', 'mimeType', 'data'];
        const query = addQuery('files', fileKeys);       
        const values = [familyIndex, file.originalname, file.mimetype, file.buffer];
        const result = await executeQuery(query, values);
        return result;
    }


    async getUploadedFile(fileId) {
        const query = "SELECT * FROM files WHERE fileId = ?";
        const result = await executeQuery(query, [fileId]);
        if (result.length === 0) {
            return null; // File not found
        }        
        return result[0]; // Return the first (and presumably only) result
    }

    async getAllFilesOfFamily(query) {
        const memberQuery = getDataWithParamsQuery("files", query);
        const queryParams = Object.values(query);
        const result = await executeQuery(memberQuery, queryParams);        
        return result;
    }

    async deleteFile(fileId) {
        console.log("in correct delte member service fucntion")
        const memberQuery = deleteQuery("files", "fileId");
        const result = executeQuery(memberQuery, [fileId]);
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