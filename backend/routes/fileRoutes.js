import express from "express";
import {
  getFiles,
  getFileById,
  createFile
} from "../controllers/fileController.js";

const router = express.Router();

router.get("/", getFiles);
router.get("/:id", getFileById);

// ✅ ADD THIS
router.post("/", createFile);

export default router;
