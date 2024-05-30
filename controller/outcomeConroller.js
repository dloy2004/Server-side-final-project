import { OutcomesService } from '../service/outcomesService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class OutcomesController{

    async getOutcomesOfFamily(req, res) {
       try {
            const outcomesService = new OutcomesService();
            const resultItem = await outcomesService.getOutcomesOfFamily(req.query.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    
    async addOutcome(req, res) {
        try {
            const outcomesService = new OutcomesService();
            const result = await outcomesService.addOutcome(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editOutcome(req, res) {
        try {
            const outcomesService = new OutcomesService();
            await outcomesService.editOutcome(req.query.outcomeId,req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async deleteOutcome(req, res) {
        try {
            const outcomesService = new OutcomesService();
            await outcomesService.deleteOutcome(req.query.outcomeId);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}