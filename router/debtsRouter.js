import express from "express";
import { DebtsController } from '../controller/debtsController.js'

const debtsRouter = express.Router();
const debtsConroller = new DebtsController()
debtsRouter.get("/", debtsConroller.getDebtsOfFamily)
debtsRouter.post("/", debtsConroller.addFamilyDebts)
debtsRouter.put("/:familyIndex", debtsConroller.editDebts)
export {
    debtsRouter
}