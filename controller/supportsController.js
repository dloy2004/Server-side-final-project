import { SupportsService } from '../service/supportsService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class SupportsController{
    
    async getSupportsOfFamily(req, res) {
       try {
            const supportsService = new SupportsService();
            const resultItem = await supportsService.getSupportsOfFamily(req.query.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    async getSupportsOfOrganization(req, res) {
        try {
             const supportsService = new SupportsService();
             const resultItem = await supportsService.getSupportsOfOrganization(req.query.organization);
             res.status(200).json({ resultItem });
         }
         catch (ex) {
             logErrors(ex, req, res);
         }
 
     }
     async getSupportsByDate(req, res) {
        try {
             const supportsService = new SupportsService();
             const resultItem = await supportsService.getSupportsByDate(req.query.date);
             res.status(200).json({ resultItem });
         }
         catch (ex) {
             logErrors(ex, req, res);
         }
 
     }
    
    async addSupport(req, res) {
        try {
            const supportsService = new SupportsService();
            const result = await supportsService.addSupport(req.query.familyIndex,req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }


    async deleteSupportByOrganization(req, res) {
        try {
            const supportsService = new SupportsService();
            await supportsService.deleteSupportByOrganization(req.query.organization);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async deleteSupportByDate(req, res) {
        try {
            const supportsService = new SupportsService();
            await supportsService.deleteSupportByDate(req.query.date);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}