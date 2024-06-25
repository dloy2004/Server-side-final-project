import { MemberService } from '../service/memberService.js'
import { logErrors } from '../middleWare/logErrors.js';

export class MemberController {

    //deal with get functions!!!

    async getFamilyByParentId(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameEqualValue("husbandId", req.params.id);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByNumberOfChildren(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameEqualValue("numberOfChildren", req.params.numberOfChildren);
            res.status(200).json({ resultItem });
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByFamilyName(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameContainedValue("familyName", req.params.familyName);
            res.status(200).json({resultItem});
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByParentName(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameContainedValue("parentName", req.params.familyName);
            res.status(200).json({resultItem});
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByHusbandOccupation(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameEqualValue("husbandOccupation", req.params.hubandOccupation);
            res.status(200).json({resultItem});
        }
        catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async getFamilyByFamilyStatus(req, res) {
        try {
            const memberService = new MemberService();
            const resultItem = await memberService.getFamiliesByColumnNameEqualValue("familyStatus", req.params.familyStatus);
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