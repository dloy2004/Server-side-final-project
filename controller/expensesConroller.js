import { ExpensesService } from '../service/expensesService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class ExpensesController{

    async getExpensesOfFamily(req, res) {
       try {
            const expensesService = new ExpensesService();
            const resultItem = await expensesService.getExpensesOfFamily(req.query.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    
    async addExpense(req, res) {
        try {
            const expensesService = new ExpensesService();
            const result = await expensesService.addExpense(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async deleteExpense(req, res) {
        try {
            const expensesService = new ExpensesService();
            await expensesService.deleteAllExpenses(req.query.familyIndex);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}