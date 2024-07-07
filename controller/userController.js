import { UserService } from '../service/userService.js';
import { logErrors } from '../middleWare/logErrors.js';
import jwt from 'jsonwebtoken';

const SECRET_KEY = '3q5GJ#k9$!s@L2&F';

export class UserController {

    

    async verifyPwd(req, res) {
        try {
            const userService = new UserService();
            const user = await userService.verifyPassword(req.body.userName, req.body.password);

            if (user.length > 0) {
                const token = jwt.sign({ userName: req.body.userName }, SECRET_KEY, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true });
                res.status(200).json({ message: 'Login successful', role: user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (ex) {
            logErrors(ex, req, res); 
        }
    }
   

    async addPwd(req, res) {
        try {
            const userService = new UserService();
            await userService.addPassword(req.body.userName, req.body.password);

            const token = jwt.sign({ userName: req.body.userName }, SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ status: 200 });
        } catch (ex) {
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