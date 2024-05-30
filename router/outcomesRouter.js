import express from "express";
import { OutcomesController } from '../controller/outcomesController.js'

const outcomeRouter = express.Router();
const outcomeController = new OutcomesController()
outcomeRouter.get("/:familyIndex", outcomeController.getOutcomesOfFamily)
outcomeRouter.post("/:familyIndex", outcomeController.addOutcome)
outcomeRouter.delete("/:familyIndex/:outcomeId", outcomeController.deleteOutcome)
outcomeRouter.put("/:familyIndex/:outcomeId", outcomeController.editOutcome)
export {
    outcomeRouter
}