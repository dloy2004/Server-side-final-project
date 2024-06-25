import { SupportsService } from '../service/supportsService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class SupportsController{
    
    async getSupportsOfFamily(req, res) {
       try {
            const supportsService = new SupportsService();
            const resultItem = await supportsService.getSupportsByColumnName("familyIndex", req.params.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    async getSupportsOfOrganization(req, res) {
        try {
             const supportsService = new SupportsService();
             const resultItem = await supportsService.getSupportsByColumnName("organization", req.params.organization);
             res.status(200).json({ resultItem });
         }
         catch (ex) {
             logErrors(ex, req, res);
         }
 
     }
     async getSupportsByDate(req, res) {
        try {
             const supportsService = new SupportsService();
             const resultItem = await supportsService.getSupportsByColumnName("date", req.params.date);
             res.status(200).json({ resultItem });
         }
         catch (ex) {
             logErrors(ex, req, res);
         }
 
     }
    
    async addSupport(req, res) {
        try {
            const supportsService = new SupportsService();
            const result = await supportsService.addSupport(req.params.familyIndex, req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }


}