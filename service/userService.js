import { executeQuery } from './db.js';

import {addQuery, verifyPasswordQuery,deleteQuery,updateQuery} from './queries.js'

export class PasswordService {

    async verifyPassword(name,pwd) {
        const queryPassword=verifyPasswordQuery();
        const result= await executeQuery(queryPassword,[name,pwd])
        return result;
   }

    async addPassword(userName,password) {
        const queryPassword=addQuery("passwords",["userName","password"]);
        const result= await executeQuery(queryPassword,[userName,password])
        return result;
    }

    async updatePassword(passwordItem) {
        const hashedPassword = sha256(passwordItem.password);
        const queryPassword=updateQuery("passwords",["password","userName"]);
        const result= await executeQuery(queryPassword,[hashedPassword,passwordItem.userName])
        return result;
   }


}