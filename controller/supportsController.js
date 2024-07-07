import { SupportsService } from '../service/supportsService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class SupportsController{
    
    async getSupportsUsingParams(req, res) {
       try {
            const supportsService = new SupportsService();
            const data = await supportsService.getSupportsByColumnName(req.query);            
            res.status(200).json({ data });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    
    
    async addSupport(req, res) {
        try {
            const supportsService = new SupportsService();
            const result = await supportsService.addSupport(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }


}