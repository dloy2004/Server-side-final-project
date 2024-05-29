import express from "express";
import { ChildrenController } from '../controller/ChildrenController.js'

const childrenRouter = express.Router();
const childrenController = new MemberController()
childrenRouter.get("/:familyIndex", childrenController.getChildrenOfFamily)

childrenRouter.post("/:familyIndex", childrenController.addChild)
childrenRouter.delete("/:familyIndex/:childId", childrenController.deleteChild)
childrenRouter.put("/:familyIndex/:childId", childrenController.editChild)
export {
    childrenRouter
}