import { IncomesService } from '../service/incomesService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class IncomesController{

    async getIncomesOfFamily(req, res) {
       try {
            const incomesService = new IncomesService();
            const resultItem = await incomesService.getIncomesOfFamily(req.query.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    
    async addOutcome(req, res) {
        try {
            const incomesService = new IncomesService();
            const result = await incomesService.addIncome(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editOutcome(req, res) {
        try {
            const incomesService = new IncomesService();
            await incomesService.editIncome(req.query.incomeId,req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async deleteOutcome(req, res) {
        try {
            const incomesService = new IncomesService();
            await incomesService.deleteIncome(req.query.incomeId);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}