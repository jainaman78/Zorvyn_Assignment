import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

const router = express.Router();

// Admin only
router.post("/", authMiddleware, roleMiddleware("admin"), createRecord);


// All roles
router.get("/", authMiddleware, roleMiddleware("admin", "analyst", "viewer"), getRecords);

// Admin only
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateRecord);

router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteRecord);

export default router;