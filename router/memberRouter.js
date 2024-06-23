import express from "express";
import { MemberController } from '../controller/memberController.js'

const memberRouter = express.Router();
const memberController = new MemberController()
memberRouter.get("/:id", memberController.getFamilyByParentId)
memberRouter.get("/:numberOfChildren", memberController.getFamilyByNumberOfChildren)
memberRouter.get("/:familyName", memberController.getFamilyByFamilyName)
memberRouter.get("/:familyStatus", memberController.getFamilyByFamilyStatus)
memberRouter.get("/:husbandOccupation", memberController.getFamilyByHusbandOccupation)
memberRouter.get("/:parentName", memberController.getFamilyByParentName)
memberRouter.post("/", memberController.addFamily)
memberRouter.put("/:familyIndex", memberController.editFamily)
export {
    memberRouter
}