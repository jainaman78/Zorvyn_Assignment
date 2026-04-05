import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

import {
  getSummary,
  categorySummary,monthlyTrends,
  recentActivity
} from "../controllers/dashboardController.js";

const router = express.Router();
router.get(
  "/monthly",
  authMiddleware,
  roleMiddleware("admin", "analyst"),
  monthlyTrends
);
router.get(
  "/summary",
  authMiddleware,
  roleMiddleware("admin", "analyst"),
  getSummary
);

router.get(
  "/category",
  authMiddleware,
  roleMiddleware("admin", "analyst"),
  categorySummary
);

router.get(
  "/recent",
  authMiddleware,
  roleMiddleware("admin", "analyst"),
  recentActivity
);

export default router;