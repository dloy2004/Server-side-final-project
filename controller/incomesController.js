import { IncomesService } from '../service/incomesService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class IncomesController{

    async getIncomesOfFamily(req, res) {
       try {
            const incomesService = new IncomesService();
            const data = await incomesService.getIncomesOfFamily(req.params.familyIndex);
            res.status(200).json({ data });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    
    async addIncome(req, res) {
        try {
            const incomesService = new IncomesService();
            const result = await incomesService.addIncome(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editIncome(req, res) {
        try {
            const incomesService = new IncomesService();
            await incomesService.editIncome(req.params.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

}