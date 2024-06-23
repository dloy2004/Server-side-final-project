import { UserService } from '../service/userService.js'
import { logErrors } from '../middleWare/logErrors.js';
import pkg from 'crypto-js';
const { SHA256 } = pkg;

export class UserController {

    async verifyPwd(req, res) {
        try {
            const hashedPassword=SHA256(req.body.password).toString()
            const userService = new UserService();
            const ans=await userService.verifyPassword(req.body.userName,hashedPassword);
            res.status(200).json(ans)
        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async addPwd(req, res) {

        try {
            const hashedPassword=SHA256(req.body.password).toString()
            console.log(hashedPassword)
            const userService = new UserService();
            await userService.addPassword(req.body.userName,hashedPassword);
            res.status(200).json({ status: 200 })
        }
        catch (ex) {
            logErrors(ex, req, res); 

        }

    }

    async updatePwd(req, res) {

        try {

            const userService = new UserService();
            await userService.updatePassword(req.body);
            res.status(200).json({ status: 200 });

        }

        catch (ex) {
            logErrors(ex, req, res); 

        }

    }


     
}