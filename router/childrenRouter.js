import express from "express";
import { ChildrenController } from '../controller/childrenConroller.js'

const childrenRouter = express.Router();
const childrenController = new ChildrenController()
childrenRouter.get("/:familyIndex", childrenController.getChildrenOfFamily)
childrenRouter.post("/", childrenController.addChild)
childrenRouter.delete("/:familyIndex/:childId", childrenController.deleteChild)
childrenRouter.put("/:familyIndex/:childId", childrenController.editChild)
export {
    childrenRouter
}