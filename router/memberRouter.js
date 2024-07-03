import express from "express";
import { MemberController } from '../controller/memberController.js'
import multer from "multer";

const memberRouter = express.Router();
const memberController = new MemberController();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

memberRouter.get("/", memberController.getFamiliesWithParams);
memberRouter.post("/", memberController.addFamily);
memberRouter.post("/upload", upload.single('file'), memberController.uploadFile);
memberRouter.get("/files/:fileId", memberController.getUploadedFile); // New route to fetch file details
memberRouter.get("/files", memberController.getAllFilesOfFamily);
memberRouter.delete("/files/:fileId", memberController.deleteFile);
memberRouter.put("/:familyIndex", memberController.editFamily);

export {
    memberRouter
}
