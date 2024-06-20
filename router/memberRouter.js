import express from "express";
import { MemberController } from '../controller/memberController.js'

const memberRouter = express.Router();
const memberController = new MemberController()
memberRouter.get("/:id", memberController.getFamilyByParentId)
memberRouter.get("/", memberController.someGetFunction)//fix
memberRouter.post("/", memberController.addFamily)
memberRouter.put("/:familyIndex", memberController.editFamily)
export {
    memberRouter
}