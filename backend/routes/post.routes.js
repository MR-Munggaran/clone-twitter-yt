import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  createPost,
  deletePost,
  commentOnPost,
  likeUnlikeOnPost,
  getAllPost,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPost);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.post("/like/:id", protectRoute, likeUnlikeOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
