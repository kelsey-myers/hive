import express from "express";
import {
  getBuzzes,
  createBuzz,
  updateBuzz,
  deleteBuzz,
  likeBuzz,
} from "../controllers/buzzes.js";

const router = express.Router();

router.get("/", getBuzzes);
router.post("/", createBuzz);
router.patch("/:id", updateBuzz);
router.delete("/:id", deleteBuzz);
router.patch("/:id/likeBuzz", likeBuzz);

export default router;
