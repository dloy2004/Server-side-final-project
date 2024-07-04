import { DebtsService } from '../service/debtsService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class DebtsController{

    async getDebtsOfFamily(req, res) {
       try {
            const debtsService = new DebtsService();
            const data = await debtsService.getDebtsOfFamily(req.query);
            res.status(200).json({ data });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }    

    async addFamilyDebts(req, res) {
        try {
            const debtsService = new DebtsService();
            const result = await debtsService.addFamilyDebts(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editDebts(req, res) {
        try {
            const debtsService = new DebtsService();
            await debtsService.editFamilyDebts(req.params.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
}