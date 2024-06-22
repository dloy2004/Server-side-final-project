import { BankService } from '../service/bankService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class BankController{

    async getAccountOfFamily(req, res) {
       try {
            const bankService = new BankService();
            const resultItem = await bankService.getAccountOfFamily(req.query.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }    

    async addAccountDetails(req, res) {
        try {
            const bankService = new BankService();
            const result = await bankService.addAccountDetails(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editAccount(req, res) {
        try {
            const bankService = new BankService();
            await bankService.editAccount(req.query.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
}