import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery } from './queries.js'

export class PropertyService {

    async getPropertyOfFamily(familyIndex) {
        const propertyQuery = getByValueQuery("property", "familyIndex");        
        const result = await executeQuery(propertyQuery, [familyIndex]);
        return result;
    }

    async addPropertyDetails(propertyObj) {
        const propertyQuery = addQuery("property", propertyObj.keys);
        const result = await executeQuery(propertyQuery, propertyObj.values);
        return result;
    }


    async editProperty(familyIndex, propertyObj) {
        const propertyQuery = updateQuery("property", propertyObj.keys, "familyIndex");
        const result = await executeQuery(propertyQuery, propertyObj.values + [familyIndex]);//check syntax
        return result;
    }
   

}