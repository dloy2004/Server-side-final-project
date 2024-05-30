import express from "express";
import { SupportsController } from '../controller/supportsController.js'

const supportsRouter = express.Router();
const supportsController = new SupportsController()
supportsRouter.get("/:familyIndex", supportsController.getSupportsOfFamily)
supportsRouter.get("/:organization", supportsController.getSupportsOfOrganization)
supportsRouter.get("/:date", supportsController.getSupportsByDate)
supportsRouter.post("/:familyIndex", supportsController.addSupport)
supportsRouter.delete("/:organization", supportsController.deleteSupportByOrganization)
supportsRouter.delete("/:date", supportsController.deleteSupportByDate)
export {
    supportsRouter
}