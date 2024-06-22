import express from "express";
import { MemberController } from '../controller/memberController.js'

const memberRouter = express.Router();
const memberController = new MemberController()
memberRouter.get("/:id", memberController.getFamilyByParentId)
memberRouter.get("/:numberOfChildren", memberController.getFamilyByNumberOfChildren)
memberRouter.get("/:familyName", memberController.getFamilyByFamilyName)
memberRouter.post("/", memberController.addFamily)
memberRouter.put("/:familyIndex", memberController.editFamily)
export {
    memberRouter
}