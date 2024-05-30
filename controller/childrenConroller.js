import { ChildrenService } from '../service/childrenService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class ChildrenController{

    async getChildrenOfFamily(req, res) {
       try {
            const childrenService = new ChildrenService();
            const resultItem = await childrenService.getChildrenOfFamily(req.query.familyIndex);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }

    }
    

    async addChild(req, res) {
        try {
            const childrenService = new ChildrenService();
            const result = await childrenService.addChild(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
    async editChild(req, res) {
        try {
            const childrenService = new ChildrenService();
            await childrenService.editChild(req.query.childId,req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async deleteChild(req, res) {
        try {
            const childrenService = new ChildrenService();
            await childrenService.deleteChild(req.query.childId);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}