import { MemberService } from '../service/memberService.js';
import { logErrors } from '../middleWare/logErrors.js';

export class MemberController {
    async getFamiliesWithParams(req, res) {
        try {
            const memberService = new MemberService();
            const data = await memberService.getFamiliesWithConditionalParams(req.query);
            res.status(200).json({ data });
        } catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async addFamily(req, res) {
        try {
            const memberService = new MemberService();
            const result = await memberService.addFamily(req.body);
            res.status(200).json(result);
        } catch (ex) {
            logErrors(ex, req, res);
        }
    }

    // async uploadFile(req, res) {
    //     try {
    //         const memberService = new MemberService();
    //         const file = req.file;
    //         const familyIndex = req.body.familyIndex;
    //         const result = await memberService.saveFile(file, familyIndex); // Delegate file saving to service
    //         res.status(200).json({ status: 200, result });
    //     } catch (ex) {
    //         logErrors(ex, req, res);
    //     }
    // }

    async uploadFile(req, res) {
        try {
            const memberService = new MemberService();
            const file = req.file;
            const familyIndex = req.body.familyIndex; // Extract familyIndex from req.body
            const result = await memberService.saveFile(file, familyIndex); // Delegate file saving to service
            res.status(200).json({ status: 200, result });
        } catch (ex) {
            logErrors(ex, req, res);
        }
    }
    

    async getUploadedFile(req, res) {
        try {
            const { fileId } = req.params; // Extract fileId from URL parameters
            const memberService = new MemberService();
            const fileData = await memberService.getUploadedFile(fileId); // Call service method to fetch file details

            if (!fileData) {
                return res.status(404).json({ error: 'File not found' });
            }

            // Assuming fileData contains necessary details like fileName, mimeType, etc.
            res.status(200).json(fileData);
        } catch (ex) {
            logErrors(ex, req, res);
        }
    }
    async getAllFilesOfFamily(req, res) {
        try {            
            const memberService = new MemberService();
            const filesData = await memberService.getAllFilesOfFamily(req.query); // Call service method to fetch file details
            // if (!filesData) {
            //     return res.status(404).json({ error: 'File not found' });
            // }
            res.status(200).json(filesData);
        } catch (ex) {
            logErrors(ex, req, res);
        }
    }

    async deleteFile(req, res) {
        try {
            const memberService = new MemberService();
            await memberService.deleteFile(req.params.fileId);
            res.status(200).json({ status: 200 });
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
        } catch (ex) {
            logErrors(ex, req, res);
        }
    }
}
