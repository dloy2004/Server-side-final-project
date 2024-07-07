import { executeQuery } from './db.js';

import {addQuery, updateQuery} from './queries.js'
import { verifyPasswordQuery } from './userQueries.js';

export class UserService {

    async verifyPassword(name,pwd) {
        const queryPassword = verifyPasswordQuery();
        const result = await executeQuery(queryPassword, [name,pwd] );        
        return result;
   }

    async addPassword(userName,password, userRank) {
        const queryPassword=addQuery("users",["userName","password","userRank"]);
        const result= await executeQuery(queryPassword,[userName,password,userRank])
        return result;
    }

    async updatePassword(passwordItem) {
        const queryPassword=updateQuery("users",["password","userName"]);
        const result= await executeQuery(queryPassword,[passwordItem.password,passwordItem.userName])
        return result;
   }


}