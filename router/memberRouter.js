import express from "express";
import { MemberController } from '../controller/memberController.js'

const memberRouter = express.Router();
const memberController = new MemberController()
memberRouter.get("/", memberController.getFamiliesWithParams);
// memberRouter.get("/ageRange", memberController.getFamiliesWithChildrenInAgeRange);
memberRouter.post("/", memberController.addFamily)
memberRouter.put("/:familyIndex", memberController.editFamily)
export {
    memberRouter
}