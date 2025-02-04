import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  getUserProfile,
  followUnfollowUser,
  getSuggestedProfile,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedProfile);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);

export default router;
