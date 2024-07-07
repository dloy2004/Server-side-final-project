import { executeQuery } from './db.js';

import {addQuery, updateQuery} from './queries.js'
import { verifyPasswordQuery } from './userQueries.js';

export class UserService {

    async verifyPassword(name,pwd) {
        const queryPassword = verifyPasswordQuery();
        const result = await executeQuery(queryPassword, [name,pwd] );
        console.log(result)
        return result;
   }

    async addPassword(userName,password) {
        const queryPassword=addQuery("users",["userName","password"]);
        const result= await executeQuery(queryPassword,[userName,password])
        return result;
    }

    async updatePassword(passwordItem) {
        const queryPassword=updateQuery("users",["password","userName"]);
        const result= await executeQuery(queryPassword,[passwordItem.password,passwordItem.userName])
        return result;
   }


}