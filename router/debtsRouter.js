import express from "express";
import { DebtsController } from '../controller/debtsConroller.js'

const debtsRouter = express.Router();
const debtsConroller = new DebtsController()
debtsRouter.get("/:familyIndex", debtsConroller.getDebtsOfFamily)
debtsRouter.post("/", debtsConroller.addFamilyDebts)
debtsRouter.put("/:familyIndex", debtsConroller.editDebts)
export {
    debtsRouter
}