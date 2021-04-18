import express from "express";
import { getBuzzes, createBuzz } from "../controllers/buzzes.js";

const router = express.Router();

router.get("/", getBuzzes);
router.post("/", createBuzz);

export default router;
