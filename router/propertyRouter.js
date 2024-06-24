import express from "express";
import { PropertyController } from '../controller/propertyController.js'

const propertyRouter = express.Router();
const propertyConroller = new PropertyController()
propertyRouter.get("/:familyIndex", propertyConroller.getPropertyOfFamily)
propertyRouter.post("/", propertyConroller.addPropertyDetails)
propertyRouter.put("/:familyIndex", propertyConroller.editProperty)
export {
    propertyRouter
}