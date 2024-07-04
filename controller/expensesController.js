import { ExpensesService } from '../service/expensesService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class ExpensesController{

    async getExpensesOfFamilyByYear(req, res) {
       try {
            const expensesService = new ExpensesService();
            const { year, ...query } = req.query;  
            const data = await expensesService.getExpensesOfFamily(`expenses${year}`, query);
            res.status(200).json({ data });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    
    async addExpense(req, res) {
        try {
            const expensesService = new ExpensesService();
            const  { year } = req.params;  
            const result = await expensesService.addExpense(`expenses${year}`, req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async deleteExpense(req, res) {
        try {
            const expensesService = new ExpensesService();
            const { year, ...query } = req.query;
            await expensesService.deleteAllExpenses(`expenses${year}`, req.params.familyIndex);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}