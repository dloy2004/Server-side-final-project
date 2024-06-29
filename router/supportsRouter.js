import express from "express";
import { SupportsController } from '../controller/supportsController.js'

const supportsRouter = express.Router();
const supportsController = new SupportsController()
supportsRouter.get("/", supportsController.getSupportsUsingParams)
supportsRouter.post("/", supportsController.addSupport)
export {
    supportsRouter
}