import { PropertyService } from '../service/propertyService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class PropertyController{

    async getPropertyOfFamily(req, res) {
       try {
            const propertyService = new PropertyService();
            const data = await propertyService.getPropertyOfFamily(req.query);
            res.status(200).json({ data });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }    

    async addPropertyDetails(req, res) {
        try {
            const propertyService = new PropertyService();
            const result = await propertyService.addPropertyDetails(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editProperty(req, res) {
        try {
            const propertyService = new PropertyService();
            await propertyService.editProperty(req.params.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
}