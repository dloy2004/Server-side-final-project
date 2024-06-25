import { MemberInListService } from '../service/memberInListService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class MemberInListController {
    

    async getListOfFamilies(req, res) {
        try {
            const milService = new MemberInListService();
            //check out what columns to return!!!
            const resultItem = await milService.getListOfFamilies(["familyName","numberOfChildren"]);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    
}