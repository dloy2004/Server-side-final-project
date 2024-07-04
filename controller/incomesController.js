import { IncomesService } from '../service/incomesService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class IncomesController{

    async getIncomesOfFamilyByYear(req, res) {
        try {
          const incomesService = new IncomesService();         
          const { year, ...query } = req.query;      
          const data = await incomesService.getIncomesOfFamily(`incomes${year}`, query);
          res.status(200).json({ data });
        } catch (ex) {
          logErrors(ex, req, res);
        }
      }
      
    
    async addIncome(req, res) {
        try {
            const incomesService = new IncomesService();
            const  { year } = req.params;           
            const result = await incomesService.addIncome(`incomes${year}`, req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editIncome(req, res) {
        try {
            const incomesService = new IncomesService();
            const { year, ...query } = req.query;  
            await incomesService.editIncome(`incomes${year}`, req.params.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

}