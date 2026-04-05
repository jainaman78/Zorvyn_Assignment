import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { getUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

// Admin only
router.get("/", authMiddleware, roleMiddleware("admin"), getUsers);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateUser);

export default router;