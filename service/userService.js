import { executeQuery } from './db.js';

import {addQuery, verifyPasswordQuery, deleteQuery, updateQuery} from './queries.js'

export class UserService {

    async verifyPassword(name,pwd) {
        const queryPassword=verifyPasswordQuery();
        const result= await executeQuery(queryPassword,[name,pwd])
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