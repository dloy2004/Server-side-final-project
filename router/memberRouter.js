import express from "express";
import { MemberController } from '../controller/memberController.js'

const memberRouter = express.Router();
const memberController = new MemberController()
memberRouter.get("/id/:id", memberController.getFamilyByParentId)
memberRouter.get("/numberOfChildren/:numberOfChildren", memberController.getFamilyByNumberOfChildren)
memberRouter.get("/familyName/:familyName", memberController.getFamilyByFamilyName)
memberRouter.get("/familyStatus/:familyStatus", memberController.getFamilyByFamilyStatus)
memberRouter.get("/husbandOccupation/:husbandOccupation", memberController.getFamilyByHusbandOccupation)
memberRouter.get("/parentName/:parentName", memberController.getFamilyByParentName)
memberRouter.post("/", memberController.addFamily)
memberRouter.put("/:familyIndex", memberController.editFamily)
export {
    memberRouter
}