import { MemberService } from '../service/memberService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class MemberController {

    //deal with get functions!!!

    async getFamilyByParentId(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameEqualValue("husbandId", req.query.id);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByNumberOfChildren(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameEqualValue("numberOfChildren", req.query.numOfChildren);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByFamilyName(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameContainedValue("familyName", req.query.familyName);
            res.status(200).json({resultItem});
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


    async updateFamily(req, res) {
        try {
            const memberService = new MemberService();
            await memberService.updateFamily(req.familyIndex, req.body);
            res.status(200).json({ status: 200 });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }
}