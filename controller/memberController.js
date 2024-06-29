import { MemberService } from '../service/memberService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class MemberController {   

    async getFamiliesWithParams(req, res) {
        try {
            const memberService = new MemberService();
            const data = await memberService.getFamiliesWithConditionalParams(req.query);            
            res.status(200).json({ data });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }    

    async addFamily(req, res) {
        try {
            const memberService = new MemberService();
            const result = await memberService.addFamily(req.body);
            res.status(200).json(result);
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }


    async editFamily(req, res) {
        try {
            const memberService = new MemberService();
            await memberService.updateFamily(req.params.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}