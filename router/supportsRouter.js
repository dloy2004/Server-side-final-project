import express from "express";
import { SupportsController } from '../controller/supportsController.js'

const supportsRouter = express.Router();
const supportsController = new SupportsController()
supportsRouter.get("/familyIndex/:familyIndex", supportsController.getSupportsOfFamily)
supportsRouter.get("/organization/:organization", supportsController.getSupportsOfOrganization)
supportsRouter.get("/date/:date", supportsController.getSupportsByDate)
supportsRouter.post("/", supportsController.addSupport)
export {
    supportsRouter
}