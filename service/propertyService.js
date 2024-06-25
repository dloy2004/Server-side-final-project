import { executeQuery } from './db.js';

import { addQuery, getByValueQuery, updateQuery } from './queries.js'

export class PropertyService {

    async getPropertyOfFamily(familyIndex) {
        const propertyQuery = getByValueQuery("property", "familyIndex");        
        const result = await executeQuery(propertyQuery, [familyIndex]);
        return result;
    }

    async addPropertyDetails(propertyObj) {
        const propertyQuery = addQuery("property",Object.keys(propertyObj));
        const result = await executeQuery(propertyQuery, Object.values(propertyObj));
        return result;
    }


    async editProperty(familyIndex, propertyObj) {
        const propertyQuery = updateQuery("property", Object.keys(propertyObj), "familyIndex");
        const result = await executeQuery(propertyQuery, [...Object.values(propertyObj) ,familyIndex]);//check syntax
        return result;
    }
   

}