import express from "express";
import { MemberInListController } from '../controller/memberInListController.js'

const memberInListRouter = express.Router();
const milController = new MemberInListController()
memberInListRouter.get("/", milController.getListOfFamilies);
memberInListRouter.get("/:")
export {
    memberInListRouter
}